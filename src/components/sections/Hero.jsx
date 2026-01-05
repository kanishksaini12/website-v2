import React from "react";
import FadeIn from "../ui/FadeIn";
import MagneticButton from "../ui/MagneticButton";
import content from "../../content.json";

const Hero = () => {
  const { image, title, status, headline, description, buttonText } =
    content.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-end items-center px-6 md:px-12 pb-12 overflow-hidden bg-[#050505]">
      {/* 1. The Image (Centered, Bottom-Aligned, Masked) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[80vh] md:h-[90vh] z-10 pointer-events-none select-none">
        <div className="relative w-full h-full">
          <img
            src={image}
            alt="Portrait"
            className="w-full h-full object-cover object-top mask-image-gradient grayscale-[10%] contrast-110 brightness-105"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            }}
          />

          {/* Left & Right Gradient Overlays for Side Blending */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent" />

          {/* Overlay for blending with bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-100" />
        </div>
      </div>

      {/* Mobile Status - Absolute Positioned to Section */}
      <div className="md:hidden absolute top-28 left-6 z-30">
        <p className="font-mono text-xs text-[var(--accent)] flex items-center gap-2">
          <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
          {status}
        </p>
        <div className="md:static w-full md:w-1/3 mb-auto md:mb-32 md:-translate-y-20 pointer-events-auto flex flex-col items-end md:items-start text-left md:text-left interactive">
          <FadeIn delay={200}>
            <div className="flex flex-col gap-4 items-end md:items-start">
              <p className="hidden md:flex font-mono text-xs text-[var(--accent)] items-center gap-2">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                {status}
              </p>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[0.9] text-white">
                {headline.prefix} <br />
                <span className="text-[var(--accent)] font-serif italic">
                  {headline.highlight}
                </span>{" "}
                <br />
                {headline.suffix}
              </h2>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 2. The Text Layers (Parallax Effect) */}
      <div className="relative z-20 w-full max-w-[100rem] mx-auto flex flex-col justify-center h-full">
        {/* Layer 1: Behind Subject - Move to bottom on mobile */}
        <div className="absolute bottom-32 md:top-1/3 left-0 w-full text-center pointer-events-none mix-blend-overlay opacity-50">
          <h1 className="text-[20vw] font-bold tracking-tighter leading-none text-white">
            {title}
          </h1>
        </div>

        {/* Layer 2: Foreground Text */}
        <div className="relative z-30 flex flex-col md:flex-row justify-between md:items-end w-full h-full pb-12 md:pb-0 pt-32 md:pt-0 pointer-events-none">
          {/* Headline - Top Left on Mobile */}
          <div className="hidden md:block absolute top-40 right-6 md:static w-full md:w-1/3 mb-auto md:mb-32 md:-translate-y-20 pointer-events-auto flex flex-col items-end md:items-start text-right md:text-left">
            <FadeIn delay={200}>
              <div className="flex flex-col gap-4 items-end md:items-start">
                <p className="hidden md:flex font-mono text-xs text-[var(--accent)] items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                  {status}
                </p>
                <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[0.9] text-white interactive">
                  {headline.prefix} <br />
                  <span className="text-[var(--accent)] font-serif italic">
                    {headline.highlight}
                  </span>{" "}
                  <br />
                  {headline.suffix}
                </h2>
              </div>
            </FadeIn>
          </div>

          {/* Description - Hidden on Mobile */}
          <div className="hidden md:flex w-full md:w-1/3 flex-col items-start md:items-end md:text-right mt-12 md:mt-0 mb-12 md:mb-32 md:-translate-y-20 pointer-events-auto">
            <FadeIn delay={600}>
              <div className="bg-black/20 backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-xl md:rounded-none border border-white/10 md:border-none">
                <p className="text-sm md:text-base text-neutral-200 md:text-neutral-400 max-w-xs leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="mt-6 md:mt-8 w-full md:w-auto">
                <MagneticButton
                  href="#projects"
                  className="w-full md:w-auto text-center border border-neutral-700 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all bg-black/50 md:bg-transparent"
                >
                  {buttonText}
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
