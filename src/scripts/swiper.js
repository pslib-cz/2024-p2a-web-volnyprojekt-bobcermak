import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
//CSS
import '/src/styles/swiper.css';
//Logic
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 12000,
        disableOnInteraction: true,
    },
});