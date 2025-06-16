import { motion } from 'framer-motion';
import React from 'react';
const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek and modern developer portfolio built with React and Tailwind CSS.",
    image: "/DoyinSpacePortfolio.png",
    demoLink: "https://doyin-space.vercel.app/",
    githubLink: "https://github.com/yourusername/doyinspace"
  },
  {
    title: "Online Restaurant",
    description: "A sleek restaurant app as a demo , React, and Tailwind.",
    image: "/EatOut.png",
    demoLink: "https://eat-out-doyinsola-coders-projects.vercel.app/",
    githubLink: "https://vercel.com/doyinsola-coders-projects/eat-out"
  },
  {
    title: "Todo App",
    description: "A simple yet powerful todo manager with filtering and localStorage.",
    image: "todo.png",
    demoLink: "https://your-todo-app.com",
    githubLink: "https://github.com/yourusername/todo-app"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:underline text-sm"
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
