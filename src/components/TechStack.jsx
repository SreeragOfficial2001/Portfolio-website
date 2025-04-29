import React from "react";
import PythonLogo from "../assets/pythonlogo.png";
import DjangoLogo from "../assets/djangologo.png";
import RestLogo from "../assets/restapilogo.png";
import BootstrapLogo from "../assets/bootstraplogo.png";
import GitLogo from "../assets/gitlogo.png";
import PostLogo from "../assets/postgresqllogo.png";
import HtmlLogo from "../assets/htmllogo.jpg";
import CssLogo from "../assets/csslogo.jpg";
import FastApiLogo from "../assets/fastapilogo.jpg";
import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    { name: "Python", logo: PythonLogo },
    { name: "Django", logo: DjangoLogo },
    { name: "Html", logo: HtmlLogo },
    { name: "Css", logo: CssLogo },
    { name: "Fast Api", logo: FastApiLogo },
    { name: "RESTful API", logo: RestLogo },
    { name: "GIT", logo: GitLogo },
    { name: "Bootstrap", logo: BootstrapLogo },
    { name: "PostgreSQL", logo: PostLogo },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-light text-purple-400 mb-8"
          variants={itemVariants}
        >
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.img
                src={tech.logo}
                alt={tech.name}
                className="h-20 w-20 mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <p className="text-white">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
