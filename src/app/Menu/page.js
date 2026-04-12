"use client";
import React from "react";
import { motion } from "framer-motion";

const menuData = [
  {
    category: "Hot Coffee",
    items: [
      { name: "Espresso", desc: "Strong and bold single shot of coffee.", price: "$3.00" },
      { name: "Americano", desc: "Espresso with hot water for a smooth taste.", price: "$3.50" },
      { name: "Cappuccino", desc: "Espresso with steamed milk and foam.", price: "$4.00" },
      { name: "Latte", desc: "Creamy milk blended with smooth espresso.", price: "$4.50" },
      { name: "Macchiato", desc: "Espresso marked with a touch of milk foam.", price: "$4.00" },
    ],
  },
  {
    category: "Cold Coffee",
    items: [
      { name: "Iced Latte", desc: "Chilled espresso with cold milk.", price: "$4.50" },
      { name: "Cold Brew", desc: "Slow-steeped coffee, smooth and refreshing.", price: "$5.00" },
      { name: "Iced Americano", desc: "Bold espresso served over ice.", price: "$4.00" },
      { name: "Frappuccino", desc: "Blended iced coffee with creamy texture.", price: "$5.50" },
    ],
  },
  {
    category: "Tea & Drinks",
    items: [
      { name: "Green Tea", desc: "Light and refreshing brewed tea.", price: "$2.50" },
      { name: "Black Tea", desc: "Strong traditional brewed tea.", price: "$2.00" },
      { name: "Lemon Iced Tea", desc: "Refreshing iced tea with lemon flavor.", price: "$3.50" },
      { name: "Hot Chocolate", desc: "Rich chocolate drink with steamed milk.", price: "$4.00" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Cake", desc: "Rich and moist layered chocolate cake.", price: "$5.50" },
      { name: "Cheesecake", desc: "Creamy cheesecake with biscuit base.", price: "$6.00" },
      { name: "Brownie", desc: "Warm chocolate brownie with soft center.", price: "$4.00" },
      { name: "Donut", desc: "Soft and sweet glazed donut.", price: "$2.50" },
    ],
  },
  {
    category: "Food & Snacks",
    items: [
      { name: "Grilled Sandwich", desc: "Toasted sandwich with cheese & veggies.", price: "$5.00" },
      { name: "Chicken Panini", desc: "Grilled panini with seasoned chicken.", price: "$6.50" },
      { name: "Club Sandwich", desc: "Layered sandwich with chicken, egg & veggies.", price: "$7.00" },
      { name: "French Fries", desc: "Crispy golden fried potato sticks.", price: "$3.50" },
      { name: "Croissant", desc: "Buttery flaky French pastry.", price: "$3.00" },
    ],
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full ">
          <div className="bg-white  md:my-20 my-10 flex items-center justify-center ">
            <motion.div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                viewport={{ once: true }}
                className="md:text-lg max-w-[450px]  tracking-[0.3em]"
              >
                Welcome to
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:text-8xl text-6xl  md:mt-8 mt-6 Merriweather"
              >
                Our Menu
              </motion.h1>
            </motion.div>
          </div>
        </div>
    <div className="w-full min-h-screen bg-white text-gray-900 px-6 py-16  ">

      {/* Menu Sections */}
      <div className="max-w-5xl mx-auto space-y-14 ">
        {menuData.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Category Title */}
            <h2 className="text-2xl Merriweather mb-6 border-b pb-2">
              {section.category}
            </h2>

            {/* Items */}
            <div className="space-y-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex justify-between items-start gap-10"
                >
                  {/* Left side */}
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right side (price) */}
                  <div className="font-semibold whitespace-nowrap">
                    {item.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-20"
      >
        <p className="text-gray-500 mb-4">
          Visit us and enjoy your perfect cup.
        </p>
        <motion.button  
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
           className="px-8 py-3 cursor-pointer border-2 border-[#813831] text-[#813831] rounded-2xl font-medium hover:bg-[#813831] hover:text-white transition"
        >
          Order Now
        </motion.button>
      </motion.div>
    </div>
    </>
  );
}