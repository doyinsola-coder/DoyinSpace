import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8 px-4"
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2025 DoyinSpace. All rights reserved.</p>
          <p className="text-sm">Built with React, Tailwind CSS & ❤️</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-emerald-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
