import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import GithubActivity from "./components/GithubActivity";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <GithubActivity />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
