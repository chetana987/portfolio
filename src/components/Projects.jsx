// components/Projects.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Smart Queue Management System",
      description:
        "Automates hospital registration, token allocation, and real-time queue tracking using a MERN-based architecture with JWT authentication.",
      tech: ["React", "Node", "MongoDB", "JWT"],
      image: "/projects/queue.png",
      github: "https://github.com/chetana987",
      details:
        "Designed to reduce patient waiting time by automating queue handling and role-based access for hospital staff.",
    },
    {
      id: 2,
      title: "Blood Group Detection using Fingerprint Images",
      description:
        "Deep learning system that predicts blood groups from fingerprint images using multiple CNN architectures.",
      tech: [
        "Python",
        "OpenCV",
        "Machine Learning",
        "CNN",
        "ResNet",
        "VGG",
      ],
      image: "/projects/blood.png",
      github: "https://github.com/chetana987",
      details:
        "Compared multiple deep learning models and optimized hyperparameters to achieve higher prediction accuracy.",
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      description:
        "A real-time chat platform with authentication, persistent chat history, and responsive UI using Socket.IO.",
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "Socket.IO",
        "MongoDB",
      ],
      image: "/projects/chathub.png",
      github: "https://github.com/chetana987/ChatHub-",
      details:
        "Focused on real-time communication, reusable components, API integration, and mobile-friendly design.",
    },
  ];

  return (
    <section id="WhatIBuilt" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        What I Built
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.8 }}
            onClick={() => setActiveProject(project)}
            className="
              cursor-pointer
              rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              overflow-hidden
              hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400">
                {project.tech.map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-[#0a0a0a]
                border border-white/10
                rounded-2xl
                max-w-lg w-full
                p-6
              "
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                {activeProject.title}
              </h3>

              <p className="text-gray-300 text-sm mb-6">
                {activeProject.details}
              </p>

              <a
                href={activeProject.github}
                target="_blank"
                className="
                  inline-flex items-center gap-2
                  px-5 py-2
                  rounded-lg
                  border border-white/20
                  hover:bg-white hover:text-black
                  transition
                "
              >
                <FiGithub />
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
