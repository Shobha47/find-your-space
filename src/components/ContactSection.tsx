"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null); // 👈 NEW

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 📸 Image zoom
      tl.fromTo(
        imageRef.current,
        { scale: 1.2 },
        { scale: 1, ease: "none" },
        0
      );

      // ✨ TEXT reveal (comes first)
      tl.fromTo(
        textRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
        },
        0.1
      );

      // 🎯 BUTTON reveal (slightly after text)
      tl.fromTo(
        buttonRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
        },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 🔥 CONTACT SECTION */}
      <div
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Background */}
        <div ref={imageRef} className="absolute inset-0">
          <img
            src="/assets/bg.webp"
            className="w-full h-full object-cover"
            alt="contact"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-6">
          
          {/* ✨ TEXT */}
          <h2
            ref={textRef}
            className="text-white font-instrument text-3xl md:text-5xl font-medium tracking-tight leading-tight"
          >
            Find You. We’ll Help You Get There.
          </h2>

          {/* 🎯 BUTTON */}
          <button
            ref={buttonRef}
            className="px-10 py-4 bg-white text-black font-instrument rounded-full text-sm tracking-wide hover:scale-105 transition-all duration-300"
          >
            Contact Us →
          </button>
        </div>
      </div>
    </>
  );
}