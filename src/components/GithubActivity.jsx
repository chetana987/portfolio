import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiCode } from "react-icons/fi";

const repos = [
  {
    name: "ChatHub-",
    desc: "Real-time chat application with Socket.IO",
    stars: 0,
    lang: "JavaScript",
    url: "https://github.com/chetana987/ChatHub-",
  },
  {
    name: "Smart-Queue-Management",
    desc: "MERN-based hospital queue system",
    stars: 0,
    lang: "JavaScript",
    url: "https://github.com/chetana987",
  },
  {
    name: "Blood-Group-Detection",
    desc: "Fingerprint-based blood group prediction",
    stars: 0,
    lang: "Python",
    url: "https://github.com/chetana987",
  },
];

export default function GithubActivity() {
  return (
    <section id="GitHub" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        GitHub Activity
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto"
      >
        Open source contributions and repositories
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-white/5 border border-white/10 p-5 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl bg-purple-500/10">
            <FiCode className="text-purple-400" size={22} />
          </div>
          <div>
            <p className="text-2xl font-bold">10+</p>
            <p className="text-sm text-gray-400">Repositories</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-white/5 border border-white/10 p-5 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl bg-green-500/10">
            <FiGitBranch className="text-green-400" size={22} />
          </div>
          <div>
            <p className="text-2xl font-bold">Active</p>
            <p className="text-sm text-gray-400">Contributions</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl bg-white/5 border border-white/10 p-5 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl bg-yellow-500/10">
            <FiStar className="text-yellow-400" size={22} />
          </div>
          <div>
            <p className="text-2xl font-bold">3+</p>
            <p className="text-sm text-gray-400">Projects</p>
          </div>
        </motion.div>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiGithub className="text-gray-400" />
            <span className="text-sm font-medium">Top Repositories</span>
          </div>
          <a
            href="https://github.com/chetana987"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-purple-400 hover:text-purple-300 transition"
          >
            View all →
          </a>
        </div>
        <div className="divide-y divide-white/5">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 hover:bg-white/5 transition gap-3"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-200 truncate">{repo.name}</p>
                <p className="text-xs text-gray-500 mt-0.5 truncate">{repo.desc}</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500 shrink-0">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                  {repo.lang}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
