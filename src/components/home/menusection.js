"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const drinks = [
  {
    name: "Espresso",
    desc: "Strong and bold shot of pure coffee flavor.",
    price: "$3.50",
    img: "/coffee/OIP-Picsart-BackgroundRemover.jpg",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk and foam.",
    price: "$4.50",
    img: "/coffee/Cappuccino-Picsart-BackgroundRemover.webp",
  },
  {
    name: "Latte",
    desc: "Smooth espresso blended with creamy milk.",
    price: "$4.75",
    img: "/coffee/Latte.webp",
  },
  {
    name: "Cold Brew",
    desc: "Slow brewed coffee served chilled and refreshing.",
    price: "$4.00",
    img: "/coffee/coldbrew.webp",
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // 👈 controls delay between items
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export default function Menusection() {

  
  return (
    <section className="w-full py-15  overflow-hidden   bg-[#fffef9]">
      <div className="max-w-7xl mx-auto md:px-6 px-3">
        {/* Heading */}
        <div className="text-center md:mb-20 mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            
          viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl  Merriweather font-semibold mt-3 mb-8"
          >
            Featured <span className="text-[#813831]">Drinks</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-500 mt-4 max-w-xl mx-auto"
          >
            Discover our most loved handcrafted coffee drinks made with freshly
            roasted beans and premium ingredients.
          </motion.p>
        </div>

        {/* Products */}
        <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 gap-3"
>
         {drinks.map((drink, index) => (
  <motion.div
    key={index}
    variants={item}
    className="group rounded-3xl md:p-6 transition duration-300"
  >
    {/* Image */}
    <div className="relative flex justify-center items-center mb-6 h-[150px]">
      <Image
        src={drink.img}
        alt={drink.name}
        loading="eager"
        width={120}
        height={0}
        className="object-contain w-full h-full group-hover:scale-110 transition duration-300"
      />
    </div>

    {/* Info */}
    <div className="flex items-center justify-between mt-6 w-full">
      <h3 className="text-[18px] font-semibold text-center Merriweather">
        {drink.name}
      </h3>
      <span className="text-lg font-semibold text-[#813831]">
        {drink.price}
      </span>
    </div>

    <p className="text-gray-500 text-sm mt-3 text-[14px]">
      {drink.desc}
    </p>
  </motion.div>
))}
        </motion.div>
        <div className="flex w-full items-center justify-center mt-6">
            <Link href="/Menu">
              <button className="mt-6 px-8 py-3 cursor-pointer border-2 border-[#813831] text-[#813831] rounded-2xl font-medium hover:bg-[#813831] hover:text-white transition">
                Visit Menu
              </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
