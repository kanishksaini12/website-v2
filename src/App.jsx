import React, { useState, useEffect } from "react";

/* --- COMPONENTS --- */
import Preloader from "./components/ui/Preloader";
import CustomCursor from "./components/ui/CustomCursor";
import Grain from "./components/ui/Grain";

import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import About from "./components/sections/About";
import Footer from "./components/sections/Footer";

/**
 * MAIN APP
 */
const App = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme-preference") || "light";
    }
    return "light";
  });

  // Sync theme with DOM and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme-preference", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`relative min-h-screen bg-[#FDFDFC] dark:bg-[#050505] text-[#111111] dark:text-[#EAEAEA] font-sans selection:bg-[var(--accent)] selection:text-black overflow-x-hidden transition-colors duration-700`}
    >
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[100] -translate-y-[150%] focus:translate-y-0 bg-[var(--accent)] text-black px-4 py-2 rounded-md font-bold transition-transform"
      >
        Skip to Content
      </a>
      <Preloader onComplete={() => setLoading(false)} />

      <CustomCursor />
      <Grain />

      {/* --- Sections --- */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main id="main-content" role="main">
        <Hero />

        <Projects />

        <Experience />

        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;
