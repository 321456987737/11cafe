"use client";
import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="w-full md:pb-20 pb-8 pt-8 px-6 flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full space-y-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
            Purpose & Direction
          </p> */}
          <h2 className="mt-5 text-4xl  Merriweather text-black leading-tight Merriweather ">
            Our Mission & Vision
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl md:p-10 p-4 shadow-sm border border-gray-100 space-y-6"
          >
            <h3 className="text-2xl  Merriweather text-black">
              Our Mission
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              To craft coffee that feels personal — not rushed, not ordinary.
              We focus on quality beans, careful brewing, and creating a space
              where people can slow down, connect, and feel at home in every cup.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Every cup we serve is a reminder that small moments matter —
              and that simplicity, when done right, can be powerful.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F7EFE2]/50 rounded-3xl md:p-10 p-4 shadow-sm space-y-6"
          >
            <h3 className="text-2xl Merriweather ">
              Our Vision
            </h3>

            <p className="text-gray-800 text-lg leading-relaxed">
              To become more than a coffee shop — a place people associate with
              comfort, creativity, and calm in their daily routine.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              We imagine a world where coffee breaks aren’t distractions,
              but meaningful pauses that bring clarity, ideas, and connection.
            </p>
          </motion.div>

        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl heading text-black leading-relaxed Merriweather">
            We don’t just serve coffee. We shape moments worth slowing down for.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVision;