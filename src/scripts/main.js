import './fontawesome.js';
import './gsap.js';
import './swiper.js';
import './hamburger.js';

//page__price-list - click
const buttonWrapper = document.querySelector('.button-on-click.button-on-click--gray.button-icon.button-icon--chevron-down');
const priceListCards = document.querySelector('.page__price-list-cards-second');
buttonWrapper.addEventListener('click', () => {
  buttonWrapper.classList.toggle('active');
  priceListCards.classList.toggle('active');
});

//footer
document.getElementById("year").textContent = new Date().getFullYear();