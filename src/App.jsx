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
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`relative min-h-screen bg-[#FDFDFC] dark:bg-[#050505] text-[#111111] dark:text-[#EAEAEA] font-sans selection:bg-[var(--accent)] selection:text-black overflow-x-hidden transition-colors duration-700`}
    >
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <>
          <CustomCursor />
          <Grain />

          {/* --- Sections --- */}
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />

          <Hero />

          <Projects />

          <Experience />

          <About />

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
