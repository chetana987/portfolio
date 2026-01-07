import { motion } from "framer-motion";

export default function TerminalHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="
        bg-black/80
        border border-white/10
        rounded-xl
        p-5
        text-sm
        font-mono
        text-gray-200
        max-w-md
      "
    >
      <p className="text-green-400">$ whoami</p>
      <p className="ml-2">Chetana Mahajan</p>

      <p className="text-green-400 mt-3">$ role</p>
      <p className="ml-2">Software Developer</p>

      <p className="text-green-400 mt-3">$ skills</p>
      <p className="ml-2">
        React · JavaScript · Java · Full-Stack
      </p>

      <p className="text-green-400 mt-3">$ status</p>
      <p className="ml-2 text-emerald-400">Open to Work</p>
    </motion.div>
  );
}
