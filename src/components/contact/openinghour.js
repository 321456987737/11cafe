"use client";
import React from "react";
import { motion } from "framer-motion";

const hours = [
  {
    day: "Monday – Friday",
    label: "Weekdays",
    time: "8:00 AM – 10:00 PM",
  },
  {
    day: "Saturday – Sunday",
    label: "Weekend",
    time: "9:00 AM – 11:00 PM",
  },
];

const OpeningHours = () => {
  return (
    <section className="w-full py-32 px-6 bg-[#F7EFE2]/40 flex justify-center">
      <div className="max-w-5xl w-full">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl Merriweather text-black">
            Our Daily Rhythm
          </h2>
          <p className="mt-6 text-gray-600 max-w-[500px] mx-auto">
            From early mornings to late evenings, here’s how your day flows with us.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute md:flex hidden left-1/2 top-0 h-full w-[2px] bg-gray-200 -translate-x-1/2" />

          <div className="md:space-y-20 space-y-10">
            {hours.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                viewport={{once:true}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`flex items-center ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                    
                    <p className="text-sm text-gray-500 mb-2">
                      {item.label}
                    </p>

                    <h3 className="text-xl text-black">
                      {item.day}
                    </h3>

                    <p className="mt-3 text-lg font-semibold">
                      {item.time}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 bg-black rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-500 mt-20">
          * Hours may vary on public holidays.
        </p>

      </div>
    </section>
  );
};

export default OpeningHours;

// "use client";
// import React from "react";
// import {motion} from "framer-motion"
// const OpeningHours = () => {
//   return (
//     <section className="w-full py-24 px-6 bg-[#F7EFE2]/50 flex justify-center">
//       <div className="max-w-4xl w-full">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//           className="mt-4 text-4xl md:text-5xl Merriweather text-black">
//             Visit Us Anytime
//           </motion.h2>
//           <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: 0.15 }}
//           className="mt-8 text-gray-600  mx-auto max-w-[450px]">
//             We’re here to serve you fresh coffee and a warm atmosphere every day.
//           </motion.p>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 md:p-10 p-3  space-y-8">

//           {/* Weekdays */}
//           <div className="flex justify-between items-center border-b pb-4">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//             >
//               <h3 className="text-lg  text-black">
//                 Monday – Friday
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Weekdays
//               </p>
//             </motion.div>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.25 }}
//               className="text-lg font-semibold text-black">
//               8:00 AM – 10:00 PM
//             </motion.p>
//           </div>

//           {/* Weekend */}
//           <div className="flex justify-between items-center border-b pb-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.3 }}
//             >
//               <h3 className="text-lg  text-black">
//                 Saturday – Sunday
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Weekend
//               </p>
//             </motion.div>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.4 }}
//               className="text-lg font-semibold text-black">
//               9:00 AM – 11:00 PM
//             </motion.p>
//           </div>

//           {/* Holiday Note */}
//           <div className="pt-4">
//             <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="text-sm text-gray-500 text-center">
//               * Hours may vary on public holidays. Please check our social pages
//               for updates.
//             </motion.p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default OpeningHours;