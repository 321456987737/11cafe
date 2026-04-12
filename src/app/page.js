"use client";
import React,{useState, useEffect} from "react";
import HeroSection from "./components/herosection";
import Image from "next/image";
import Menusection from "@/app/components/home/menusection"
import Gallery from "@/app/components/home/galleery";
import Testimonials from "@/app/components/home/testimonials";
import LocationSection from "@/app/components/home/location"
import { motion } from "framer-motion";
import Link from "next/link";
const Page = () => {
    const [swap, setSwap] = useState(false);

  // Auto swap every 12 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setSwap((prev) => !prev);
    }, 12000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <HeroSection
        title="WELCOME TO 11:11 CAFE"
        description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
        image="/backimg/1.jpg"
      />

      {/* About Section */}
       <div className="w-full bg-[#F7EFE2]/50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">

        {/* LEFT → Images */}
        <div
          className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] cursor-pointer"
          onClick={() => setSwap(!swap)}
        >

          {/* IMAGE 1 */}
          <Image
            src="/backimg/2.jpg"
            alt="image"
            width={600}
            height={600}
            className={`absolute rounded-xl shadow-lg transition-all duration-700
              ${swap
                ? "top-16 left-16 w-[80%] h-[80%] z-20"
                : "top-0 left-0 w-[80%] h-[80%] z-10"
              }`}
          />

          {/* IMAGE 2 */}
          <Image
            src="/backimg/3.webp"
            alt="image"
            width={600}
            height={600}
            className={`absolute rounded-xl shadow-xl object-cover transition-all duration-700
              ${swap
                ? "top-0 left-0 w-[80%] h-[80%] z-10"
                : "top-16 left-16 w-[80%] h-[80%] z-20"
              }`}
          />
        </div>

        {/* RIGHT → TEXT */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-semibold Merriweather"
          >
            <span className="text-[#813831]">About</span> Our Cafe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 leading-relaxed"
          >
            Welcome to 11:11 Cafe — a place where comfort meets taste.
            We serve fresh, healthy meals crafted with passion. Whether
            you are here for breakfast, lunch, or a relaxing coffee break,
            we aim to give you a memorable experience.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-8 py-3 cursor-pointer border-2 border-[#813831] text-[#813831] rounded-2xl font-medium hover:bg-[#813831] hover:text-white transition"
          >
            <Link href="/About">
            About us
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
      {/* product section */}
 
      <Menusection />
      <Gallery />
      <div className="">

      <Testimonials/>
      </div>
      <LocationSection/>
  
 </div>
  );
};

export default Page;