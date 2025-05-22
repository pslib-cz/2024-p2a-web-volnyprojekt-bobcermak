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