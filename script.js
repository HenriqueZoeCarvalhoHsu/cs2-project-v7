let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    const navbar = document.getElementById("navbar");
    
    // Verifica se o navbar existe
    if (!navbar) return;
    
    const currentScrollPos = window.pageYOffset;
    const limite = 500;

    if (currentScrollPos < limite) {
        navbar.style.top = "0";
        navbar.style.transform = "translateY(0)";
    } else if (prevScrollPos > currentScrollPos) {
        // Rolando para cima - mostra navbar
        navbar.style.top = "0";
        navbar.style.transform = "translateY(0)";
    } else {
        // Rolando para baixo - esconde navbar
        navbar.style.top = "0";
        navbar.style.transform = "translateY(-100%)";
    }

    prevScrollPos = currentScrollPos;
};

// Animação suave ao aparecer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observa todos os elementos que precisam de animação
document.querySelectorAll('.map-card, .texto-card, .role-card, .tournament-card, .team-card, .mechanic-card').forEach(el => {
    observer.observe(el);
});