import React from "react";
import { motion } from "framer-motion";

function Profile() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="bg-gradient-to-br py-16 md:py-24 text-white relative pl-4 md:pl-8 lg:pl-12 xl:pl-28 ml-0 md:ml-8 lg:ml-16 xl:ml-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.h2
          className="text-sm md:text-base lg:text-xl font-mono text-purple-400 mb-1 md:mb-2"
          variants={textVariants}
        >
          hello(): I'm
        </motion.h2>
        <motion.h1
          className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 lg:mb-4 md:text-4xl bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-left" // Adjusted font size and margin
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Swetha S.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-5xl xl:text-6xl mb-2 md:mb-3 lg:mb-4 font-semibold  "
          transition={{ delay: 0.4 }}
        >
          Python dev with AI dreams.
        </motion.p>
        <motion.p
          className="text-base md:text-lg mb-4 md:mb-6 lg:mb-8"
          variants={textVariants}
          transition={{ delay: 0.6 }}
        >
          With a strong foundation in Python and Django, I engineer efficient
          web solutions. I aim to integrate AI for crafting smarter,
          user-centric applications.
        </motion.p>
        <motion.p
          className="text-base md:text-lg mb-4 md:mb-6 lg:mb-8"
          variants={textVariants}
          transition={{ delay: 0.8 }}
        >
          Driven by creativity, I focus on building scalable solutions that make
          a difference.
        </motion.p>
        <div className="flex items-center space-x-4">
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-2.5 md:py-3 px-5 md:px-6 w-40 md:w-48 h-12 md:h-14 rounded-full shadow-md transition duration-300" // Adjusted padding and width for responsiveness
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Let's Talk!
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
