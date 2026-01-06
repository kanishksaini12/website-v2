import React, { useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import content from "../../content.json";

const Navbar = ({ theme, toggleTheme, menuOpen, setMenuOpen }) => {
  const { logo, links } = content.navbar;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      // Focus efficiency: Find focusable elements in mobile menu
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) {
        const focusableElements = mobileMenu.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e) => {
          if (e.key === "Tab") {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
          if (e.key === "Escape") {
            setMenuOpen(false);
          }
        };

        firstElement?.focus();
        mobileMenu.addEventListener("keydown", handleTabKey);

        return () => {
          mobileMenu.removeEventListener("keydown", handleTabKey);
        };
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 py-8 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white"
        role="navigation"
        aria-label="Main"
      >
        <MagneticButton
          className="pointer-events-auto"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to top"
        >
          <span className="font-bold text-xl tracking-tighter">{logo}</span>
        </MagneticButton>

        <div className="flex gap-8 items-center pointer-events-auto">
          <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-[var(--accent)] transition-colors"
                target={link.label === "Resume" ? "_blank" : undefined}
                rel={
                  link.label === "Resume" ? "noopener noreferrer" : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>
          <MagneticButton
            onClick={toggleTheme}
            className="p-2"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </MagneticButton>
          <button
            className="md:hidden relative z-50 text-white mix-blend-difference"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-8 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-4xl text-white hover:text-[var(--accent)] transition-colors font-bold tracking-tighter"
              onClick={() => setMenuOpen(false)}
              target={link.label === "Resume" ? "_blank" : undefined}
              rel={link.label === "Resume" ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
