import { motion } from "framer-motion";

const codeLines = [
  { text: "public class Developer {", color: "text-gray-300", indent: 0 },
  { text: "", color: "", indent: 0 },
  { text: "    private String name = \"Chetana Mahajan\";", color: "text-orange-300", indent: 1 },
  { text: "    private String role = \"Java Backend Dev\";", color: "text-orange-300", indent: 1 },
  { text: "", color: "", indent: 0 },
  { text: "    public BackendStack getSkills() {", color: "text-gray-300", indent: 1 },
  { text: "        return new BackendStack(", color: "text-gray-300", indent: 2 },
  { text: "            \"Spring Boot\", \"Redis\",", color: "text-green-400", indent: 3 },
  { text: "            \"MySQL\", \"Docker\"", color: "text-green-400", indent: 3 },
  { text: "        );", color: "text-gray-300", indent: 2 },
  { text: "    }", color: "text-gray-300", indent: 1 },
  { text: "", color: "", indent: 0 },
  { text: "    public String getStatus() {", color: "text-gray-300", indent: 1 },
  { text: "        return \"Open to Work\";", color: "text-yellow-300", indent: 2 },
  { text: "    }", color: "text-gray-300", indent: 1 },
  { text: "}", color: "text-gray-300", indent: 0 },
];

const lineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.3 },
  }),
};

export default function CodeTerminal() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-lg rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-600/10"
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-black/60 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-gray-500 font-mono">Developer.java</span>
        </div>

        <div className="bg-black/80 p-4 md:p-6 font-mono text-sm leading-relaxed overflow-x-auto">
          <div className="flex">
            <div className="text-gray-600 text-right pr-4 select-none space-y-[2px]">
              {codeLines.map((_, i) => (
                <div key={i} className="leading-[22px]">{i + 1}</div>
              ))}
            </div>
            <div className="space-y-[2px]">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className={`leading-[22px] whitespace-pre ${line.color || "text-transparent"}`}
                >
                  {line.text || "\u00A0"}
                </motion.div>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: codeLines.length * 0.08 }}
                className="inline-block w-2 h-4 bg-purple-400 ml-1"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
