"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ title, description, image, video }) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background Image */}
      {image && (
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt="hero background"
            width={2000}
            loading="eager"
            height={1200}
            priority
            className="w-full md:h-[80vh] h-[60vh] object-cover"
          />
        </motion.div>
      )}

      {/* Background Video */}
      {video && (
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full md:h-[80vh] h-[60vh] object-cover"
        >
          <source src={video} type="video/mp4" />
        </motion.video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center min-w-[230px]">
          {/* Title Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:text-7xl text-4xl Arimo text-[#F9F7F5] md:mb-12 mb-4 Merriweather"
          >
            {title}
          </motion.h1>

          {/* Description Animation */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="md:text-lg text-sm max-w-[500px] mx-auto Arimo text-[#F9F7F5]"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
