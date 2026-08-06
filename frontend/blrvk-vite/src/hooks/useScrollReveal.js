import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
