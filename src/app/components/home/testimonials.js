"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { motion } from "framer-motion";
const testimonials = [
  {
    name: "Ali Khan",
    role: "Regular Customer",
    text: "The coffee here is absolutely amazing. The atmosphere is calm and perfect for work.",
  },
  {
    name: "Sara Ahmed",
    role: "Designer",
    text: "A beautiful place with aesthetic vibes. Their cappuccino is my favorite!",
  },
  {
    name: "Usman Tariq",
    role: "Entrepreneur",
    text: "Perfect spot for meetings. Great service and even better coffee.",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full min-h-screen h-full flex flex-col md:flex-row overflow-hidden">
      {/* LEFT SIDE - TESTIMONIALS (50vw md+) */}
      <div className="w-full md:w-[50vw] h-auto md:h-screen flex items-center justify-center px-3 py-20 bg-white">
        <div className="w-full max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-semibold mb-10 Merriweather md:text-left text-center mx-4" 
          >
            What Our <span className="text-[#813831]">Customers Say</span>
          </motion.h2>

          {/* EMBLA */}
          <motion.div  initial={{ opacity: 0, y: 20 }}
          
          viewport={{ once: true }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }} className="overflow-hidden" ref={emblaRef}>
            <div    className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="bg-[#F7EFE2] p-8 rounded-2xl shadow-md">
                    <motion.p
                      
                      className="text-gray-700 text-lg leading-relaxed"
                    >
                      “{item.text}”
                    </motion.p>

                    <div className="mt-6">
                      <motion.h4
                        className="font-semibold"
                      >
                        {item.name}
                      </motion.h4>
                      <motion.p
                        className="text-sm text-gray-500"
                      >
                        {item.role}
                      </motion.p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
          
          viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex  items-center md:justify-start justify-center gap-4 mt-8  mx-4"
          >
            <button
              onClick={scrollPrev}
              className="px-4 py-2 border border-[#813831]  text-3xl rounded-full hover:bg-[#813831] text-[#813831] hover:text-white transition"
            >
              <MoveLeftIcon />
            </button>
            <button
              onClick={scrollNext}
              className="px-4 py-2 border border-[#813831]  text-3xl rounded-full hover:bg-[#813831] text-[#813831] hover:text-white transition"
            >
              <MoveRightIcon />
            </button>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE (50vw + 100vh) */}
      <div className="w-full md:w-[50vw] h-[60vh] md:h-screen relative">
        <Image
          src="/backimg/3.webp"
          alt="Coffee Experience"
          width={500}
          height={500}
          className="object-cover h-full w-full "
        />
      </div>
    </section>
  );
};

export default Testimonials;
