import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 py-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Doyin<span className="text-cyan-400">Space</span>
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            A modern frontend developer’s portfolio — clean, fast, and
            animated. Built with React, Tailwind, and 💙.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-cyan-400 mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="/projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-3">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://github.com/doyinsola-coder" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/DoyinSpace" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-xl">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/dev_mubeen" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-xl">
              <FaTwitter />
            </a>
            <a href="mailto:doyinspace@gmail.com" className="hover:text-cyan-400 text-xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DoyinSpace. All rights reserved.
      </div>
    </footer>
  );
}
