"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7EFE2] text-white pt-16 pb-10 px-6 md:px-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT - BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{once:true}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold Merriweather text-black">
            11:11 <span className="text-[#813831]">Cafe</span>
          </h2>

          <p className="text-black mt-4 leading-relaxed">
            A cozy space where coffee meets calm. Come for the coffee,
            stay for the vibe.
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            📍 Open Daily: 8:00 AM – 10:00 PM
          </p>
        </motion.div>

        {/* MIDDLE - LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{once:true}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-5 text-black Merriweather">
            Quick Links
          </h3>

          <ul className="space-y-3 text-black">
            <li className="hover:text-[#813831] cursor-pointer">Home</li>
            <li className="hover:text-[#813831] cursor-pointer">About</li>
            <li className="hover:text-[#813831] cursor-pointer">Menu</li>
            <li className="hover:text-[#813831] cursor-pointer">Gallery</li>
            <li className="hover:text-[#813831] cursor-pointer">Location</li>
            <li className="hover:text-[#813831] cursor-pointer">Contact</li>
          </ul>
        </motion.div>

        {/* RIGHT - SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{once:true}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-5 text-black Merriweather">
            Connect With Us
          </h3>

          <p className="text-black mb-6">
            Follow us on social media for daily coffee vibes ☕
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#813831] cursor-pointer transition">
              Instagram
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#813831] cursor-pointer transition">
              YouTube
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#813831] cursor-pointer transition">
              TikTok
            </span>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} 11:11 Cafe. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-[#813831] cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[#813831] cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;