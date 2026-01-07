import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 mt-24">
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="
          absolute -top-6 left-1/2 -translate-x-1/2
          bg-[#14042d] border border-white/10
          p-3 rounded-full
          hover:shadow-[0_0_20px_rgba(0,0,0,0.9)]
          transition
        "
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-gray-300" />
      </button>

      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          max-w-6xl mx-auto
          px-6 py-12
          grid grid-cols-1 md:grid-cols-3
          gap-8 items-center
          text-sm text-gray-400
        "
      >
        {/* Left: Name + Location */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-gray-200 font-medium">
            © {new Date().getFullYear()} Chetana Mahajan. All rights reserved.
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FiMapPin className="opacity-70" />
            Nandurbar, Maharashtra · Open to Opportunities
          </p>
        </div>

        {/* Center: Tech */}
        <div className="text-center">
          <p>
            Designed & Built with{" "}
            <span className="text-gray-200">React</span> &{" "}
            <span className="text-gray-200">Tailwind CSS</span>
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-6">
          <a
            href="https://github.com/chetana987"
            target="_blank"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/chetana-mahajan"
            target="_blank"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>

          <a
            href="mailto:mahajanchetana2004@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
