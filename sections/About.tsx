"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Users, GraduationCap, Building2, Globe, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Industry-Focused Learning",
    desc: "Curriculum designed in collaboration with top tech giants to ensure day-one job readiness.",
    icon: Building2,
    gradient: "from-blue-500 to-royal",
  },
  {
    title: "AI-Powered Education",
    desc: "Next-gen labs equipped with AI and machine learning tools for hands-on research.",
    icon: Cpu,
    gradient: "from-purple-500 to-purple-accent",
  },
  {
    title: "Experienced Faculty",
    desc: "Learn from global experts and PhD scholars with years of industry and academic experience.",
    icon: Users,
    gradient: "from-orange-500 to-gold-accent",
  },
  {
    title: "Innovation Labs",
    desc: "State-of-the-art infrastructure fostering creativity and breakthrough innovations.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Global Exposure",
    desc: "International exchange programs with partner universities in USA, UK, and Europe.",
    icon: Globe,
    gradient: "from-indigo-500 to-blue-700",
  },
  {
    title: "Career Mentorship",
    desc: "Personalized career path mapping and 1-on-1 mentorship from industry leaders.",
    icon: GraduationCap,
    gradient: "from-pink-500 to-rose-600",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-light relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-royal font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Discover Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-navy mb-8 font-outfit"
            >
              About <span className="text-royal">JG University</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-navy/60 text-lg mb-10 leading-relaxed"
            >
              JG University is a premier institution dedicated to fostering innovation, 
              creativity, and excellence in higher education. With a mission to bridge 
              the gap between industry and academia, we provide a holistic learning 
              environment that empowers students to become global leaders.
            </motion.p>

            
            <div className="space-y-6">
              {[
                "Ranked #1 for Innovation in the region",
                "100% placement assistance guarantee",
                "Partnerships with 200+ top recruiters",
                "Vibrant campus life with 30+ student clubs"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-royal/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-royal" />
                  </div>
                  <span className="text-navy font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl premium-shadow hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 font-outfit">{feature.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

