"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "B.Tech CSE (2023 Batch)",
    company: "Software Engineer at Google",
    image: "https://i.pravatar.cc/150?img=11",
    content: "The industry-integrated curriculum at JG University gave me a head start. The focus on hands-on coding and real-world projects was instrumental in my placement at Google.",
  },
  {
    name: "Ananya Patel",
    role: "MBA (2022 Batch)",
    company: "Marketing Manager at Amazon",
    image: "https://i.pravatar.cc/150?img=32",
    content: "The mentorship I received from industry experts was life-changing. JG University doesn't just teach business; it teaches you how to think like a leader.",
  },
  {
    name: "Vikram Mehta",
    role: "B.Des (2023 Batch)",
    company: "Product Designer at Zomato",
    image: "https://i.pravatar.cc/150?img=13",
    content: "The design labs and creative freedom at JG are unparalleled. I was able to build a portfolio that stood out to top product companies across India.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-royal font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Student Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-6 font-outfit"
          >
            Voice of Our <span className="text-royal">Achievers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-navy/60 text-lg"
          >
            Success stories that inspire. Hear what our alumni have to say about their journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 premium-shadow relative group hover:border-royal/20 transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-royal/10 group-hover:text-royal/20 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-accent fill-gold-accent" />
                ))}
              </div>

              <p className="text-navy/70 mb-8 italic relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-royal/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-navy font-outfit">{testimonial.name}</h4>
                  <p className="text-xs text-navy/50 font-medium">{testimonial.role}</p>
                  <p className="text-xs text-royal font-bold">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
