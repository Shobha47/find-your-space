'use client'

import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import IdentitySection from "../components/IdentitySection";
import Navbar from "../components/Navbar";
import SearchSection from "../components/SearchSection";
import SmoothScroll from "../components/SmoothScrolling";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <div className="w-full bg-transparent">
      <SmoothScroll />
      <Navbar />
      <HeroSection />
      <VideoSection />
      <IdentitySection />
      <SearchSection />
      <ContactSection />
      <Footer />
    </div>
  );
}