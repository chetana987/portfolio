import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import HeroModel from "./HeroModel";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center px-6 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="absolute -z-10 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-purple-600/20 blur-[80px] md:blur-[120px]" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 font-mono text-sm mb-4"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-white">Chetana</span>{" "}
            <span className="text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              Mahajan
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
              Java Backend Developer
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-300 leading-relaxed max-w-lg"
          >
            Computer Engineering Graduate passionate about Java Backend Development.
            Experienced in Spring Boot, REST APIs, MySQL, Redis, and React.
            Building scalable web applications and actively seeking Software Developer opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition shadow-lg shadow-purple-600/30"
            >
              <FiDownload />
              Resume
            </a>

            <a
              href="https://github.com/chetana987"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/chetana-mahajan"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition"
            >
              <FiLinkedin size={20} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 text-sm text-gray-500"
          >
            Pune, Maharashtra, India
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="hidden md:block h-[500px]"
        >
          <HeroModel />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500 text-xs">
          <span>Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-gray-500 flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-purple-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
