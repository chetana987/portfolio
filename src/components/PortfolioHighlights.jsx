import { motion } from "framer-motion";
import { FiCode, FiLayers, FiTrendingUp } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Problem-Solving Focused",
    text: "I enjoy breaking down complex problems into clean, efficient solutions using logical thinking and structured approaches.",
  },
  {
    icon: FiLayers,
    title: "Project-Driven Learning",
    text: "I learn by building real-world projects, applying concepts like authentication, APIs, state management, and performance optimization.",
  },
  {
    icon: FiTrendingUp,
    title: "Continuous Growth",
    text: "I consistently improve my skills through hands-on development, code refactoring, and learning modern tools and best practices.",
  },
];

export default function PortfolioHighlights() {
  return (
    <section
      id="Showcase"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Portfolio Highlights
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-2xl
                p-6
              "
            >
              <Icon className="text-xl mb-4 text-gray-200" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
