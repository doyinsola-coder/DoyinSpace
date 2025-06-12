import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="text-blue-400 text-6xl"
        >
          <FaReact />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-white">Doy</span>
          <span className="text-blue-400">in</span>
          <span className="text-white">Space</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-md">
          I'm Mubeen Doyinsola Abdulateef — a React & Tailwind developer building clean, creative web apps.
        </p>
        <a
          href="/projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-2xl text-sm shadow-lg"
        >
          See My Work
        </a>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto px-6 py-16" id="about">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a frontend developer passionate about intuitive UIs, component architecture, and smooth animations.
          I build with React, Tailwind, and modern tools to bring designs to life — clean, fast, and responsive.
        </p>
      </section>

      {/* Projects */}
      <section className="bg-gray-800 py-16 px-6" id="projects">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">Portfolio Site</h3>
              <p className="text-gray-300 mt-2">My own portfolio built with React + Tailwind + Framer Motion.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">E-commerce UI</h3>
              <p className="text-gray-300 mt-2">Responsive, fast-loading UI using fake store API & Tailwind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold">Let’s Build Something Together</h2>
        <p className="text-gray-400 mt-2">Reach out if you want to collaborate or hire me.</p>
        <a
          href="/contact"
          className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Contact Me
        </a>
      </section>

      
    </div>
  );
}
