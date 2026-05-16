"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Music, Trophy, Users2, Zap, Palette } from "lucide-react";

const activities = [
  { name: "Sports & Athletics", icon: Trophy, color: "bg-orange-100 text-orange-600" },
  { name: "Innovation & Robotics", icon: Zap, color: "bg-blue-100 text-blue-600" },
  { name: "Cultural Arts", icon: Palette, color: "bg-pink-100 text-pink-600" },
  { name: "Photography Club", icon: Camera, color: "bg-purple-100 text-purple-600" },
  { name: "Music & Theatre", icon: Music, color: "bg-emerald-100 text-emerald-600" },
  { name: "Social Welfare", icon: Users2, color: "bg-indigo-100 text-indigo-600" },
];

const CampusLife = () => {
  return (
    <section id="campus-life" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-royal font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Life at JG
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-navy mb-8 font-outfit"
            >
              A Vibrant Community Beyond the <span className="text-purple-accent">Classroom</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-navy/60 text-lg mb-10"
            >
              Our campus is a melting pot of ideas and creativity. From tech fests to cultural galas, 
              there's always something happening to keep your spirits high.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {activities.map((act, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center space-x-3 p-4 rounded-xl border border-gray-100 premium-shadow group hover:border-royal/30 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg ${act.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <act.icon className="w-5 h-5" />
                  </div>
                  <span className="text-navy font-semibold text-sm">{act.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden premium-shadow border-[8px] border-white">
              <Image
                src="/images/campus-life.png"
                alt="Campus Life at JG University"
                width={700}
                height={800}
                className="object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl premium-shadow border border-white/20">
              <div className="text-3xl font-bold text-navy font-outfit">30+</div>
              <div className="text-navy/60 text-sm font-medium">Student Clubs & Societies</div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-royal/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
