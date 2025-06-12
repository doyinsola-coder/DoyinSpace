import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React from "react";

// 👇 Editable Nav Links
const links = [
    { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo with hover animation */}
        <motion.div
          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-blue-400 text-xl font-bold cursor-pointer"
        >
          <FaReact />
          <span className="text-white">Doy</span>
          <span className="text-blue-400">in</span>
          <span className="text-white">Space</span>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col space-y-4 px-6 pb-6 bg-gray-800 text-sm"
        >
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block py-2 text-gray-300 hover:text-blue-400"
              >
                {label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
