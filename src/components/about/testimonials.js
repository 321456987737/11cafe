"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Absolutely amazing experience. The food was fresh and the atmosphere was perfect.",
    name: "Sarah Khan",
  },
  {
    text: "One of the best cafes I’ve visited. The service was quick and the taste was incredible.",
    name: "Ali Raza",
  },
  {
    text: "Beautiful place, great vibe, and delicious meals. Highly recommended!",
    name: "Ahmed Hassan",
  },
];

const TestimonialCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <motion.div className="w-full h-full bg-[#faf7f4] py-24 px-6 flex justify-center">
      <div className="max-w-3xl w-full text-center space-y-12">
        {/* Heading */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl Merriweather text-gray-900"
          >
            Our Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 mt-8 "
          >
            Read what our top customer says about noplates
          </motion.p>
        </div>

        {/* Embla */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] px-6 md:px-16"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg md:text-2xl text-gray-700 italic leading-relaxed">
                    “{item.text}”
                  </p>
                  <h4 className="mt-6 font-semibold text-gray-900 text-lg">
                    — {item.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 cursor-pointer top-1/2 -translate-y-1/2 bg-white shadow-md px-4 py-2 rounded-full hover:scale-105 transition"
          >
            <MoveLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 bg-white shadow-md px-4 py-2 rounded-full hover:scale-105 transition"
          >
            <MoveRight size={24} />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition ${
                index === selectedIndex ? "bg-gray-900 w-4" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCarousel;