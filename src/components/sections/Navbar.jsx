import React from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import content from "../../content.json";

const Navbar = ({ theme, toggleTheme, menuOpen, setMenuOpen }) => {
  const { logo, links } = content.navbar;

  return (
    <nav className="fixed top-0 left-0 w-full z-40 py-8 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
      <MagneticButton
        className="pointer-events-auto"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="font-bold text-xl tracking-tighter">{logo}</span>
      </MagneticButton>

      <div className="flex gap-8 items-center pointer-events-auto">
        <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
          {links.map((link, index) =>
            link.label === "Resume" ? (
              <span
                key={index}
                className="hover:text-[var(--accent)] transition-colors cursor-pointer"
                onClick={() => window.open(link.href, "_blank")}
              >
                {link.label}
              </span>
            ) : (
              <a
                key={index}
                href={link.href}
                className="hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>
        <MagneticButton onClick={toggleTheme} className="p-2">
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </MagneticButton>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
