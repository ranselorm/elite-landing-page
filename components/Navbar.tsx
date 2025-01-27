"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation Variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.5, ease: "easeIn" } },
  };

  const navScrollVariants = {
    scrolled: { backgroundColor: "rgba(255, 255, 255, 1)", color: "black" },
    top: { backgroundColor: "rgba(255, 255, 255, 0)", color: "white" },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "shadow" : ""
      }`}
    >
      <motion.div
        className="px-4 md:px-10 lg:px-24 py-3 flex justify-between items-center"
        animate={isScrolled ? "scrolled" : "top"}
        variants={navScrollVariants}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.span
            className="font-black text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            FleetConnect
          </motion.span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Primary Navbar items */}
        <div className="hidden md:flex gap-x-10 text-sm items-center">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className="hover:text-green-700 transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            className="text-white py-2 px-4 rounded shadow transition-colors hover:bg-white hover:text-black bg-green-700 font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Download
          </motion.button>
        </div>
      </motion.div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white h-screen z-50 flex flex-col justify-center items-center text-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <button
              className="absolute top-5 right-5 text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="text-xl text-black hover:text-green-700 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href={item.href}>{item.name}</Link>
              </motion.div>
            ))}
            <motion.button
              className="text-white py-2 px-4 rounded shadow transition-colors hover:bg-white hover:text-black bg-green-700 font-bold mt-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Download
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
