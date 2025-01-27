"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GoogleIcon from "@/public/icons/GoogleIcon.svg";
import AppleIcon from "@/public/icons/AppleIcon.svg";

const Download = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2, // Stagger child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="px-4 md:px-10 lg:px-24 py-16 font-poppins"
      id="download"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Section Title */}
      <motion.h1
        className="text-4xl font-bold text-center text-gray-700"
        variants={itemVariants}
      >
        Download Our App
      </motion.h1>

      {/* Main Content */}
      <motion.div
        className="bg-green-700 mt-10 justify-betwen flex flex-col-reverse md:flex-row items-center rounded-lg md:rounded-3xl overflow-hidden md:h-[550px]"
        variants={containerVariants}
      >
        {/* Left Section */}
        <motion.div
          className="w-full md:w-8/12 md:p-20 p-3 mt-10"
          variants={itemVariants}
        >
          <h1 className="text-2xl md:text-4xl font-black text-white leading-snug">
            Request in seconds, ride in minutes.
          </h1>
          <p className="text-lg text-white my-6">
            Available for iOS and Android devices.
          </p>
          <div className="flex flex-row justify-center md:justify-start">
            <motion.div variants={itemVariants} className="w-full">
              <Image src={GoogleIcon} alt="Google Play" className="w-[80%]" />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full">
              <Image src={AppleIcon} alt="App Store" className="w-[80%]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full md:w-6/12 flex items-center justify-center"
          variants={imageVariants}
        >
          <div className="relative w-[400px] md:w-[450px] md:h-[550px] h-[350px] mt-4">
            <Image
              src="/images/user.png"
              alt="App Preview"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Download;
