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
      <li
        className={cn(
          "relative group border-t border-neutral-200 dark:border-neutral-800 py-16 md:py-20 transition-all duration-500 z-30",
          anyHovered && !isHovered
            ? "opacity-30 blur-[1px] scale-[0.99]"
            : "opacity-100 scale-100",
        )}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
      >
        {/* Full-size trigger button for accessibility and click handling */}
        <button
          className="absolute inset-0 w-full h-full z-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-inset text-left"
          onClick={() => onHover(isHovered ? null : index)}
          aria-expanded={isHovered}
          aria-controls={`project-details-${index}`}
          aria-label={`View details for ${title}`}
        />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline px-6 pointer-events-none">
          <div className="md:col-span-1 text-neutral-400 font-mono text-xs relative z-10">
            0{index + 1}
          </div>

          <div className="md:col-span-8 relative z-10">
            <h3 className="text-4xl md:text-7xl font-medium tracking-tighter text-neutral-900 dark:text-white transition-all duration-300 group-hover:translate-x-4 group-hover:text-[var(--accent)]">
              {title}
            </h3>

            {/* Expanded Description (Accordion Style) */}
            <div
              id={`project-details-${index}`}
              className={cn(
                "overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
                isHovered
                  ? "max-h-[1000px] opacity-100 translate-y-4 visible"
                  : "max-h-0 opacity-0 translate-y-0 invisible",
              )}
              aria-hidden={!isHovered}
            >
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed pt-2 pl-4 border-l-2 border-[var(--accent)]">
                {description}
              </p>

              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 pl-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary-accent)] hover:underline focus:underline outline-none pointer-events-auto w-fit"
                  onClick={(e) => e.stopPropagation()} // Prevent toggling row
                >
                  View Project <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-start md:items-end mt-4 md:mt-0 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </li>
    </FadeIn>
  );
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { sectionNumber, sectionTitle, sectionPeriod, items } =
    content.projects;

  return (
    <section
      id="projects"
      className="pt-32 bg-white dark:bg-[#080808] relative z-10 rounded-t-[3rem] min-h-screen"
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

      <ul className="relative">
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
      </ul>
    </section>
  );
};

export default Projects;
