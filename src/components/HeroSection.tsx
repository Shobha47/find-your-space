"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const sectionRef = useRef(null);
    const headTextRef = useRef(null);
    const cloudLeftRef = useRef(null);
    const cloudRightRef = useRef(null);
    const houseRef = useRef(null);
    const bigCloudRef = useRef(null);
    const bigCloud1Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: true,
            },
            });

            // ALL animations start at same time (0)

            tl.to(
            headTextRef.current,
            {
                y: 100,
                opacity: 0,
                scale: 0, // 👈 ADD THIS
                transformOrigin: "center bottom",
                ease: "power1.out",
                scrub: 1.5
            },
            0
            );

            tl.to(
            cloudLeftRef.current,
            {
                x: -200,
                ease: "none",
            },
            0
            );

            tl.to(
            cloudRightRef.current,
            {
                x: 200,
                ease: "none",
            },
            0
            );

            // 1. Move house up (FULL duration)
            tl.to(
            houseRef.current,
            {
                y: -350,
                ease: "none", // important for smooth scrub
                scrub: 1
            },
            0
            );

            // 2. Fade ONLY AFTER it reaches center
            tl.to(
            houseRef.current,
            {
                opacity: 0,
                y: -500, // slight extra lift while fading
                ease: "none",
            },
            0.5 // 👈 delay = happens AFTER movement
            );

            tl.fromTo(
            bigCloudRef.current,
            {
                y: 0,
                opacity: 1,
            },
            {
                y: -100,
                opacity: 1,
                ease: "power2.out",
                scrub: 0.5
            },
            0
            );

            tl.fromTo(
            bigCloudRef.current,
            {
                y: 0,
                opacity: 1,
            },
            {
                y: -100,
                opacity: 1,
                ease: "power2.out",
                scrub: 0.5
            },
            0
            );
        }, sectionRef);

        return () => ctx.revert();
        }, []);

  return (
    <div ref={sectionRef} className="min-h-screen w-full relative overflow-hidden">

      {/* Background */}
      <div className="background absolute inset-0 -z-10">
        <img
          src="/assets/back.webp"
          className="w-full h-full object-cover"
        />
      </div>

      <div ref={headTextRef} className="head-text text-center absolute top-30 w-full inset-0 -z-5 space-y-6">
        <h1 className="font-extrabold text-2xl md:text-[100px] font-instrument">
            Find What Moves You
        </h1>

        <p className="text-gray-800 font-medium text-lg md:text-2xl font-instrument">
            Expert agents. Real guidance.{" "}
            <span className="text-gray-500">
            A clear path to find what’s next.
            </span>
        </p>

        {/* Button */}
        <button className="px-8 py-3 font-instrument bg-[#151717] text-white text-[12px] font-medium cursor-pointer rounded-[50px] hover:bg-gray-800 transition-all duration-300">
            Find Properties <span className="hover:scale-105">→</span>
        </button>
        </div>

      {/* Left Cloud */}
      <div ref={cloudLeftRef} className="cloud-left absolute top-[150px] left-[-16rem]">
        <img src="/assets/cloud1.webp" />
      </div>

      {/* Right Cloud */}
      <div ref={cloudRightRef} className="cloud-right absolute top-[120px] right-[-20rem]">
        <img src="/assets/cloud2.webp" />
      </div>

      { /* House */}
      <div ref={houseRef} className="house absolute w-max top-100 left-1/2 -translate-x-1/2 inset-0 -z-5">
        <img
          src="/assets/house.webp"
          className="w-auto h-[600px] md:h-[1200px] object-cover"
        />
      </div>

      { /* Big Cloud */}
      <div ref={bigCloudRef} className="big-cloud absolute w-max top-120 left-1/2 -translate-x-1/2 inset-0 -z-5">
        <img
          src="/assets/smoke.webp"
          className="w-auto h-[300px] md:h-[480px] object-cover"
        />
      </div>

      <div ref={bigCloud1Ref} className="big-cloud bg-transparent absolute w-max top-150 left-1/2 -translate-x-1/2 inset-0 -z-5">
        <img
          src="/assets/smoke.webp"
          className="w-auto h-[300px] md:h-[680px] object-cover"
        />
      </div>

    </div>
  );
}