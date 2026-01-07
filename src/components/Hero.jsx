// components/Hero.jsx
import { motion } from "framer-motion";
import { FiLinkedin, FiFileText } from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="Identity"
      className="
        relative min-h-screen
        flex items-center
        pt-24 md:pt-28
        px-6
        max-w-6xl mx-auto
        overflow-hidden
      "
    >
      {/* 🔹 FULL-HEIGHT LEFT LINE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="
          absolute left-4 md:left-8 top-0
          h-full w-[2px]
          bg-gradient-to-b
          from-transparent
          via-purple-500/70
          to-transparent
        "
      />

      {/* 🔹 MOVING GLOW DOT */}
      <motion.span
        animate={{ y: ["-10%", "110%"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute left-[14px] md:left-[30px]
          w-2.5 h-2.5
          rounded-full
          bg-purple-500
          shadow-[0_0_20px_rgba(168,85,247,0.9)]
        "
      />

      {/* CONTENT */}
      <div className="relative w-full max-w-3xl ml-6 md:ml-12 text-center md:text-left">
        {/* Background glow */}
        <div className="absolute -z-10 w-[420px] h-[420px] bg-purple-600/20 blur-[140px]" />

        {/* NAME */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              Chetana
            </span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-200">
            Mahajan
          </h2>
        </motion.div>

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl font-medium text-gray-200"
        >
          Software Developer
        </motion.p>

        {/* STATUS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="
            inline-block mt-5
            px-4 py-1.5
            rounded-full
            text-sm text-green-400
            border border-green-400/40
            bg-green-400/10
          "
        >
          Open to Work
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-300 leading-relaxed max-w-xl"
        >
          Focused on building scalable, user-centric web applications using
          React and modern JavaScript. Experienced in translating real-world
          problems into clean, maintainable solutions.
        </motion.p>

        {/* LOCATION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-3 text-sm text-gray-400"
        >
          Nandurbar, Maharashtra · India
        </motion.p>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center md:justify-start gap-6 mt-8 text-gray-300"
        >
          <a
            href="https://linkedin.com/in/chetana-mahajan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FiLinkedin size={20} />
          </a>

          <a
            href="https://leetcode.com/u/Chetana788"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <SiLeetcode size={20} />
          </a>

          <a
            href="https://www.codechef.com/users/chetana_m12"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <SiCodechef size={20} />
          </a>
        </motion.div>

        {/* RESUME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mt-10"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-lg
              border border-white/20
              text-sm font-medium text-gray-200
              hover:bg-white hover:text-black
              transition
            "
          >
            <FiFileText />
            View Resume
          </a>
        </motion.div>

        {/* MICRO CTA */}
        <div className="mt-8 text-gray-400 text-sm">
          ↓ Scroll to see my work
        </div>
      </div>
    </section>
  );
}
