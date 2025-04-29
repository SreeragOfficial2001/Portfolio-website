import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Girl from "../assets/ghibli.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`sticky top-4 z-50 mx-auto w-full max-w-7xl h-auto rounded-full ${
        isScrolled ? "shadow-lg border border-white/10" : ""
      }`}
    >
      <div className="bg-gradient-to-r from-blue-950 to-black/90 backdrop-blur-md bg-opacity-90 rounded-4xl p-5">
        <div className="container mx-auto flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="flex items-center mb-4 md:mb-0">
            <motion.img
              src={Girl}
              alt="Profile"
              className="rounded-full w-24 h-24"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:shadow-outline"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div
            className={`flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 ${
              isMobileMenuOpen ? "flex" : "hidden md:flex"
            } w-full md:w-auto`}
          >
            <NavLink href="#home" text="# Home" onClick={toggleMobileMenu} />
            <NavLink
              href="#aboutme"
              text="def AboutMe():"
              onClick={toggleMobileMenu}
            />
            <NavLink
              href="#skills"
              text="class Skills:"
              onClick={toggleMobileMenu}
            />
            <NavLink
              href="#projects"
              text="for project in Projects:"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NavLink = ({ href, text, onClick }) => {
  const parts = text.split(" ");

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center cursor-pointer"
      onClick={handleClick}
    >
      {parts.map((part, index) => {
        let colorClass = "text-gray-300";
        if (part === "#") {
          colorClass = "text-purple-400";
        } else if (
          part.startsWith("def") ||
          part.startsWith("class") ||
          part.startsWith("for")
        ) {
          colorClass = "text-green-400";
        }

        return (
          <React.Fragment key={index}>
            <span className={colorClass}>{part}</span>
            {index < parts.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </a>
  );
};

export default Header;
