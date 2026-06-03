import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiCode, FiTrendingUp } from "react-icons/fi";

const journeyData = [
  {
    title: "Secondary School Certificate (SSC)",
    place: "Shroff High School, Nandurbar",
    description: "Completed SSC with a strong academic foundation. Actively participated in volleyball and school activities, developing discipline, teamwork, and time-management skills.",
    icon: FiBookOpen,
    align: "left",
  },
  {
    title: "Diploma in Engineering",
    place: "Government Polytechnic, Nandurbar · 2020 – 2023",
    description: "Built strong foundations in programming, problem-solving, databases, and core computer fundamentals. Developed a structured approach to learning and implementation.",
    icon: FiAward,
    align: "right",
  },
  {
    title: "Bachelor of Engineering (Computer Engineering)",
    place: "R. C. Patel Institute of Technology · 2023 – Present",
    description: "Strengthened understanding of data structures, databases, operating systems, and web technologies. Specializing in Java backend development with Spring Boot.",
    icon: FiCode,
    align: "left",
  },
  {
    title: "Current Focus & Growth",
    place: "",
    description: "Building full-stack projects with Spring Boot and React. Solving DSA problems. Exploring cloud deployment and DevOps practices.",
    icon: FiTrendingUp,
    align: "right",
  },
];

export default function Journey() {
  return (
    <section id="Journey" className="py-16 md:py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        My Journey
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto"
      >
        From school to software development
      </motion.p>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2" />

        <div className="space-y-10 md:space-y-16">
          {journeyData.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = item.align === "left";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center`}
              >
                <div className="w-full md:w-5/12">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-purple-500/30 transition">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="md:hidden w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-white shrink-0">
                        <Icon size={14} />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    {item.place && (
                      <p className="text-sm text-gray-400 mt-1">{item.place}</p>
                    )}
                    <p className="text-gray-300 mt-3 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-black border border-white/20 items-center justify-center text-white">
                  <Icon size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
