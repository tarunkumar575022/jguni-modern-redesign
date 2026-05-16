"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-light pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-royal rounded-xl flex items-center justify-center premium-shadow">
                <span className="text-white font-bold text-xl font-outfit">JG</span>
              </div>
              <span className="text-2xl font-bold font-outfit tracking-tight text-navy">
                University
              </span>
            </Link>
            <p className="text-navy/60 mb-8 leading-relaxed max-w-xs">
              Empowering the next generation of innovators with industry-focused 
              education and world-class infrastructure.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-navy/40 hover:text-royal hover:bg-white premium-shadow transition-all border border-gray-100 hover:border-royal/20"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-navy mb-8 font-outfit">Quick Links</h4>
            <ul className="space-y-4">
              {["Programs", "About JG", "Admissions", "Campus Life", "Placements", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-navy/60 hover:text-royal transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal/30 mr-2" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-navy mb-8 font-outfit">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-lg premium-shadow border border-gray-100">
                  <MapPin className="w-5 h-5 text-royal" />
                </div>
                <span className="text-navy/60 text-sm leading-relaxed">
                  JG University Campus, Sarkhej-Gandhinagar Highway, Ahmedabad, Gujarat 382481
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-white p-2 rounded-lg premium-shadow border border-gray-100">
                  <Phone className="w-5 h-5 text-royal" />
                </div>
                <span className="text-navy/60 text-sm">+91 12345 67890</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-white p-2 rounded-lg premium-shadow border border-gray-100">
                  <Mail className="w-5 h-5 text-royal" />
                </div>
                <span className="text-navy/60 text-sm">admission@jguni.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-navy mb-8 font-outfit">Newsletter</h4>
            <p className="text-navy/60 mb-6 text-sm">
              Subscribe to stay updated with our latest news and events.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-royal/20 transition-all premium-shadow"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-royal text-white px-4 rounded-xl font-bold text-sm hover:bg-royal-dark transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-navy/40 text-sm">
            © 2024 JG University. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="text-navy/40 text-sm hover:text-navy transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-navy/40 text-sm hover:text-navy transition-colors">Terms of Service</Link>
            <Link href="#" className="text-navy/40 text-sm hover:text-navy transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
