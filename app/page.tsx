"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Programs from "@/sections/Programs";
import About from "@/sections/About";
import CampusLife from "@/sections/CampusLife";
import Leadership from "@/sections/Leadership";
import Testimonials from "@/sections/Testimonials";
import Placement from "@/sections/Placement";
import CTA from "@/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Achievements / Trust Bar (Integrated into Hero but can be a small bar here) */}
      <div className="bg-navy border-t border-white/5 py-12">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-white font-bold text-xl font-outfit">NIRF RANKED</span>
          <span className="text-white font-bold text-xl font-outfit">UGC RECOGNIZED</span>
          <span className="text-white font-bold text-xl font-outfit">NAAC A+ GRADE</span>
          <span className="text-white font-bold text-xl font-outfit">AICTE APPROVED</span>
        </div>
      </div>

      <Programs isLoading={isLoading} />
      <About />
      <CampusLife />
      <Leadership />
      <Placement isLoading={isLoading} />
      <Testimonials />

      <CTA />
      <Footer />

      {/* Floating Apply Button (Mobile only or sticky) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="bg-royal text-white px-6 py-4 rounded-2xl font-bold shadow-2xl flex items-center space-x-2">
          <span>Apply Now</span>
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        </button>
      </div>
    </main>
  );
}
