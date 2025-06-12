import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

export default function DoyinSpaceLogo() {
  return (
    <div className="flex flex-col items-center justify-center text-white bg-gray-900 min-h-screen space-y-4">
      {/* React Icon with spin animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="text-blue-400 text-6xl"
      >
        <FaReact />
      </motion.div>

      {/* Brand Name with fade-in animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold tracking-wide"
      >
        <span className="text-gray-100">Doy</span>
        <span className="text-blue-400">in</span>
        <span className="text-gray-100">Space</span>
      </motion.h1>

      {/* Code Brackets with pulse animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-3xl text-gray-300"
      >
        {"<"}{"{"}{"}"}{">"}
      </motion.div>
    </div>
  );
}
