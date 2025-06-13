import { motion } from "framer-motion";
import React from "react";
export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            About Me
          </motion.h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hi, I'm <span className="text-blue-400 font-semibold">Mubeen Doyinsola Abdulateef (DoyinSpace)</span>, a passionate web developer and the creative force behind <span className="font-bold text-blue-400">DoyinSpace</span>. I specialize in building sleek, fast, and responsive web applications using modern technologies like React, Tailwind CSS, and more.
          </p>

          <p className="text-gray-400 mb-4">
            I'm driven by clean code, sharp UI, and building and creative meaningful digital experiences.
          </p>

          <div>
            <h4 className="font-semibold text-white mb-2">Tech Stack:</h4>
            <ul className="flex flex-wrap gap-3 text-sm text-gray-300">
              <li className="bg-gray-800 px-3 py-1 rounded-full">React</li>
              <li className="bg-gray-800 px-3 py-1 rounded-full">Tailwind CSS</li>
              <li className="bg-gray-800 px-3 py-1 rounded-full">Framer Motion</li>
              <li className="bg-gray-800 px-3 py-1 rounded-full">JavaScript</li>
              <li className="bg-gray-800 px-3 py-1 rounded-full">Git</li>
              <li className="bg-gray-800 px-3 py-1 rounded-full">Responsive Design</li>
            </ul>
          </div>
        </div>

        {/* Image / Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="/DoyinSpace.png"
            alt="DoyinSpace Avatar"
            className="rounded-2xl shadow-lg max-w-xs md:max-w-sm"
          />
        </motion.div>
      </div>
    </section>
  );
}
