"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowRight, GraduationCap, Users, Globe, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-royal/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-accent/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/90 text-sm font-medium mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-gold-accent animate-pulse" />
            <span>Admissions Open for 2024-25</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-outfit">
            Empowering Future <span className="text-royal-light">Innovators</span> Through Modern Education
          </h1>

          <p className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            Join a community of visionaries and leaders. Experience industry-aligned learning
            at India's most innovative university.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link href="#programs" className="bg-royal hover:bg-royal-dark text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center group premium-shadow">
              Explore Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#campus-life" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all border border-white/20 flex items-center justify-center">
              Campus Tour
            </Link>
          </div>


          {/* Stats Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "5000+", sub: "Students" },
              { icon: GraduationCap, label: "95%", sub: "Placement" },
              { icon: Globe, label: "50+", sub: "Global Partners" },
              { icon: BookOpen, label: "40+", sub: "Courses" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex flex-col"
              >
                <stat.icon className="text-gold-accent w-6 h-6 mb-2" />
                <span className="text-white font-bold text-lg">{stat.label}</span>
                <span className="text-white/50 text-sm">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] border-white/5 premium-shadow">
            <Image
              src="/images/hero.png"
              alt="JG University Campus"
              width={800}
              height={1000}
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 -right-4 glass p-6 rounded-2xl premium-shadow z-20 max-w-[200px]"
          >

            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg text-green-600 font-bold">100%</div>
              <span className="text-navy font-bold text-sm">Placement Support</span>
            </div>
            <p className="text-xs text-navy/60">Dedicated career cell with top industry tie-ups.</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl premium-shadow z-20 max-w-[220px]"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-royal/10 rounded-lg text-royal font-bold">#1</div>
              <span className="text-navy font-bold text-sm">Innovation University</span>
            </div>
            <p className="text-xs text-navy/60">Ranked for best industry-integrated curriculum.</p>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
