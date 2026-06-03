import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Inventra",
    tagline: "AI-Powered Inventory Management System",
    problem: "Businesses struggle with inventory forecasting, leading to overstocking or stockouts. Manual tracking is error-prone and inefficient.",
    features: [
      "AI-based demand prediction using historical data trends",
      "Real-time inventory tracking with Redis caching",
      "JWT-authenticated REST APIs with role-based access",
      "Docker containerized deployment",
    ],
    tech: ["Spring Boot", "MySQL", "Redis", "Docker", "JWT", "AI/ML"],
    github: "https://github.com/chetana987",
    demo: null,
    architecture: {
      label: "System Architecture",
      layers: [
        { name: "React UI", color: "bg-blue-500/20 border-blue-500/40 text-blue-300" },
        { name: "Spring Boot API", color: "bg-green-500/20 border-green-500/40 text-green-300" },
        { name: "Redis Cache", color: "bg-red-500/20 border-red-500/40 text-red-300" },
        { name: "MySQL Database", color: "bg-orange-500/20 border-orange-500/40 text-orange-300" },
      ],
    },
  },
  {
    id: 2,
    title: "URL Shortener",
    tagline: "Custom Short URLs with Analytics",
    problem: "Long URLs are hard to share and track. Existing solutions lack analytics and custom alias support.",
    features: [
      "Custom short URL alias generation",
      "Redis caching for fast URL resolution",
      "Analytics dashboard with click tracking",
      "RESTful API design with Spring Boot",
    ],
    tech: ["Spring Boot", "Redis", "MySQL", "Docker", "REST APIs"],
    github: "https://github.com/chetana987/URL-Shortener",
    demo: null,
    architecture: {
      label: "Request Flow",
      layers: [
        { name: "Client / Browser", color: "bg-blue-500/20 border-blue-500/40 text-blue-300" },
        { name: "Spring Boot Controller", color: "bg-green-500/20 border-green-500/40 text-green-300" },
        { name: "Redis Cache (Lookup)", color: "bg-red-500/20 border-red-500/40 text-red-300" },
        { name: "MySQL (Persist)", color: "bg-orange-500/20 border-orange-500/40 text-orange-300" },
      ],
    },
  },
  {
    id: 3,
    title: "Assessment Platform",
    tagline: "Online Test Engine with Timer-Based Exams",
    problem: "Educational institutions need a reliable platform for conducting timed online assessments with instant result calculation.",
    features: [
      "Timer-based exams with auto-submit on timeout",
      "Instant result calculation and scoring",
      "RESTful API design for question bank management",
      "Role-based access for students and administrators",
    ],
    tech: ["Spring Boot", "MySQL", "JWT", "REST APIs", "React"],
    github: "https://github.com/chetana987/Online-Assessment-Platform",
    demo: null,
    architecture: {
      label: "System Flow",
      layers: [
        { name: "React Frontend", color: "bg-blue-500/20 border-blue-500/40 text-blue-300" },
        { name: "Spring Boot API Gateway", color: "bg-green-500/20 border-green-500/40 text-green-300" },
        { name: "JWT Auth Filter", color: "bg-purple-500/20 border-purple-500/40 text-purple-300" },
        { name: "MySQL Database", color: "bg-orange-500/20 border-orange-500/40 text-orange-300" },
      ],
    },
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="Projects" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto"
      >
        Full-stack applications built with Spring Boot and modern technologies
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
            onClick={() => setActiveProject(project)}
            className="cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/30 transition group"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-xs text-purple-400 font-mono">Project {project.id}</span>
              </div>
              <h3 className="font-bold text-xl mb-1 group-hover:text-purple-300 transition">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{project.tagline}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 rounded text-xs text-gray-500">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5 text-xs text-gray-500">
                {project.features.slice(0, 2).map((f) => (
                  <span key={f} className="flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{f.length > 35 ? f.slice(0, 35) + "..." : f}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                  <p className="text-purple-400 text-sm mt-1">{activeProject.tagline}</p>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 rounded-lg hover:bg-white/10 transition text-gray-400 hover:text-white"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Problem Statement</h4>
                  <p className="text-gray-300">{activeProject.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Features</h4>
                  <ul className="space-y-2">
                    {activeProject.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    {activeProject.architecture.label}
                  </h4>
                  <div className="flex flex-col items-center gap-1">
                    {activeProject.architecture.layers.map((layer, i) => (
                      <div key={layer.name} className="flex flex-col items-center">
                        <div className={`px-6 py-3 rounded-lg border text-sm font-medium ${layer.color}`}>
                          {layer.name}
                        </div>
                        {i < activeProject.architecture.layers.length - 1 && (
                          <div className="flex flex-col items-center py-1">
                            <span className="text-gray-500 text-xs">↓</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white hover:text-black transition text-sm"
                  >
                    <FiGithub />
                    View on GitHub
                  </a>
                  {activeProject.demo && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 transition text-sm"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
