"use client";
import { motion } from "framer-motion";

export default function OurStoryTimeline() {

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      desc: "Our founders started with a small coffee corner and a big dream of serving exceptional specialty coffee.",
    },
    {
      year: "2019",
      title: "First Community",
      desc: "Students, creatives, and coffee lovers began gathering, turning our café into a local meeting spot.",
    },
    {
      year: "2020",
      title: "Signature Drinks",
      desc: "We introduced handcrafted drinks and desserts that quickly became customer favorites.",
    },
    {
      year: "2021",
      title: "Growing Passion",
      desc: "Our team expanded and we began sourcing premium beans directly from trusted farms.",
    },
    {
      year: "2022",
      title: "Expanding the Menu",
      desc: "New breakfast options, desserts, and seasonal drinks were added to enhance the café experience.",
    },
    {
      year: "Today",
      title: "Our Mission",
      desc: "We continue to create a warm space where great coffee brings people together.",
    },
  ];

  // 🔥 Parent animation (stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // 🔥 Each item animation
  const item = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full md:py-28 py-8 bg-[#faf7f4]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl  Merriweather font-semibold text-center mb-4">
            Our Journey
          </h2>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-20">
            From humble beginnings to becoming a beloved neighborhood café,
            our story is built on passion for coffee, community, and creating
            moments people love to share.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-200"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {timeline.map((itemData, i) => (
              <motion.div
                key={i}
                variants={item}
                className="relative pl-14"
              >

                {/* Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#813831] border-4 border-white shadow"
                ></motion.div>

                {/* Content */}
                <p className="text-sm text-[#813831] font-semibold mb-1">
                  {itemData.year}
                </p>

                <h3 className="text-xl font-semibold mb-2 Merriweather">
                  {itemData.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {itemData.desc}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}