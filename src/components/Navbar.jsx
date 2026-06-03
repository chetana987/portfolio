import { useEffect, useState } from "react";

const navItems = [
  { id: "Hero", label: "Home" },
  { id: "Skills", label: "Skills" },
  { id: "Projects", label: "Projects" },
  { id: "Experience", label: "Experience" },
  { id: "Achievements", label: "Achievements" },
  { id: "GitHub", label: "GitHub" },
  { id: "Blog", label: "Blog" },
  { id: "Connect", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
      <div className="flex items-center justify-between bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2">
        <button
          onClick={() => scrollToSection("Hero")}
          className="text-sm font-medium text-purple-400 px-3"
        >
          CM
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 rounded-full text-xs transition ${
                activeSection === item.id
                  ? "bg-white text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-300"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="mt-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-wrap gap-1.5 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 rounded-full text-xs transition ${
                activeSection === item.id
                  ? "bg-white text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
