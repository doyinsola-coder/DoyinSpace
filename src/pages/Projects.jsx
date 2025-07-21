import { motion } from 'framer-motion';
import React from 'react';

const projects = [
  {
    title: "FreshFinds",
    description: "A sleek and modern e-commerce web app built with React and Tailwind CSS.",
    image: "https://res.cloudinary.com/decgjhtlb/image/upload/v1753095124/Favicon_hs3xar.png",
    demoLink: "https://github.com/doyinsola-coder/FreshFinds.git",
    githubLink: "https://github.com/doyinsola-coder/FreshFinds.git"
  },
  {
    title: "Online Restaurant",
    description: "A sleek restaurant app as a demo , React, and Tailwind.",
    image: "https://res.cloudinary.com/decgjhtlb/image/upload/v1753095124/EatOut_rhvbay.png",
    demoLink: "https://eat-out-doyinsola-coders-projects.vercel.app/",
    githubLink: "https://vercel.com/doyinsola-coders-projects/eat-out"
  },
  {
    title: "An Islamic learning and quiz platform",
    description: "A simple yet powerful islamic seerah and quiz web app.",
    image: "https://res.cloudinary.com/decgjhtlb/image/upload/v1753095124/Echoes_zp1jgc.png",
    demoLink: "https://echoes-of-madinah.vercel.app/",
    githubLink: "https://github.com/doyinsola-coder/Echoes-Of-Madinah.git"
  },
  {
    title: "Totes N More",
    description:"A modern appreciation platform for Totes N More.",
    image: "https://res.cloudinary.com/decgjhtlb/image/upload/v1753095124/TotesNMore_htyiu0.png",
    demoLink:"https://totes-n-more.vercel.app/",
    githubLink: "https://github.com/doyinsola-coder/TotesNMore.git"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00BFFF]">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-[#00FFE0] transition-all duration-300 hover:shadow-cyan-500/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover border-b border-[#00BFFF]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#00FFE0]">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00BFFF] hover:underline hover:text-[#00FFE0] transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00FFE0] hover:underline transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
