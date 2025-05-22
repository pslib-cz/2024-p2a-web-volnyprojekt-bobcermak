//hamburger + hamburger - menu
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

// no - scroll
function updateScrollLock() {
    const nav = document.querySelector('.hamburger-nav');
    const isActive = nav?.classList.contains('active');
    document.body.classList.toggle('noscroll', isActive);
    document.documentElement.classList.toggle('noscroll', isActive);
}
function handleNavClick(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const nav = e.currentTarget;
    nav.classList.remove('active');
    document.body.classList.remove('noscroll');
    document.documentElement.classList.remove('noscroll');
    document.querySelectorAll(".hamburger-zone").forEach(el => el.classList.remove("active"));
}
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.hamburger-nav');
    if (!nav) return;
    new MutationObserver(updateScrollLock).observe(nav, {
        attributes: true,
        attributeFilter: ['class']
    });
    updateScrollLock();
    nav.addEventListener('click', handleNavClick);
});