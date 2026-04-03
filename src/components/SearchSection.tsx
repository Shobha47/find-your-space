"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SearchSection() {
  const sectionRef = useRef(null);
  const headTextRef = useRef(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headTextRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(stepsRef.current, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-[#f7f7f7] py-28 px-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        
        {/* LEFT */}
        <div ref={headTextRef} className="space-y-6">
          <h1 className="font-instrument text-[64px] leading-[1.05] tracking-tight text-black">
            Real Estate,
          </h1>

          <h1 className="font-instrument text-[64px] leading-[1.05] tracking-tight text-gray-400">
            Rewired.
          </h1>

          <button className="mt-6 px-6 py-3 bg-black text-white text-sm font-instrument rounded-full flex items-center gap-2 hover:opacity-80 transition">
            Start Your Search →
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-full">
          <p className="text-sm text-gray-500 mb-6  font-instrument">Steps:</p>

          <div className="border-t border-gray-200">
            {[
              {
                title: "Talk to a Real Human.",
                desc: "We match you with an expert who actually listens.",
              },
              {
                title: "Get Clarity.",
                desc: "We define what you really need, not just what’s available.",
              },
              {
                title: "Move Forward.",
                desc: "We find what fits — and make it happen.",
              },
            ].map((step, i) => (
              <div
                key={i}
                ref={(el) => {
                  stepsRef.current[i] = el;
                }}
                className="flex items-start gap-6 py-8 border-b border-gray-200"
              >
                {/* Number */}
                <span className="text-sm text-gray-400 mt-2  font-instrument">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <p className="text-[22px] leading-[1.4] text-gray-400 font-instrument">
                  <span className="text-black font-medium">
                    {step.title}
                  </span>{" "}
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}