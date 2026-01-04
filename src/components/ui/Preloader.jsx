import React, { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("counting");

  useEffect(() => {
    const duration = 1500;
    const steps = 20;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setPhase("finished");
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        return prev + 5;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[10001] bg-[#111] flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "finished" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative">
        <div className="text-[15vw] md:text-[10vw] font-bold text-[#CCFF00] font-mono leading-none tracking-tighter">
          {count}%
        </div>
        <div className="absolute -bottom-8 left-1 text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-[#CCFF00] animate-ping" />
          System Booting
        </div>
      </div>
    </div>
  );
};

export default Preloader;
