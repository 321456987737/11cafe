"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "John Doe",
    role: "Head Barista",
    image: "/workers/1.jpg",
  },
  {
    name: "Sarah Khan",
    role: "Coffee Roaster",
    image: "/workers/2.jpg",
  },
  {
    name: "Sarah Khan",
    role: "Coffee Roaster",
    image: "/workers/2.jpg",
  },
 
  {
    name: "Ali Ahmed",
    role: "Cafe Manager",
    image: "/workers/3.jpg",
  },
  {
    name: "Emma Watson",
    role: "Customer Experience",
    image: "/workers/4.webp",
  },
];

const TeamCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Prev
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  // Next
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Active Dot
  useEffect(() => {
    if (!emblaApi) return;

    const updateIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateIndex();

    emblaApi.on("select", updateIndex);

    return () => {
      emblaApi.off("select", updateIndex);
    };
  }, [emblaApi]);

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.3em] text-gray-400"
        >
          Meet The Team
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-4xl md:text-5xl Merriweather text-black"
        >
          The People Behind Every Cup
        </motion.h2>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="relative h-[500px] mx-3 overflow-hidden rounded-3xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-2xl Merriweather">
                    {member.name}
                  </h3>

                  <p className="text-sm text-gray-200 mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-5 mt-12"
      >
        <button
          onClick={scrollPrev}
          className="px-7 py-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition cursor-pointer"
        >
          Prev
        </button>

        <button
          onClick={scrollNext}
          className="px-7 py-3 border border-[#813831] text-[#813831] rounded-2xl hover:bg-[#813831] hover:text-white transition cursor-pointer"
        >
          Next
        </button>
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {team.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              selectedIndex === index
                ? "bg-black w-8"
                : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamCarousel;
// "use client";

// import React, { useCallback, useEffect } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import { delay, motion } from "framer-motion";
// const team = [
//   {
//     name: "John Doe",
//     role: "Head Barista",
//     image: "/workers/1.jpg",
//   },
//   {
//     name: "Sarah Khan",
//     role: "Coffee Roaster",
//     image: "/workers/2.jpg",
//   },
//   {
//     name: "Ali Ahmed",
//     role: "Cafe Manager",
//     image: "/workers/3.jpg",
//   },
//   {
//     name: "Emma Watson",
//     role: "Customer Experience",
//     image: "/workers/4.webp",
//   },
// ];

// const TeamCarousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//   });

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   // ✅ AUTO SCROLL ADDED ONLY HERE
//   useEffect(() => {
//     if (!emblaApi) return;

//     const interval = setInterval(() => {
//       emblaApi.scrollNext();
//     }, 3000); // change speed here (3s)

//     return () => clearInterval(interval);
//   }, [emblaApi]);

//   return (
//     <section className="w-full py-12 bg-white overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-12 px-6">
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-sm tracking-[0.3em] text-gray-400 uppercase"
//         >
//           Meet the Team
//         </motion.p>
//         <motion.h2
//              initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 , delay: 0.2}}
//           className="mt-4 text-4xl md:text-5xl heading Merriweather text-black"
//         >
//           The People Behind Every Cup
//         </motion.h2>
//       </div>

//       {/* FULL WIDTH CAROUSEL */}
//       <motion.div    initial={{  y: 30 }}
//           whileInView={{ y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }} className="w-screen overflow-hidden" ref={emblaRef}>
//         <div className="flex hover:cursor-grab ">
//           {team.map((member, index) => (
//             <div
//               key={index}
//               className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
//             >
//               <div className="relative h-[500px] w-full">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={1200}
//                   height={1200}
//                   className="object-cover h-full"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-6">
//                   <h3 className="text-xl Merriweather">{member.name}</h3>
//                   <p className="text-sm text-gray-200">{member.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Buttons */}
//       <motion.div    initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }} className="flex justify-center gap-6 mt-10">
//         <button
//           onClick={scrollPrev}
//           className="px-8 py-3 cursor-pointer border-2 border-gray-300  rounded-2xl font-medium hover:bg-gray-100  transition"
       
//         >
//           Prev
//         </button>

//         <button
//           onClick={scrollNext}
//             className="px-8 py-3 cursor-pointer border-2 border-[#813831] text-[#813831] rounded-2xl font-medium hover:bg-[#813831] hover:text-white transition"
       
//         >
//           Next
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default TeamCarousel;