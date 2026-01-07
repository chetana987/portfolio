import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="Experience"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Professional Experience
      </motion.h2>

      {/* Experience 1 */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="mb-14"
      >
        <h3 className="text-xl font-semibold">
          Celebal Technologies
          <span className="text-purple-400"> — Frontend Intern</span>
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          Jun 2025 – Aug 2025 · Remote
        </p>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Built optimized React components improving load time.</li>
          <li>Integrated REST APIs and handled async operations.</li>
          <li>Worked in Agile team using Git workflows and CI/CD.</li>
        </ul>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-14" />

      {/* Experience 2 */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <h3 className="text-xl font-semibold">
          ProWorld Technology
          <span className="text-purple-400"> — Software Intern</span>
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          Jun 2022 – Jul 2022 · Nashik, India
        </p>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Developed modular Java utilities reducing manual work by 25%.</li>
          <li>Refactored 400+ lines of code for performance.</li>
          <li>Participated in Agile sprints, testing, and deployment.</li>
        </ul>
      </motion.div>
    </section>
  );
}
