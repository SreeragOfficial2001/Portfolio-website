import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import PropTypes from "prop-types";

const ProjectCard = ({ title, description, githubUrl }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex items-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "🎓 RoseApp",
      description:
        "A modern EdTech platform built to facilitate personalized online classes and tutoring sessions.",
      githubUrl: "https://github.com/your-repo/trackmyjob",
    },
    {
      title: "📊 WatchTower",
      description:
        "A project management system with modules like Project, Milestones, AMC (Annual Maintenance Contract), and Meeting Logs.",
      githubUrl: "https://github.com/your-repo/ecommerce",
    },
    {
      title: "🛍 MasterMart",
      description:
        "A business listing platform allowing businesses to showcase products and manage listings efficiently.",
      githubUrl: "https://github.com/your-repo/dashboard",
    },
    {
      title: "🌴 Resort Rover",
      description:
        "Description: A comprehensive resort booking platform that handles guest data, room allocations, and real-time financial transactions.",
      githubUrl: "https://github.com/your-repo/mobileapp",
    },
    {
      title: "📚 Albedo",
      description:
        "A student management system with role-specific portals for Admin, Mentor, and HR. Supports student tracking, fee management, and reporting.",
      githubUrl: "https://github.com/your-repo/portfolio",
    },
    {
      title: "✈ BTA (Travel Booking System)",
      description:
        "A one-stop travel platform for booking flights, hotels, rentals, and activities.",
      githubUrl: "https://github.com/your-repo/portfolio",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-light text-purple-400 mb-8 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
