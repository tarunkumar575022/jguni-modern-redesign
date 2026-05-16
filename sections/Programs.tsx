"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, ShieldCheck, Microscope, ArrowRight } from "lucide-react";
import Skeleton from "@/components/Skeleton";

const programs = [
  {
    title: "Undergraduate",
    desc: "Comprehensive 3-4 year programs designed to build strong foundations in diverse fields.",
    icon: BookOpen,
    color: "bg-royal/10 text-royal",
    courses: ["B.Tech", "BBA", "B.Com", "BCA", "Design"],
  },
  {
    title: "Postgraduate",
    desc: "Advanced specialized degrees for professional excellence and research orientation.",
    icon: Award,
    color: "bg-purple-accent/10 text-purple-accent",
    courses: ["MBA", "M.Tech", "MCA", "M.Com", "M.Sc"],
  },
  {
    title: "Doctoral",
    desc: "PhD programs focused on original research and contributing to global knowledge.",
    icon: Microscope,
    color: "bg-gold-accent/10 text-gold-accent",
    courses: ["Computer Science", "Management", "Commerce", "Humanities"],
  },
  {
    title: "Certificate Programs",
    desc: "Short-term, skill-intensive courses designed for immediate industry readiness.",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-600",
    courses: ["AI & ML", "Data Science", "Digital Marketing", "Cyber Security"],
  },
];

const Programs = ({ isLoading = false }: { isLoading?: boolean }) => {
  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-royal font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Academic Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-6 font-outfit"
          >
            World-Class Programs Tailored for Your <span className="gradient-text">Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-navy/60 text-lg"
          >
            Choose from a wide array of programs across multiple disciplines, 
            crafted to meet the demands of the modern world.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading 
            ? [...Array(4)].map((_, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 premium-shadow">
                  <Skeleton className="w-14 h-14 rounded-2xl mb-6" />
                  <Skeleton className="w-3/4 h-8 mb-4" />
                  <Skeleton className="w-full h-4 mb-2" />
                  <Skeleton className="w-full h-4 mb-6" />
                  <div className="space-y-2 mb-8">
                    <Skeleton className="w-1/2 h-3" />
                    <Skeleton className="w-1/2 h-3" />
                  </div>
                  <Skeleton className="w-1/3 h-6" />
                </div>
              ))
            : programs.map((program, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white p-8 rounded-[2rem] border border-gray-100 premium-shadow premium-shadow-hover relative overflow-hidden"
                >
                  <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy mb-4 font-outfit">{program.title}</h3>
                  <p className="text-navy/60 mb-6 text-sm leading-relaxed">
                    {program.desc}
                  </p>

                  <div className="space-y-2 mb-8">
                    {program.courses.slice(0, 3).map((course, j) => (
                      <div key={j} className="flex items-center text-sm text-navy/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-royal mr-2" />
                        {course}
                      </div>
                    ))}
                    <div className="text-xs text-royal font-medium italic">+{program.courses.length - 3} more specializations</div>
                  </div>

                  <button className="flex items-center text-navy font-bold group-hover:text-royal transition-colors">
                    Explore Courses
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Hover Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 group-hover:bg-royal/5 transition-colors -z-10" />
                </motion.div>
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default Programs;
