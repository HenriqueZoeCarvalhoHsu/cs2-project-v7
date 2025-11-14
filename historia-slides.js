// =========================================
// SISTEMA DE SLIDES - HISTÓRIA DO CS
// =========================================

class HistoriaSlider {
    constructor() {
        this.slides = document.querySelectorAll('.historia-slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.nav-btn.prev');
        this.nextBtn = document.querySelector('.nav-btn.next');
        this.fundo = document.querySelector('.historia-fundo');
        this.curiosidades = document.querySelectorAll('.curiosidade-card');
        this.currentSlide = 0;
        this.isTransitioning = false;
        
        this.init();
    }

    init() {
        // Event listeners para botões
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Event listeners para dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Suporte a swipe em dispositivos touch
        this.addTouchSupport();

        // Inicializa o primeiro slide
        this.updateSlide(0);
    }

    prevSlide() {
        if (this.isTransitioning) return;
        
        const newIndex = this.currentSlide === 0 
            ? this.slides.length - 1 
            : this.currentSlide - 1;
        
        this.goToSlide(newIndex);
    }

    nextSlide() {
        if (this.isTransitioning) return;
        
        const newIndex = this.currentSlide === this.slides.length - 1 
            ? 0 
            : this.currentSlide + 1;
        
        this.goToSlide(newIndex);
    }

    goToSlide(index) {
        if (this.isTransitioning || index === this.currentSlide) return;
        
        this.isTransitioning = true;
        
        // Remove classe active do slide e curiosidade atual
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        if (this.curiosidades[this.currentSlide]) {
            this.curiosidades[this.currentSlide].classList.remove('active');
        }
        
        // Atualiza índice
        this.currentSlide = index;
        
        // Adiciona classe active ao novo slide e curiosidade
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
        if (this.curiosidades[this.currentSlide]) {
            this.curiosidades[this.currentSlide].classList.add('active');
        }
        
        // Muda o fundo
        this.updateBackground();
        
        // Libera transição após animação
        setTimeout(() => {
            this.isTransitioning = false;
        }, 1000);
    }

    updateSlide(index) {
        this.slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        this.dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Atualiza curiosidades também
        this.curiosidades.forEach((curiosidade, i) => {
            if (i === index) {
                curiosidade.classList.add('active');
            } else {
                curiosidade.classList.remove('active');
            }
        });

        this.updateBackground();
    }

    updateBackground() {
        const currentSlideElement = this.slides[this.currentSlide];
        const bgImage = currentSlideElement.getAttribute('data-bg');
        
        if (bgImage) {
            this.fundo.style.backgroundImage = `url('${bgImage}')`;
        }
    }

    addTouchSupport() {
        let startX = 0;
        let endX = 0;

        this.fundo.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        this.fundo.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        }, { passive: true });

        this.fundo.addEventListener('touchend', () => {
            const diff = startX - endX;
            const threshold = 50; // Mínimo de pixels para considerar swipe

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    // Swipe left - próximo slide
                    this.nextSlide();
                } else {
                    // Swipe right - slide anterior
                    this.prevSlide();
                }
            }

            // Reset
            startX = 0;
            endX = 0;
        });
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new HistoriaSlider();
});

// Preload das imagens de fundo para transições suaves
const preloadImages = () => {
    const slides = document.querySelectorAll('.historia-slide');
    slides.forEach(slide => {
        const bgImage = slide.getAttribute('data-bg');
        if (bgImage) {
            const img = new Image();
            img.src = bgImage;
        }
    });
};

// Executa preload
preloadImages();