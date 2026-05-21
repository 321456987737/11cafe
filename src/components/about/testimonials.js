"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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

const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full bg-[#faf7f4] py-24 px-6 flex justify-center">
      <div className="max-w-4xl w-full text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 Merriweather">
            Our Testimonials
          </h2>

          <p className="text-gray-500 mt-5">
            Read what our customers say about us
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-4"
                  >
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-14">
                      <p className="text-xl md:text-3xl italic text-gray-700 leading-relaxed">
                        “{item.text}”
                      </p>

                      <div className="mt-10 flex flex-col items-center">
                   
                        <h4 className="mt-4 text-lg font-semibold text-gray-900">
                          {item.name}
                        </h4>

                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#813831] hover:text-white transition-all shadow-md px-4 py-2 rounded-full flex items-center justify-center cursor-pointer"
          >
            <MoveLeft size={22} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#813831] hover:text-white transition-all shadow-md px-4 py-2 rounded-full flex items-center justify-center cursor-pointer"
          >
            <MoveRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-black w-8"
                  : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
// "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { MoveLeft, MoveRight } from "lucide-react";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     text: "Absolutely amazing experience. The food was fresh and the atmosphere was perfect.",
//     name: "Sarah Khan",
//   },
//   {
//     text: "One of the best cafes I’ve visited. The service was quick and the taste was incredible.",
//     name: "Ali Raza",
//   },
//   {
//     text: "Beautiful place, great vibe, and delicious meals. Highly recommended!",
//     name: "Ahmed Hassan",
//   },
// ];

// const TestimonialCarousel = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 4000, stopOnInteraction: false }),
//   ]);

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <motion.div className="w-full h-full bg-[#faf7f4] py-24 px-6 flex justify-center">
//       <div className="max-w-3xl w-full text-center space-y-12">
//         {/* Heading */}
//         <div>
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-5xl Merriweather text-gray-900"
//           >
//             Our Testimonials
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-gray-500 mt-8 "
//           >
//             Read what our top customer says about noplates
//           </motion.p>
//         </div>

//         {/* Embla */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative"
//         >
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="flex">
//               {testimonials.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex-[0_0_100%] px-6 md:px-16"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <p className="text-lg md:text-2xl text-gray-700 italic leading-relaxed">
//                     “{item.text}”
//                   </p>
//                   <h4 className="mt-6 font-semibold text-gray-900 text-lg">
//                     — {item.name}
//                   </h4>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Arrows */}
//           <button
//             onClick={scrollPrev}
//             className="absolute left-0 cursor-pointer top-1/2 -translate-y-1/2 bg-white shadow-md px-4 py-2 rounded-full hover:scale-105 transition"
//           >
//             <MoveLeft size={24} />
//           </button>

//           <button
//             onClick={scrollNext}
//             className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 bg-white shadow-md px-4 py-2 rounded-full hover:scale-105 transition"
//           >
//             <MoveRight size={24} />
//           </button>
//         </motion.div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => emblaApi && emblaApi.scrollTo(index)}
//               className={`h-2 w-2 rounded-full transition ${
//                 index === selectedIndex ? "bg-gray-900 w-4" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default TestimonialCarousel;