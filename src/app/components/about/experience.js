"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Experience = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  const leftSlide = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0 },
  };

  const rightSlide = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0 },
  };

  const imageZoom = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="relative  flex items-center justify-center overflow-hidden">
      <div className="w-full flex items-center justify-center md:pb-20 pt-8 ">
        <div className="w-full max-w-6xl bg-white rounded-t-[120px] px-6 md:px-16 space-y-28">

          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl Merriweather text-gray-900">
              Experience & Atmosphere
            </h2>
            <p className="text-gray-500 mt-8  text-base md:text-lg leading-relaxed max-w-[420px] mx-auto">
              A space designed to slow you down — where coffee, comfort, and calm
              come together in every visit.
            </p>
          </motion.div>

          {/* CARD 1 */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={leftSlide}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl Merriweather text-gray-900 mb-4">
                Warm Coffee Rituals
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Every cup is prepared with care and intention — turning your daily
                coffee into a comforting ritual worth slowing down for.
              </p>
            </div>

            <motion.div
              variants={imageZoom}
              className="w-full md:w-1/2 h-[260px] md:h-[320px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/home/ingridiants2.jpg"
                alt="Coffee Rituals"
                width={1200}
                height={1200}
                loading="eager"
                className="object-cover h-full w-full"
              />
            </motion.div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rightSlide}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl Merriweather text-gray-900 mb-4">
                A Place to Unwind
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Whether you are working, meeting friends, or taking a break —
                our space is designed to make you feel relaxed and at ease.
              </p>
            </div>

            <motion.div
              variants={imageZoom}
              className="w-full md:w-1/2 h-[260px] md:h-[320px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/home/ingridiants1.jpg"
                alt="Relaxing Atmosphere"
                width={600}
                height={600}
                loading="eager"
                className="object-cover h-full w-full"
              />
            </motion.div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={leftSlide}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl Merriweather text-gray-900 mb-4">
                Calm & Cozy Atmosphere
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Soft lighting, warm tones, and a peaceful vibe — everything is
                designed to make you feel at home from the moment you walk in.
              </p>
            </div>

            <motion.div
              variants={imageZoom}
              className="w-full md:w-1/2 h-[260px] md:h-[320px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/home/unnamed.jpg"
                alt="Cozy Atmosphere"
                width={600}
                height={600}
                loading="eager"
                className="object-cover h-full w-full"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Experience;