import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ThejasAI from "./ThejasAI";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Achievements from "../sections/Achievements";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";

function Workspace() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      className="workspace"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* NAVIGATION */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN CONTENT */}
      <main className="workspace-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
<ThejasAI />
      {/* FRIEND'S AI COMPANION WILL BE ADDED HERE */}

      <style>{`
        :root {
          color-scheme: dark;
        }

        html {
          scroll-behavior: smooth;
          background: #050505;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overflow-y: auto;
          background: #050505;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .workspace {
          --bg-main: #050505;
          --bg-secondary: #0d0d0d;
          --bg-card: rgba(20, 10, 12, 0.78);

          --text-main: #f5f5f5;
          --text-secondary: #b0a5a7;
          --text-muted: #71666a;

          --accent: #ff253a;
          --accent-dark: #b80018;
          --accent-glow: rgba(255, 37, 58, 0.35);

          --border: rgba(255, 37, 58, 0.18);

          position: relative;
          width: 100%;
          min-height: 100vh;
          color: var(--text-main);

          background:
            radial-gradient(
              ellipse at 15% 10%,
              rgba(150, 0, 20, 0.13),
              transparent 35%
            ),
            radial-gradient(
              ellipse at 85% 65%,
              rgba(255, 37, 58, 0.07),
              transparent 32%
            ),
            var(--bg-main);

          overflow: visible;
          transition: background 0.4s ease;
        }

        .workspace-content {
          position: relative;
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          overflow: visible;
        }

        .workspace-content > section {
          scroll-margin-top: 30px;
        }

        ::selection {
          background: rgba(255, 37, 58, 0.35);
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .workspace-content {
            width: 100%;
            margin: 0;
            padding: 0;
          }
        }

        @media (max-width: 600px) {
          .workspace-content {
            width: 100%;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Workspace;