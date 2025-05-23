import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(Observer,ScrollTrigger,ScrollSmoother,SplitText);

//page__price-list - click
const screen = gsap.matchMedia();
function toggleExpand(buttonSelector, contentSelector) {
  const button = document.querySelector(buttonSelector);
  const content = document.querySelector(contentSelector);
  let isOpen = false;
  let anim;
  gsap.set(content, {
    height: 0,
    opacity: 0,
    marginTop: 0,
    pointerEvents: 'none'
  });
  button.addEventListener('click', () => {
    if (anim) anim.kill();
    isOpen = !isOpen;
    button.classList.toggle('active');
    if (isOpen) {
      gsap.set(content, { height: 'auto' });
      const fullHeight = content.offsetHeight;
      gsap.set(content, { height: 0 });
      anim = gsap.timeline()
        .to(content, {
          height: fullHeight,
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.6,
          marginTop: '2.5rem',
          ease: 'power1.out',
          onComplete: () => {
            content.style.height = 'auto';
          }
        });
    }
    else {
      anim = gsap.timeline()
        .to(content, {
          height: 0,
          opacity: 0,
          pointerEvents: 'none',
          marginTop: 0,
          duration: 0.6,
          ease: 'power1.inOut'
        });
    }
  });
}
screen.add("(max-width: 1281px)", () => {
  toggleExpand(".button-on-click.button-on-click--gray.button-icon.button-icon--chevron-down", ".page__price-list-cards-second");
});

//page__how-to-vouchers - main - animation
const section = document.querySelector('#how-to-vouchers');
const animationThreshold = .5;
if (section) {
  const elementsToAnimate = [
    section,
    document.querySelector(".wave-animation-bg-mobile"),
    document.querySelector(".wave-animation-bg-desktop"),
    document.querySelector(".voucher-step-write"),
    document.querySelector(".voucher-step-confirm"),
    document.querySelector(".voucher-step-pickup"),
  ].filter(Boolean);
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= animationThreshold) {
          elementsToAnimate.forEach(el => el.classList.add('animation'));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: [animationThreshold] }
  );
  observer.observe(section);
}