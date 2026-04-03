import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // ✅ THIS IS WHERE raf GOES
    function raf(time: any) {
      lenis.raf(time);
      ScrollTrigger.update(); // 👈 HERE (IMPORTANT)
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}