import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioHighlights from "./components/PortfolioHighlights";

export default function App() {
  useEffect(() => {
    // 🔴 Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 🔵 Force scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="text-white">

      <Navbar />

      <Hero />
      <Journey />
      <Skills />
      <Projects />
<PortfolioHighlights />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
