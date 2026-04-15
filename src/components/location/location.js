"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone,MessageCircle } from "lucide-react";
const Location = () => {
   
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

  return (
      <>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white py-10 md:pt-20 pb-8 px-6 flex justify-center overflow-hidden " 
    >
      <div className="max-w-6xl w-full space-y-14">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl Merriweather text-gray-900">
            Visit Us
          </h2>
          <p className="text-gray-500 mt-8 text-base md:text-lg">
            Find us easily and come enjoy the best coffee experience in town.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps?q=40.7098478,-74.009123&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl md:p-10 p-3 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                11.11 Coffee
              </h3>
              <p className="text-gray-600 mt-2">
                12 John St, New York, NY 10038, United States
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold  text-gray-900">
                Opening Hours
              </h3>
              <p className="text-gray-600 mt-2">Mon - Sun: 7:00 AM - 5:00 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
              <p className="text-gray-600 mt-2">
                +1 929 278 2719 <br />
                info@11cafe.com
              </p>
            </motion.div>

            {/* Button */}
            <a
              href="https://www.google.com/maps/place/No+Plates+Coffee/@40.7098478,-74.0116979,631m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c25b8f6002d947:0x33e2517527795963!8m2!3d40.7098478!4d-74.009123!16s%2Fg%2F11x6wcq9w4!5m1!1e2?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="inline-block text-center border py-4 px-8 rounded-2xl transition"
            >
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
         
    </motion.div>
      <section className="w-full md:py-32 py-12 px-6 bg-[#F7EFE2]/40 flex justify-center">
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
    <section className="w-full py-20 px-6 flex justify-center bg-white">
      <div className="max-w-4xl w-full text-center space-y-10">

        {/* Heading */}
        <div>
          <motion.h2   initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }} className="text-3xl md:text-4xl Merriweather text-black">
            Quick Contact
          </motion.h2>
          <motion.p   initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 , delay:0.1}} className="mt-3 text-gray-500">
            Need help fast? Reach us instantly through any option below.
          </motion.p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

          {/* Call */}
          <motion.a
            href="tel:+921234567890"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Phone size={18} />
            Call Now
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4,delay:0.15 }}
            href="https://wa.me/921234567890"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff" id="IconChangeColor" height="24" width="24"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" id="mainIconPathAttribute"></path></svg>
            WhatsApp
          </motion.a>

          {/* Instagram */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4,delay:0.3 }}
            href="https://instagram.com/yourusername"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-90 transition"
          >
          <svg viewBox="0 0 448 512" id="IconChangeColor" height="24" fill="#fff" width="24"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" id="mainIconPathAttribute"></path></svg>
            Instagram
          </motion.a>

        </div>

      </div>
    </section>

    </>
  );
};

export default Location;