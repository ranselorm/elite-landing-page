"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Text from "./Text";

const User = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Reduced duration for the overall animation
        when: "beforeChildren",
        staggerChildren: 0.15, // Faster staggering between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    }, // Faster transition for each child
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }, // Faster scale-in effect
  };

  return (
    <motion.section
      className="px-4 md:px-10 lg:px-24 py-6 font-poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animates when 30% of the section is visible
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col md:flex-row-reverse w-full items-center gap-x-20 my-10 md:my-20"
        variants={containerVariants}
      >
        {/* Image Section */}
        <motion.div
          className="w-full md:w-6/12 rounded-md overflow-hidden"
          variants={imageVariants}
        >
          <div className="relative w-[450px] h-[350px]">
            <Image
              fill
              alt="User Feature"
              src="/images/woman.jpeg"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="w-full md:w-6/12 p-4" variants={itemVariants}>
          <h2 className="text-2xl font-semibold my-6 text-gray-700">
            Unlock convenience with our app
          </h2>

          <motion.div
            className="flex flex-col gap-y-5"
            variants={containerVariants}
          >
            <Text
              num={1}
              title="Seamless Booking"
              subtitle="Book effortlessly with our user-friendly app interface, saving time and hassle."
            />

            <Text
              num={2}
              title="Exclusive Deals"
              subtitle="Access app-only discounts and perks, maximizing savings on your rentals."
            />

            <Text
              num={3}
              title="Instant Accessibility"
              subtitle="Enjoy instant access to bookings and support, anytime, anywhere."
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default User;
