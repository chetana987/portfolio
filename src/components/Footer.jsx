import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiMapPin } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 mt-24">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-600 border border-white/10 p-3 rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-white" />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-sm text-gray-400"
      >
        <div className="text-center md:text-left space-y-2">
          <p className="text-gray-200 font-medium">
            © {new Date().getFullYear()} Chetana Mahajan
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FiMapPin className="opacity-70" />
            Pune, Maharashtra, India
          </p>
        </div>

        <div className="text-center">
          <p>
            Built with <span className="text-gray-200">React</span> &{" "}
            <span className="text-gray-200">Tailwind CSS</span>
          </p>
          <p className="text-xs text-gray-600 mt-1">Java Backend Developer</p>
        </div>

        <div className="flex justify-center md:justify-end gap-6">
          <a href="https://github.com/chetana987" target="_blank" className="hover:text-white transition" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/chetana-mahajan" target="_blank" className="hover:text-white transition" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:mahajanchetana2004@gmail.com" className="hover:text-white transition" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
