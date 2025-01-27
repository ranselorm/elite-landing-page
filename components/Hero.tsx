"use client";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      className="relative bg-cover bg-center bg-no-repeat md:h-screen h-[750px] px-4 md:px-10 lg:px-24 font-poppins text-white"
      style={{
        backgroundImage: `url(/lady.jpg)`,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 0.8 }}
      />
      <div className="relative flex items-center h-full">
        <motion.div
          className="text-white max-w-[700px] flex flex-col items-start gap-y-6"
          variants={textVariants}
        >
          <motion.h1
            className="lg:text-6xl md:text-4xl text-4xl font-bold mb-2 w-11/12 md:w-9/12 tracking-wide"
            variants={textVariants}
          >
            Go wherever<span className="font-primary">,</span> whenever
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg lg:w-[600px]"
            variants={textVariants}
          >
            Choose, book, and drive. Our app makes renting a car easy. Pick your
            ride and hit the road in no time. Simple, fast, and just for you.
          </motion.p>

          <motion.button
            className="mt-4 text-white md:py-2 md:px-8 px-12 py-3 rounded shadow transition-colors hover:bg-white hover:text-black bg-green-700 font-bold"
            variants={buttonVariants}
            whileHover="hover"
          >
            Get App
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
