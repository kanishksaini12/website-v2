import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import MagneticButton from "../ui/MagneticButton";
import content from "../../content.json";

// Utility for class merging
const cn = (...classes) => classes.filter(Boolean).join(" ");

const ProjectRow = ({
  title,
  category,
  year,
  description,
  url,
  index,
  onHover,
  isHovered,
  anyHovered,
}) => {
  return (
    <FadeIn delay={index * 100} className="w-full">
      <div
        className={cn(
          "interactive group relative border-t border-neutral-200 dark:border-neutral-800 py-16 md:py-20 cursor-none hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-all duration-500 z-30",
          anyHovered && !isHovered
            ? "opacity-30 blur-[1px] scale-[0.99]"
            : "opacity-100 scale-100"
        )}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline px-6">
          <div className="md:col-span-1 text-neutral-400 font-mono text-xs">
            0{index + 1}
          </div>

          <div className="md:col-span-8">
            <h3 className="text-4xl md:text-7xl font-medium tracking-tighter text-neutral-900 dark:text-white transition-all duration-300 group-hover:translate-x-4 group-hover:text-[var(--accent)]">
              {title}
            </h3>

            {/* Expanded Description (Accordion Style) */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
                isHovered
                  ? "max-h-[1000px] opacity-100 translate-y-4"
                  : "max-h-0 opacity-0 translate-y-0"
              )}
            >
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed pt-2 pl-4 border-l-2 border-[var(--accent)]">
                {description}
              </p>

              {url && (
                <div
                  onClick={() => window.open(url, "_blank")}
                  className="mt-4 pl-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)]"
                >
                  View Case Study <ArrowUpRight size={14} />
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-start md:items-end mt-4 md:mt-0">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { sectionNumber, sectionTitle, sectionPeriod, items } =
    content.projects;

  return (
    <section
      id="work"
      className="py-32 bg-white dark:bg-[#080808] relative z-10 rounded-t-[3rem] min-h-screen"
    >
      <div className="px-6 md:px-12 mb-16 flex items-end justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] px-2 py-1 rounded-md">
            {sectionNumber}
          </span>
          <h2 className="font-medium text-xl tracking-tight text-neutral-900 dark:text-white">
            {sectionTitle}
          </h2>
        </div>
        <span className="hidden md:block text-xs text-neutral-400">
          {sectionPeriod}
        </span>
      </div>

      <div className="relative">
        {items.map((p, i) => (
          <ProjectRow
            key={i}
            {...p}
            index={i}
            onHover={setHoveredProject}
            isHovered={hoveredProject === i}
            anyHovered={hoveredProject !== null}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
