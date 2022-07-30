const kebab = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

kebab.addEventListener('click', () => {
  kebab.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu').forEach(n => n.addEventListener('click', () => {
  kebab.classList.remove('active');
  navMenu.classList.remove('active');
}));