import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
//CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//Logic
const swiper = new Swiper('.swiper', {
    // loop: true,
    modules: [Navigation, Pagination],
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});