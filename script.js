document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const navbar = header.querySelector('.navbar');
  const menuButton = header.querySelector('.menu');
  const backToTopButton = document.getElementById('myBtn');

  // header scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
    navbar.classList.remove('show');
    backToTopButton.style.display = window.scrollY > 20 ? 'block' : 'none';
  });

  // responsive menu
  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });

  // back to top
  backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

