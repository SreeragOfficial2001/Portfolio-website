import React from "react";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 max-w-full flex items-center justify-center m-0 p-0 h-96 ">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-4 text-center">
          <p className="text-lg italic mb-2">
            "Learning, Living, and Leveling Up."
          </p>
          <p className="text-md">GetInTouch():</p>
        </div>
        <div className="flex space-x-6 mb-4">
          <a
            href="https://x.com/SasiSwetha80116"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/swetha-s-14387920a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="swethasasi374@gmail.com"
            className="hover:text-red-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="text-center text-sm">Created by Swetha 2025</div>
      </div>
    </footer>
  );
};

export default Footer;
