"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Text from "./Text";
import Link from "next/link";

const Vendor = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      className="px-4 md:px-10 lg:px-24 py-20 font-poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-700">
          Join Our Network Become A Vendor
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row w-full items-center gap-x-20 mt-16"
        variants={containerVariants}
      >
        {/* Image Section */}
        <motion.div
          className="w-full md:w-7/12 rounded-md overflow-hidden"
          variants={imageVariants}
        >
          <div className="relative w-full md:w-[550px] h-[300px] md:h-[400px] px-4">
            <Image
              fill
              alt="Vendor"
              src="/images/vendor.png"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="w-full md:w-6/12 p-4" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-10 text-gray-700">
            Drive and earn money
          </h2>

          <motion.div
            className="flex flex-col gap-y-5"
            variants={containerVariants}
          >
            <Text
              num={1}
              title="Expand Your Reach"
              subtitle="Access a wider customer base, boost bookings, and seize new opportunities"
            />

            <Text
              num={2}
              title="Boost Your Revenue"
              subtitle="Maximize earnings by renting out vehicles effortlessly and optimizing pricing."
            />

            <Text
              num={3}
              title="Streamlined Management"
              subtitle="Simplify operations with intuitive tools, saving time and enhancing service quality."
            />
          </motion.div>

          <Link href="https://green-mud-08bec770f-dev.eastus2.3.azurestaticapps.net/signup">
            <motion.button
              className="mt-6 text-white py-2 px-8 rounded shadow transition-colors hover:bg-white hover:text-black bg-green-700 font-bold md:w-max w-full"
              variants={buttonVariants}
              whileHover="hover"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Vendor;
