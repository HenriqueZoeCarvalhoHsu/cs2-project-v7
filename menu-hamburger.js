// Seleciona os elementos do menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Quando clicar no botão hamburger
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Fecha o menu ao clicar em algum link (em mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    body.classList.remove('menu-open');
  });
});
