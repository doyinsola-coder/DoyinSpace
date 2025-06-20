import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
export default function Contact() {
  const whatsappNumber = "2349035667678"; // replace with your real WhatsApp number (no +)

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Let’s Connect
      </motion.h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Reach out via socials or send a message directly to my WhatsApp.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-8 text-2xl">
        <a
          href="https://github.com/doyinsola-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/DoyinSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/Dev_Mubeen"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter />
        </a>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20DoyinSpace!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg transition"
      >
        <FaWhatsapp /> Send Message
      </a>
    </section>
  );
}
