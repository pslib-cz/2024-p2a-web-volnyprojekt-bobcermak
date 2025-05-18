document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".hamburger-zone");
    for (const btn of document.querySelectorAll(".hamburger-btn")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});

//no - scroll
function updateScrollLock() {
    const nav = document.querySelector('.hamburger-nav');
    document.body.classList.toggle('noscroll', nav?.classList.contains('active'));
}
const nav = document.querySelector('.hamburger-nav');
if (nav) {
    new MutationObserver(updateScrollLock).observe(nav, {
        attributes: true,
        attributeFilter: ['class']
    });
    updateScrollLock();
    nav.addEventListener('click', e => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            nav.classList.remove('active');
            document.body.classList.remove('noscroll');
        }
    });
}