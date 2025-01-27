"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import { FaCar } from "react-icons/fa";
import { FaLocationDot, FaCalendar } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";

const How = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="px-4 md:px-10 lg:px-24 py-10 font-poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-center text-gray-700">
          How It Works
        </h1>
        <p className="pt-5 pb-20 text-gray-600">
          Discover how easy it is to rent a car with us: pick your car, choose
          dates, select locations, and start driving
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-3 -mt-6"
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <Card
            title="Choose a car"
            Icon={FaCar}
            subtitle="Browse and select your ideal vehicle from our diverse fleet."
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Card
            title="Pick a date"
            Icon={FaCalendar}
            subtitle="Select pickup and return dates to fit your schedule."
            id="center"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Card
            title="Pick a location"
            Icon={FaLocationDot}
            subtitle="Choose convenient pickup and drop-off points from our network."
            id="center"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Card
            title="Enjoy driving"
            Icon={IoIosSpeedometer}
            subtitle="Hit the road and enjoy the freedom of your journey."
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default How;
