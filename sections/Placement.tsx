"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Briefcase, Building } from "lucide-react";
import Skeleton from "@/components/Skeleton";

const recruiters = [
  "Google", "Amazon", "Microsoft", "TCS", "Infosys", "Wipro", 
  "Adobe", "Oracle", "Zomato", "Uber", "Cognizant", "Accenture"
];

const stats = [
  { label: "Placement Rate", value: "95%", icon: TrendingUp, color: "text-green-600" },
  { label: "Highest Package", value: "45 LPA", icon: DollarSign, color: "text-royal" },
  { label: "Top Recruiters", value: "200+", icon: Building, color: "text-purple-accent" },
  { label: "Job Offers", value: "1500+", icon: Briefcase, color: "text-gold-accent" },
];

const Placement = ({ isLoading = false }: { isLoading?: boolean }) => {
  return (
    <section id="placements" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Stats Grid */}
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-royal font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Career Success
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-navy mb-8 font-outfit"
            >
              Building Careers, <span className="text-royal">Realizing Dreams</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-navy/60 text-lg mb-12"
            >
              Our dedicated Corporate Relations Cell works tirelessly to connect 
              our talented students with the best opportunities in the industry.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              {isLoading 
                ? [...Array(4)].map((_, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-gray-light border border-gray-100">
                      <Skeleton className="w-12 h-12 rounded-2xl mb-4" />
                      <Skeleton className="w-2/3 h-8 mb-2" />
                      <Skeleton className="w-1/2 h-4" />
                    </div>
                  ))
                : stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="p-6 rounded-3xl bg-gray-light border border-gray-100 group hover:border-royal/20 transition-all"
                    >
                      <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 premium-shadow group-hover:scale-110 transition-transform`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-3xl font-bold text-navy mb-1 font-outfit">{stat.value}</div>
                      <div className="text-navy/50 font-medium">{stat.label}</div>
                    </motion.div>
                  ))
              }
            </div>
          </div>

          {/* Recruiters Cloud */}
          <div className="lg:w-1/2">
            <div className="bg-navy rounded-[3rem] p-12 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-royal/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-accent/10 blur-[100px] rounded-full" />
              
              <h3 className="text-2xl font-bold text-white mb-8 text-center relative z-10 font-outfit">Our Top Recruiters</h3>
              
              <div className="grid grid-cols-3 gap-6 relative z-10">
                {isLoading 
                  ? [...Array(9)].map((_, i) => (
                      <Skeleton key={i} className="aspect-[3/2] bg-white/5 rounded-2xl" />
                    ))
                  : recruiters.map((company, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="aspect-[3/2] bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <span className="text-white/60 font-bold text-sm tracking-wide group-hover:text-white">{company}</span>
                      </motion.div>
                    ))
                }
              </div>

              <div className="mt-12 text-center relative z-10">
                <button className="text-royal-light font-bold flex items-center justify-center mx-auto hover:text-white transition-colors">
                  View Full Placement Report
                  <TrendingUp className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
