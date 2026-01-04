import React, { useRef } from "react";

const KineticText = ({ children, className }) => {
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const w = rect.width;
    const xPercent = (x / w - 0.5) * 2;
    textRef.current.style.transform = `skewX(${xPercent * -10}deg)`;
  };

  const handleMouseLeave = () => {
    if (!textRef.current) return;
    textRef.current.style.transform = `skewX(0deg)`;
  };

  return (
    <div
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={textRef}
        className={`transition-transform duration-300 ease-out cursor-default ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default KineticText;
