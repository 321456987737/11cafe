"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/gallery/1.jpg",
    title: "Fresh Coffee Moments",
    desc: "Every cup is brewed with passion and precision.",
  },
  {
    src: "/gallery/2.jpg",
    title: "Cozy Atmosphere",
    desc: "A warm space designed for comfort and connection.",
  },
  {
    src: "/gallery/3.jpg",
    title: "Barista Craft",
    desc: "Skilled hands crafting perfect espresso shots.",
  },
  {
    src: "/gallery/4.jpg",
    title: "Sweet Treats",
    desc: "Freshly baked desserts to complete your experience.",
  },
  {
    src: "/gallery/5.jpg",
    title: "Morning Energy",
    desc: "Start your day with the perfect coffee boost.",
  },
  {
    src: "/gallery/6.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe.",
  },
  {
    src: "/gallery/7.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe.a",
  },
  {
    src: "/gallery/8.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe. aa",
  },
  {
    src: "/gallery/9.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe.",
  },
  {
    src: "/gallery/10.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe.",
  },
  {
    src: "/gallery/11.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe.",
  },
  {
    src: "/gallery/12.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe.",
  },
  {
    src: "/gallery/13.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe.",
  },
  {
    src: "/gallery/14.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Gallery = () => {
  return (
    <section className="w-full bg-white">

      {/* Header */}
      <div className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl Merriweather text-black"
        >
          Our Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 text-gray-500 max-w-xl mx-auto"
        >
          A glimpse into our café experience — crafted with love, detail, and passion.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0"
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative overflow-hidden group"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              className="w-full h-[320px] md:h-[380px]"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={800}
                height={800}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
              <div className="text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Gallery;