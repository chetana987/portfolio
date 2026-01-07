// components/Navbar.jsx
import { useEffect, useState } from "react";

const navItems = [
  { id: "Identity", label: "Identity" },
  { id: "Journey", label: "Journey" },
  { id: "Skillset", label: "Skillset" },
  { id: "WhatIBuilt", label: "What I Built" },
  { id: "Experience", label: "Experience" },
  { id: "Connect", label: "Connect" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Identity");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // This controls WHEN the section is considered active
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-1
          bg-black/70 backdrop-blur-xl
          border border-white/10
          rounded-full px-2 py-2
        "
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              px-4 py-2 rounded-full text-sm transition
              ${
                activeSection === item.id
                  ? "bg-white text-black"
                  : "text-gray-300 hover:text-white"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
