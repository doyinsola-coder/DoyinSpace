import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="text-cyan-400 text-6xl"
        >
          <FaReact />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-5xl font-bold"
        >
          <span className="text-white">Doy</span>
          <span className="text-cyan-400">in</span>
          <span className="text-emerald-400">Space</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-gray-300 text-lg max-w-md"
        >
          I'm Mubeen Doyinsola Abdulateef — a React & Tailwind developer building clean, creative web apps.
        </motion.p>

        <motion.a
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          href="/projects"
          className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-2 rounded-2xl transition"
        >
          See My Work
        </motion.a>
      </section>

      {/* About Me */}
      <motion.section
        id="about"
        className="max-w-4xl mx-auto px-6 py-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a frontend developer passionate about intuitive UIs, component architecture, and smooth animations.
          I build with React, Tailwind, and modern tools to bring designs to life — clean, fast, and responsive.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="bg-[#0f0f0f] py-16 px-6"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold mb-6 text-center text-emerald-400"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 p-6 rounded-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-cyan-300">
                  {i === 1 ? "Portfolio Site" : "E-commerce UI"}
                </h3>
                <p className="text-gray-300 mt-2">
                  {i === 1
                    ? "My own portfolio built with React + Tailwind + Framer Motion."
                    : "Responsive, fast-loading UI using fake store API & Tailwind."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        className="py-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-cyan-400">
          Let’s Build Something Together
        </h2>
        <p className="text-gray-400 mt-2">
          Reach out if you want to collaborate or hire me.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 bg-emerald-400 hover:bg-emerald-500 text-black px-6 py-3 rounded-xl transition-all"
        >
          Contact Me
        </a>
      </motion.section>
    </div>
  );
}
