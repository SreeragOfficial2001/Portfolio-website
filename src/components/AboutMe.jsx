import React from "react";
import { motion } from "framer-motion";
import aboutMeImage from "../assets/aboutme.jpg";
import resumePDF from "../assets/swetharesume.pdf";

const AboutMe = () => {
  const imageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const openResume = () => {
    window.open(resumePDF, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="text-white py-16 md:py-24 relative pl-4 md:pl-28 ml-0 md:ml-32">
      {/* Added relative, paddingLeft, and marginLeft, adjusted for responsiveness */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-6 flex flex-col items-start justify-center">
            {/* Changed items-center to items-start */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-3xl md:text-4xl font-light bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-left"
            >
              def AboutMe():
            </motion.h2>
            <div className="border-l-4 border-purple-500 pl-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                className="text-lg mb-8 leading-relaxed text-left"
              >
                I'm Swetha S, a dedicated and results-driven Django backend developer with over 2 years of experience in building scalable and secure web applications. I specialize in Django and Django REST Framework, and I have a strong command of backend development processes—from database architecture to RESTful API integration.

              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
              className="text-lg mb-8 leading-relaxed text-left"
            >
             My journey began at Enfono Technologies, where I contributed to multiple projects ranging from EdTech solutions to property and resort management systems. I thrived in a collaborative environment, working alongside Android and web development teams to deliver efficient software products. Currently, at Elkanio Research Labs, I work as a Software Engineer on complex travel tech solutions, optimizing backend performance and ensuring seamless integration with frontend applications.

            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              className="text-lg mb-8 leading-relaxed text-left"
            >
              I am highly adaptable to new technologies and environments, and I continuously seek to expand my skill set. Whether it's integrating tools like Celery for asynchronous task handling or implementing JWT-based authentication for secure APIs, I take pride in staying updated with the latest backend trends and best practices.

            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              className="text-lg mb-8 leading-relaxed text-left"
            >
             My technical toolkit includes Python, Django, DRF, FastAPI, PostgreSQL, and more. I enjoy problem-solving, clean code, and cross-functional collaboration to create backend solutions that are both efficient and user-focused.

            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
              className="flex justify-start"
            >
              <button onClick={openResume} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-3 px-6 w-48 h-14 rounded-full shadow-md transition duration-300">
                Resume
              </button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="md:w-1/3 rounded-lg overflow-hidden shadow-3xl flex items-center justify-center"
          >
            <img
              src={aboutMeImage}
              alt="Mayank"
              className="w-64 max-w-sm h-auto object-cover" // Make image responsive and set max width
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
