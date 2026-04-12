"use client"
import React from 'react'
import HeroSection from '../components/herosection'
import {motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from '../components/contact/contact';
import OpeningHours from '../components/contact/openinghour';
import Faqs from '../components/contact/faqs';
const Page = () => {
     const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
       <HeroSection
        title="Contact us at 11.11 cafe"
        description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
        image="/backimg/6.jpg"
      />
         <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-10"
      >

        {[{
          icon: MapPin,
          title: "Visit Us",
          text: <>123 Coffee Street <br /> Karachi, Pakistan</>
        },
        {
          icon: Phone,
          title: "Call Us",
          text: "+92 300 1234567"
        },
        {
          icon: Mail,
          title: "Email Us",
          text: "hello@coffeecafe.com"
        }].map((itemData, i) => {
          const Icon = itemData.icon;

          return (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center text-center space-y-4"
            >

              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Icon size={40} />
              </motion.div>

              <motion.h3 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }} className="text-xl font-semibold">
                {itemData.title}
              </motion.h3>

              <motion.p 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }} className="text-gray-600">
                {itemData.text}
              </motion.p>

            </motion.div>
          );
        })}

      </motion.section>
      <ContactForm />
      <OpeningHours/>
      <Faqs />
    </div>
  )
}

export default Page
