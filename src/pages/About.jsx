import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#00BFFF]"
          >
            About Me
          </motion.h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Hi, I'm{" "}
            <span className="text-[#00FFE0] font-semibold">
              Mubeen Doyinsola Abdulateef (DoyinSpace)
            </span>
            , a passionate web developer and the creative force behind{" "}
            <span className="font-bold text-[#00BFFF]">DoyinSpace</span>. I
            specialize in building sleek, fast, and responsive web applications
            using modern technologies like React, Tailwind CSS, and more.
          </p>

          <p className="text-gray-400 mb-4">
            I'm driven by clean code, sharp UI, and building meaningful digital
            experiences that make an impact.
          </p>

          <div>
            <h4 className="font-semibold text-[#00FFE0] mb-2">Tech Stack:</h4>
            <ul className="flex flex-wrap gap-3 text-sm text-gray-300">
              {[
                "React",
                "Tailwind CSS",
                "Framer Motion",
                "JavaScript",
                "Git",
                "Responsive Design",
              ].map((tech, i) => (
                <li
                  key={i}
                  className="bg-gray-800 border border-[#00BFFF] text-white px-3 py-1 rounded-full hover:shadow-[0_0_8px_#00FFE0] transition duration-300"
                >
                  {tech}
                </li>
              ))}
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
            src="https://res.cloudinary.com/decgjhtlb/image/upload/v1753095123/DoyinSpace_dd4vn5.png"
            alt="DoyinSpace Avatar"
            className="rounded-2xl shadow-lg max-w-xs md:max-w-sm border border-[#00BFFF]"
          />
        </motion.div>
      </div>
    </section>
  );
}
