"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CoffeeCenterSplit() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7EFE2]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.83, 0, 0.17, 1] }}
        >
          {/* IMAGE WRAPPER */}
          <div className="relative w-[300px] h-[300px] overflow-hidden">
            {/* TOP 150px */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: "-150px" }}
              transition={{
                delay: 1,
                duration: 1.2,
                ease: [0.83, 0, 0.17, 1],
              }}
              className="absolute top-0 left-0 w-full h-[150px] overflow-hidden bg-[#F7EFE2]"
            ></motion.div>
            <div className="h-full w-full">
              <Image
                src="/logo.jpg"
                width={200}
                height={200}
                alt="111 "
                className="h-[300px] w-[300px]"
              />
            </div>
            {/* BOTTOM 150px */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: "150px" }}
              transition={{
                delay: 1,
                duration: 1.2,
                ease: [0.83, 0, 0.17, 1],
              }}
              className="absolute bottom-0 left-0 w-full h-[150px] overflow-hidden bg-[#F7EFE2]"
            ></motion.div>

            {/* OPTIONAL CENTER LINE */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute top-[150px] left-0 w-full h-[1px] bg-[#F7EFE2]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
