import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiAward, FiTarget } from "react-icons/fi";

const achievements = [
  {
    icon: FiCode,
    stat: "150+",
    label: "DSA Problems Solved",
    desc: "Active on LeetCode and CodeChef",
  },
  {
    icon: FiDatabase,
    stat: "3+",
    label: "Full-Stack Projects",
    desc: "Built with Spring Boot & React",
  },
  {
    icon: FiAward,
    stat: "Java",
    label: "Backend Specialization",
    desc: "Spring Boot, REST APIs, Redis, MySQL",
  },
  {
    icon: FiTarget,
    stat: "Hackathon",
    label: "Participant",
    desc: "Collaborated on time-bound problem solving",
  },
];

export default function Achievements() {
  return (
    <section id="Achievements" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
      >
        Achievements
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center hover:border-purple-500/30 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="text-purple-400" size={22} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{item.stat}</p>
              <p className="text-sm font-medium text-gray-200 mb-1">{item.label}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
