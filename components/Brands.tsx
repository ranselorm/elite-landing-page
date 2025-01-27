"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BMW from "@/public/icons/bmw.svg";
import Acura from "@/public/icons/acura.svg";
import Benz from "@/public/icons/benz.svg";
import Genesis from "@/public/icons/genesis.svg";
import Tesla from "@/public/icons/tes.svg";
import Toyota from "@/public/icons/toyo.svg";
import Jaguar from "@/public/icons/jag.svg";
import Honda from "@/public/icons/honda.svg";

const cars = [
  { icon: BMW },
  { icon: Toyota },
  { icon: Jaguar },
  { icon: Benz },
  { icon: Tesla },
  { icon: Honda },
];

const Brands = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggered animations for child elements
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.2 },
  };

  return (
    <motion.section
      className="px-4 md:px-10 lg:px-24 py-10 md:py-20 font-poppins mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex items-center justify-between"
        variants={containerVariants}
      >
        {cars?.map((car, index) => (
          <motion.div
            key={index}
            className="md:w-14 md:h-14 w-8 h-8"
            variants={iconVariants}
            whileHover="hover"
          >
            <Image priority src={car.icon} alt="Car Brand" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Brands;
