"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contact" },
    { name: "Menu", href: "/Menu" },
    { name: "Gallery", href: "/Gallery" },
    { name: "Location", href: "/Location" },
  ];

  /* ---------------- ANIMATION VARIANTS ---------------- */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const itemsbovrmedium = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* NAVBAR */}
      <div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.5 }}
        className="w-full bg-[#F7EFE2] sticky top-0 left-0 z-50 font-light Merriweather"
      >
        <motion.div
          //      initial={{ opacity: 0, y: -20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5 }}
          className="flex justify-between items-center Arimo max-w-6xl mx-auto py-4 px-6"
        >
          {/* LEFT LINKS DESKTOP */}
          {/* LEFT LINKS DESKTOP */}
          <ul className="hidden md:flex gap-6 items-center">
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="nav-item"
                data-active={pathname === "/"}
              >
                Home
              </Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <Link
                href="/About"
                className="nav-item"
                data-active={pathname === "/About"}
              >
                About
              </Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <Link
                href="/Contact"
                className="nav-item"
                data-active={pathname === "/Contact"}
              >
                Contact
              </Link>
            </motion.li>
          </ul>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className=""
          >
            <Image
              src="/textlogo.png"
              loading="eager"
              className="md:h-[60px] h-[46px] w-full "
              alt="logo"
              width={100}
              height={100}
            />
            {/* {
              <svg
                className="md:w-[180px] w-[130px]"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="60"
                fill="none"
                viewBox="0 0 533 117"
              >
                <path
                  fill="#000"
                  d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5M532.312 1.11407h-18l-.5 113.49993 18.5 1z"
                />
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162m17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0"
                  clipRule="evenodd"
                />
                <path
                  stroke="#000"
                  d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5ZM532.312 1.11407h-18l-.5 113.49993 18.5 1z"
                />
                <path
                  stroke="#000"
                  d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162Zm17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            } */}
          </motion.div>

          {/* RIGHT LINKS DESKTOP */}
          {/* RIGHT LINKS DESKTOP */}
          <ul className="hidden md:flex gap-6 items-center">
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
            >
              <Link
                href="/Menu"
                className="nav-item"
                data-active={pathname === "/Menu"}
              >
                Menu
              </Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.8 }}
            >
              <Link
                href="/Gallery"
                className="nav-item"
                data-active={pathname === "/Gallery"}
              >
                Gallery
              </Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 1 }}
            >
              <Link
                href="/Location"
                className="nav-item"
                data-active={pathname === "/Location"}
              >
                Location  
              </Link>
            </motion.li>
          </ul>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 flex flex-col gap-1 cursor-pointer"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-full bg-[#F7EFE2] z-100"
          >
            {/* HEADER */}
            <div className="flex justify-between p-5 ">
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                    <Image
              src="/textlogo.png"
              loading="eager"
              className="h-[46px] w-full "
              alt="logo"
              width={100}
              height={100}
            />
                {/* {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="130"
                    height="60"
                    fill="none"
                    viewBox="0 0 533 117"
                  >
                    <path
                      fill="#000"
                      d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5M532.312 1.11407h-18l-.5 113.49993 18.5 1z"
                    />
                    <path
                      fill="#000"
                      fillRule="evenodd"
                      d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162m17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0"
                      clipRule="evenodd"
                    />
                    <path
                      stroke="#000"
                      d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5ZM532.312 1.11407h-18l-.5 113.49993 18.5 1z"
                    />
                    <path
                      stroke="#000"
                      d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162Zm17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                } */}
              </motion.div>

              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <button onClick={() => setOpen(false)} className="text-3xl">
                  ✕
                </button>
              </motion.div>
            </div>

            {/* NAV LINKS */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center gap-6 h-full text-2xl mt-12"
            >
              {links.map((link) => (
                <motion.div variants={item} key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="nav-item"
                    data-active={pathname === link.href}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
