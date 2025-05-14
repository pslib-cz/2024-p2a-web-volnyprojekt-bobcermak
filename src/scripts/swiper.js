import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
//CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//Logic
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
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
        delay: 10000,
        disableOnInteraction: true,
    },
});