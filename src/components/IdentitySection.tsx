"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function IdentitySection() {
  const sectionRef = useRef(null);
  const headTextRef = useRef(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });

      // Heading slight fade/slide
      tl.from(headTextRef.current, {
        y: 50,
        opacity: 0,
        ease: "power2.out",
      });

      // 🔥 Images animation
      tl.from(
        imagesRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
          stagger: 0.2, // 👈 key for premium feel
          ease: "power3.out",
        },
        0.1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen relative overflow-hidden py-24 px-6"
    >
      <div
        ref={headTextRef}
        className="max-w-6xl mx-auto text-center space-y-10"
      >
        {/* Heading */}
        <h1 className="font-medium text-4xl tracking-tight font-instrument text-black">
          This isn’t just <span className="font-medium text-4xl tracking-tight font-instrument text-gray-400"> about real estate.</span>
        </h1>

        {/* 🔥 Arrow Images */}
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            {[1, 2, 3, 4].map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                imagesRef.current[i] = el;
                }}
                className="arrow-mask w-[120px] h-[160px] md:w-[240px] md:h-[300px] overflow-hidden -ml-6 first:ml-0"
              >
                <img
                  src={`/assets/${item}.webp`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <p className="font-instrument text-xl md:text-2xl lg:text-xl font-medium leading-[1.4] tracking-tight text-black max-w-3xl mx-auto text-balance">
            It’s about identity. Progress. Getting unstuck. You’re not just looking for a place. 
            <span className="text-gray-600">
                You’re looking for alignment. That’s what we help you find.
            </span>
        </p>
      </div>
    </div>
  );
}