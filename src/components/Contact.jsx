// components/Contact.jsx
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_yg6btpp",    // 🔴 my service id 
        "template_tqzgei6",   // 🔴 my template id
        formRef.current,
        "D1Elzazwr9IL08bPQ"     // 🔴 my public kry of emailjs
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="Connect"
      className="py-24 px-6 flex flex-col items-center text-center max-w-4xl mx-auto"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Connect
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="space-y-3 text-gray-400 mb-10"
      >
        <p className="flex items-center justify-center gap-3">
          <FiMail className="opacity-70" />
          <span>mahajanchetana2004@gmail.com</span>
        </p>

        <p className="flex items-center justify-center gap-3">
          <FiPhone className="opacity-70" />
          <span>+91 7888081397</span>
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-8 mb-14 text-gray-300"
      >
        <a
          href="https://github.com/chetana987"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FiGithub />
          <span className="text-sm">GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/chetana-mahajan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FiLinkedin />
          <span className="text-sm">LinkedIn</span>
        </a>

        <a
          href="https://leetcode.com/u/Chetana788"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <SiLeetcode />
          <span className="text-sm">LeetCode</span>
        </a>

        <a
          href="https://www.codechef.com/users/chetana_m12"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <SiCodechef />
          <span className="text-sm">CodeChef</span>
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="w-full bg-[#14042d] max-w-lg p-6 rounded-xl space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-black/40 text-white outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-black/40 text-white outline-none"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-3 rounded-lg bg-black/40 text-white outline-none resize-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3 rounded-lg
            bg-purple-500 hover:bg-purple-600
            transition font-medium
            disabled:opacity-60
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* Success Message */}
      {success && (
        <p className="mt-4 text-green-400 text-sm">
          Message sent successfully. I’ll get back to you soon.
        </p>
      )}
    </section>
  );
}
