import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const articles = [
  {
    title: "Redis Caching in Spring Boot",
    desc: "Learn how to integrate Redis for caching in Spring Boot applications to boost API performance and reduce database load.",
    tags: ["Spring Boot", "Redis", "Performance"],
    readTime: "5 min read",
  },
  {
    title: "JWT Authentication Explained",
    desc: "A deep dive into implementing stateless JWT authentication with Spring Security for REST APIs.",
    tags: ["Spring Security", "JWT", "Authentication"],
    readTime: "7 min read",
  },
  {
    title: "How I Built a URL Shortener",
    desc: "Step-by-step walkthrough of building a custom URL shortener with Spring Boot, Redis caching, and analytics dashboard.",
    tags: ["Spring Boot", "Redis", "Project"],
    readTime: "6 min read",
  },
  {
    title: "Dockerizing a Spring Boot Application",
    desc: "A practical guide to containerizing Spring Boot applications with Docker for consistent and scalable deployments.",
    tags: ["Docker", "Spring Boot", "DevOps"],
    readTime: "4 min read",
  },
];

export default function Blog() {
  return (
    <section id="Blog" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Blog
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto"
      >
        Articles about backend development, Spring Boot, and DevOps
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-purple-500/30 transition group cursor-pointer"
          >
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <span className="font-mono">{article.readTime}</span>
            </div>
            <h3 className="font-semibold text-gray-200 mb-2 group-hover:text-purple-300 transition">
              {article.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {article.desc}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <FiArrowRight className="text-gray-500 group-hover:text-purple-400 transition" size={16} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
