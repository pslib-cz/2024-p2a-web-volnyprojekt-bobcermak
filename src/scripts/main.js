import './anime.js';
import './fontawesome.js';
import './hamburger.js';
import './swiper.js';

//no - scroll
function updateScrollLock() {
    const isActive = document.querySelector('.hamburger-nav')?.classList.contains('active');
    document.body.classList.toggle('noscroll', isActive);
}
const target = document.querySelector('.hamburger-nav');
if (target) {
    new MutationObserver(updateScrollLock).observe(target, {
        attributes: true,
        attributeFilter: ['class']
    });
    updateScrollLock();
}

//footer
document.getElementById("year").textContent = new Date().getFullYear();