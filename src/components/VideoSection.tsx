'use client'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const headTextRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%",
                scrub: true,
            },
            });

            // ALL animations start at same time (0)

            tl.to(
            videoRef.current,
            {
                x: -200,
                ease: "none",
            },
            0
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [])

  return (
    <div ref={sectionRef} className="w-full min-h-screen relative overflow-hidden py-20 px-6"
    >

      {/* Heading */}
      <div ref={headTextRef} className="flex justify-between max-w-6xl mx-auto text-center space-y-6 mb-12">
        
        <h1 className="font-extrabold text-sm tracking-widest uppercase font-instrument text-gray-500">
          Why FIND
        </h1>

        <p className="font-instrument text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.4] tracking-tight text-black max-w-2xl">
            <span className="block">Your life’s changing.</span>

            <span className="block mt-2">
                Don’t just find a place — <br className="hidden md:block" />
                find what’s next.
            </span>

            <span className="block mt-4 text-gray-600">
                We help you move forward with clarity,
            </span>

            <span className="block text-gray-600">
                confidence, and the right agent by your side.
            </span>
            </p>

      </div>

      {/* Video */}
      <div className="w-full h-[70vh] md:h-[80vh] overflow-hidden relative max-w-6xl mx-auto">
        
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/why-us.mp4" type="video/mp4" />
        </video>

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

      </div>

    </div>
  );
}