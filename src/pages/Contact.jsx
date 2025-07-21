import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  const whatsappNumber = "2349035667678";

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-20 px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4 text-[#00BFFF]"
      >
        Let’s Connect
      </motion.h2>

      <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm md:text-base">
        Reach out via social media or drop a message directly on WhatsApp.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-10 text-3xl">
        <a
          href="https://github.com/doyinsola-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#00FFE0] transition duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/DoyinSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#00FFE0] transition duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/Dev_Mubeen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#00FFE0] transition duration-300 hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20DoyinSpace!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#00FFE0] text-black font-semibold shadow-lg hover:bg-[#00BFFF] hover:text-white transition duration-300 hover:scale-105"
      >
        <FaWhatsapp className="text-xl" /> Send Message
      </a>
    </section>
  );
}
