import { motion } from "framer-motion";
import { FiServer, FiDatabase, FiLayout, FiTool, FiCloud } from "react-icons/fi";

const skillGroups = [
  {
    title: "Backend",
    icon: FiServer,
    items: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Hibernate/JPA"],
  },
  {
    title: "Database",
    icon: FiDatabase,
    items: ["MySQL", "Redis"],
  },
  {
    title: "Frontend",
    icon: FiLayout,
    items: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools",
    icon: FiTool,
    items: ["Git", "GitHub", "Docker", "Maven", "Postman"],
  },
  {
    title: "Cloud & DevOps",
    icon: FiCloud,
    items: ["Docker", "CI/CD (GitHub Actions)", "AWS"],
  },
];

export default function Skills() {
  return (
    <section id="Skills" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Skills & Technologies
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto"
      >
        Technologies I work with to build scalable backend systems
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-purple-500/30 transition group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-200">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-black/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
