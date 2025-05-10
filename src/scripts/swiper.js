import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
//CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//Logic
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});