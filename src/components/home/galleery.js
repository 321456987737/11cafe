"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
  ];

  // Parent animation (stagger effect)
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Child animation (each image)
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full pt-24 pb-36 px-6 bg-[#F7EFE2]/50">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold Merriweather">
            Our <span className="text-[#813831] ">Gallery</span>
          </h2>
          <p className="text-gray-600 mt-4">
            A glimpse of our space, coffee, and moments
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`
                relative overflow-hidden rounded-2xl shadow-lg
                transform transition duration-500 hover:scale-105
                ${i % 3 === 0 ? "md:-translate-y-6" : ""}
                ${i % 3 === 1 ? "md:translate-y-6" : ""}
                ${i % 3 === 2 ? "md:-translate-y-2" : ""}
              `}
            >
              <Image
                src={src}
                alt="Gallery Image"
                width={400}
                height={300}
                className="w-full h-[250px] md:h-[350px] object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;