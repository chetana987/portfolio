import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiAward,
  FiBriefcase,
  FiCode,
  FiTrendingUp,
} from "react-icons/fi";

const journeyData = [
  {
    title: "Secondary School Certificate (SSC)",
    place: "Shroff High School, Nandurbar",
    description:
      "Completed SSC with a strong academic foundation. Actively participated in volleyball and school activities, developing discipline, teamwork, and time-management skills.",
    icon: FiBookOpen,
    align: "left",
  },
  {
    title: "Diploma in Engineering",
    place: "Government Polytechnic, Nandurbar · 2020 – 2023",
    description:
      "Built strong foundations in programming, problem-solving, databases, and core computer fundamentals. Developed a structured approach to learning and implementation.",
    icon: FiAward,
    align: "right",
  },
  {
    title: "Software Intern",
    place: "ProWorld Technology · Jun 2022 – Jul 2022",
    description:
      "Gained hands-on industry exposure by applying core programming concepts. Worked on Java-based tasks, refactored code, and learned real-world software development practices.",
    icon: FiBriefcase,
    align: "left",
  },
  {
    title: "Bachelor of Engineering (Computer Engineering)",
    place: "R. C. Patel Institute of Technology · 2023 – Present",
    description:
      "Strengthened understanding of data structures, databases, operating systems, and web technologies, bridging theory with practical software development.",
    icon: FiCode,
    align: "right",
  },
  {
    title: "Frontend Intern",
    place: "Celebal Technologies · Jun 2025 – Aug 2025",
    description:
      "Focused on frontend development using React.js and JavaScript. Built reusable components, integrated APIs, and worked in an Agile environment on real projects.",
    icon: FiBriefcase,
    align: "left",
  },
  {
    title: "Current Focus & Growth",
    place: "",
    description:
      "Currently strengthening full-stack development skills, building impactful projects, and improving problem-solving through continuous learning.",
    icon: FiTrendingUp,
    align: "right",
  },
];

export default function Journey() {
  return (
    <section id="Journey" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-20"
      >
        Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2" />

        <div className="space-y-20">
          {journeyData.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = item.align === "left";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={`relative flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.place && (
                      <p className="text-sm text-gray-400 mt-1">
                        {item.place}
                      </p>
                    )}
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className="
                    absolute left-1/2 -translate-x-1/2
                    top-6
                    w-10 h-10
                    rounded-full
                    bg-black
                    border border-white/20
                    flex items-center justify-center
                    text-white
                  "
                >
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
