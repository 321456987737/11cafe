"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LocationSection = () => {
  return (
    <section className="w-full min-h-screen h-full flex flex-col md:flex-row md:mt-0 mt-16">

      {/* RIGHT SIDE FIRST (MOBILE TOP) */}
      <div className="w-full md:w-[50vw] h-full md:h-screen bg-white flex items-center justify-center px-4 md:px-16 order-1 md:order-2">

        <div className="max-w-xl w-full">

          {/* TITLE */}
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-semibold mb-10 Merriweather md:text-left text-center text-[#1f1f1f] "
          >
            Visit Our <span className="text-[#813831] md:text-left text-center">Cafe Location</span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 text-lg leading-relaxed mb-10"
          >
            Step into a warm, cozy space where coffee meets calm. Whether you are here to work,
            relax, or meet friends — our doors are always open.
          </motion.p>

          {/* INFO BOX */}
          <div className="bg-[#F7EFE2] p-6 rounded-2xl shadow-md space-y-3">

            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-700"
            >
              📍 <span className="font-semibold text-black">11:11 Cafe</span>
            </motion.p>

            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-500 text-sm"
            >
              Open: 8:00 AM – 10:00 PM
            </motion.p>

            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-500 text-sm"
            >
              ☎ +1 (000) 123-4567
            </motion.p>

          </div>

          {/* BUTTON */}
          <Link href="https://www.google.com/maps?ll=40.718551,-73.949415&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=17750272176154916439" target="_blank">
          <motion.button
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 w-full py-3 mb-12 cursor-pointer border-2 border-[#813831] text-[#813831] rounded-2xl font-medium hover:bg-[#813831] hover:text-white transition"
          >
            Get Directions
          </motion.button>
            </Link>

        </div>
      </div>

      {/* LEFT SIDE (MOBILE BOTTOM) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[50vw] h-[50vh] md:h-screen order-2 md:order-1"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9468336136155!2d-73.95199092429312!3d40.71855147139216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2595c8ff7f9e9%3A0xf655a27fce36b657!2s11%3A11%20Cafe!5e0!3m2!1sen!2sus!4v1710000000000"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </motion.div>

    </section>
  );
};

export default LocationSection;


// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// const LocationSection = () => {
//   return (
//     <section className="w-full h-screen flex flex-col md:flex-row">
      
//       {/* LEFT SIDE - MAP */}
//       <div className="w-full md:w-[50vw] h-[50vh] md:h-screen">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9468336136155!2d-73.95199092429312!3d40.71855147139216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2595c8ff7f9e9%3A0xf655a27fce36b657!2s11%3A11%20Cafe!5e0!3m2!1sen!2sus!4v1710000000000"
//           className="w-full h-full border-0"
//           loading="lazy"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* RIGHT SIDE - INFO */}
//     <div className="w-full md:w-[50vw] h-[50vh] md:h-screen bg-white flex items-center justify-center px-8 md:px-16">
  
//   <div className="max-w-xl w-full">

//     {/* TITLE */}
//     <motion.h2  
//           viewport={{ once: true }}   initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }} className="text-3xl md:text-4xl font-semibold mb-10 Merriweather text-[#1f1f1f]">
//       Visit Our <span className="text-[#813831]">Cafe Location</span>
//     </motion.h2>

//     {/* SMALL DESCRIPTION */}
//     <motion.p   
//           viewport={{ once: true }}   initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }} className="text-gray-700 text-lg leading-relaxed mb-10">
//       Step into a warm, cozy space where coffee meets calm. Whether you are here to work,
//       relax, or meet friends — our doors are always open.
//     </motion.p>

//     {/* INFO BOX (like testimonial card style) */}
//     <div className="bg-[#F7EFE2] p-6 rounded-2xl shadow-md space-y-3">

//       <motion.p  
//           viewport={{ once: true }}    initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }} className="text-gray-700">
//         📍 <span className="font-semibold text-black">11:11 Cafe</span>
//       </motion.p>

//       <motion.p   
//           viewport={{ once: true }}  initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }} className="text-gray-500 text-sm">
//         Open: 8:00 AM – 10:00 PM
//       </motion.p>

//       <motion.p  
//           viewport={{ once: true }}   initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }} className="text-gray-500 text-sm">
//         ☎ +1 (000) 123-4567
//       </motion.p>

//     </div>

//     {/* CTA BUTTON */}
//     <motion.button
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
      
//           viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: 0.3 }}
//       className="mt-8 w-full py-3 rounded-xl bg-[#813831] text-white font-medium hover:opacity-90 transition"
//     >
//       Get Directions
//     </motion.button>

//   </div>
// </div>

//     </section>
//   );
// };


// export default LocationSection;