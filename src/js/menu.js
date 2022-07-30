const bento = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

bento.addEventListener('click', () => {
  bento.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu').forEach(n => n.addEventListener('click', () => {
  bento.classList.remove('active');
  navMenu.classList.remove('active');
}));