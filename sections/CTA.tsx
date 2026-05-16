"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section id="apply" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-royal rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
          {/* Animated Background Blobs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-purple-accent/20 rounded-full blur-3xl"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 font-outfit"
            >
              Start Your Future <span className="text-gold-accent">Today</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-xl mb-12 leading-relaxed"
            >
              Don't miss the chance to be part of India's most innovative academic community. 
              Applications for the 2024-25 academic year are closing soon.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="#apply" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-royal px-10 py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="#campus-life" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-royal-dark/50 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-royal-dark transition-colors"
                >
                  Book Campus Tour
                  <Calendar className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>


            <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Smartphone className="w-6 h-6 mb-2 text-gold-accent" />
                <span className="text-sm font-medium text-white/60 uppercase tracking-wider">Quick Support</span>
                <span className="font-bold">+91 12345 67890</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 mb-2 text-gold-accent flex items-center justify-center font-bold font-outfit">JG</div>
                <span className="text-sm font-medium text-white/60 uppercase tracking-wider">Admission Cell</span>
                <span className="font-bold">admission@jguni.in</span>
              </div>
              <div className="hidden md:flex flex-col items-center">
                <div className="w-6 h-6 mb-2 text-gold-accent flex items-center justify-center">🎓</div>
                <span className="text-sm font-medium text-white/60 uppercase tracking-wider">Financial Aid</span>
                <span className="font-bold">Available for 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
