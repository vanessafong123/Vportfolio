document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const navbar = header.querySelector('.navbar');
  const menuButton = header.querySelector('.menu-icon');
  const backToTopButton = document.getElementById('myBtn');

  window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
    backToTopButton.style.display = window.scrollY > 20 ? 'block' : 'none';
  });

  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
  document.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

  backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
