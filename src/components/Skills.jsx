// components/Skills.jsx
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiTool, FiUsers } from "react-icons/fi";

const skills = [
  {
    title: "Languages",
    icon: <FiCode />,
    items: ["Java", "JavaScript", "Python", "C", "C++", "SQL"],
  },
  {
    title: "Full-stack",
    icon: <FiLayers />,
    items: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "JWT",
      "CI/CD",
      // "REST APIs",
    ],
  },
   {
    title: "Tools",
    icon: <FiTool />,
    items: ["Git", "GitHub", "Android", "Figma", "VS Code", "Copilot"],
   },
  // {
  //   title: "Soft skills",
  //   icon: <FiUsers />,
  //   items: [
  //     "Communication",
  //     "Collaboration",
  //     "Teamwork",
  //     "Problem Solving",
  //     "Leadership",
  //     "Time Management",
  //   ],
  // },
];

export default function Skills() {
  return (
    <section id="Skillset" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Skillset
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {skills.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="
              w-full max-w-md
              mx-auto
              rounded-2xl
              bg-white/5
              border border-white/10
              p-6
            "
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5 text-gray-200">
              <span className="text-lg">{group.icon}</span>
              <h3 className="text-lg font-semibold">{group.title}</h3>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="
                    px-4 py-1.5
                    rounded-full
                    text-sm
                    text-gray-300
                    border border-white/20
                    bg-black/30
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
