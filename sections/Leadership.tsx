"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const leaders = [
  {
    name: "Dr. Arvind Gupta",
    role: "Founding Chancellor",
    image: "https://i.pravatar.cc/300?img=12",
    bio: "A visionary educator with over 30 years of experience in shaping the future of higher education in India.",
    message: "Our goal is to create not just employees, but innovators who lead the world.",
  },
  {
    name: "Prof. Sarah Johnson",
    role: "Vice Chancellor",
    image: "https://i.pravatar.cc/300?img=47",
    bio: "Former Dean at Stanford with a passion for industry-integrated research and cross-disciplinary studies.",
    message: "We bridge the gap between academic theory and real-world industrial practice.",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-accent/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-royal-light font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Visionaries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-outfit"
          >
            Guided by <span className="text-gold-accent">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Meet the leaders who are redefining education and innovation at JG University.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 premium-shadow group hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="relative">
                  <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-white/10 group-hover:border-royal transition-colors">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={160}
                      height={160}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {[Linkedin, Twitter, Mail].map((Icon, j) => (
                      <div key={j} className="w-8 h-8 bg-royal rounded-lg flex items-center justify-center cursor-pointer hover:bg-gold-accent transition-colors shadow-lg">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-1 font-outfit">{leader.name}</h3>
                  <p className="text-royal-light font-bold mb-4 uppercase tracking-wider text-sm">{leader.role}</p>
                  <p className="text-white/60 mb-6 italic leading-relaxed">
                    "{leader.message}"
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  <button className="text-white font-bold border-b-2 border-royal hover:border-gold-accent transition-colors pb-1 flex items-center">
                    Read Full Message
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
