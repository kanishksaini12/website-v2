import React, { useRef } from "react";

// Utility for class merging
const cn = (...classes) => classes.filter(Boolean).join(" ");

const MagneticButton = ({ children, className, href, onClick }) => {
  const btnRef = useRef(null);
  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0px, 0px)";
  };
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      onClick={onClick}
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "interactive inline-block transition-transform duration-200 ease-out cursor-pointer",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
