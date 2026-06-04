import { motion } from "framer-motion";
import { FiCheckCircle, FiBriefcase } from "react-icons/fi";

const internships = [
  {
    company: "Celebal Technologies",
    role: "Frontend Intern",
    period: "Jun 2025 – Aug 2025 · Remote",
    items: [
      "Built optimized React components improving load time.",
      "Integrated REST APIs and handled asynchronous operations.",
      "Worked in an Agile team using Git workflows and CI/CD.",
    ],
  },
  {
    company: "ProWorld Technology",
    role: "Software Intern",
    period: "Jun 2022 – Jul 2022 · Nashik, India",
    items: [
      "Developed modular Java utilities, reducing manual work by 25%.",
      "Refactored 400+ lines of code for performance improvements.",
      "Participated in Agile sprints, testing, and deployment.",
    ],
  },
];

const experiences = [
  {
    title: "REST API Development",
    items: [
      "Designed and developed RESTful APIs using Spring Boot with proper request validation and error handling.",
      "Implemented CRUD operations with Hibernate/JPA and MySQL for persistent data storage.",
      "Documented APIs with clear endpoint structures following REST conventions.",
    ],
  },
  {
    title: "Authentication & Security",
    items: [
      "Implemented JWT-based authentication with Spring Security for stateless, secure API access.",
      "Designed role-based access control (RBAC) for multi-user systems with different permission levels.",
      "Applied security best practices including password hashing and token expiration.",
    ],
  },
  {
    title: "Performance Optimization",
    items: [
      "Integrated Redis caching to reduce database load and improve API response times by up to 60%.",
      "Optimized MySQL queries with proper indexing and query optimization techniques.",
      "Used connection pooling and batch processing for efficient data operations.",
    ],
  },
  {
    title: "DevOps & Deployment",
    items: [
      "Containerized Spring Boot applications using Docker for consistent deployment across environments.",
      "Set up CI/CD pipelines with GitHub Actions for automated build, test, and deployment workflows.",
      "Managed application configuration using environment variables and profile-specific properties.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="Experience" className="py-16 md:py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto"
      >
        Professional internships and hands-on development experience
      </motion.p>

      {/* Internships */}
      <div className="space-y-8 mb-16">
        {internships.map((internship, idx) => (
          <motion.div
            key={internship.company}
            initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-purple-500/30 transition"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 shrink-0">
                <FiBriefcase className="text-purple-400" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">
                  {internship.company}
                  <span className="text-purple-400"> — {internship.role}</span>
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">{internship.period}</p>
                <ul className="mt-4 space-y-2">
                  {internship.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                      <FiCheckCircle className="text-purple-400 mt-0.5 shrink-0" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project-based experience */}
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl font-semibold text-center text-gray-300 mb-8"
        >
          Core Competencies
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <h4 className="text-lg font-semibold text-purple-300 mb-4">
                {exp.title}
              </h4>
              <ul className="space-y-3">
                {exp.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <FiCheckCircle className="text-purple-400 mt-0.5 shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
