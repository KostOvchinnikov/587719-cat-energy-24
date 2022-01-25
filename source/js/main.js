const mainNav = document.querySelector('.main-nav__wrapper');
const burgerButton = document.querySelector('.burger');

mainNav.classList.remove('main-nav__wrapper--no-js');

burgerButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav__wrapper--menu-opened')
  burgerButton.classList.toggle('burger--active');
});
