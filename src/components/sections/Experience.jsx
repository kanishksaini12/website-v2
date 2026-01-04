import React from "react";
import FadeIn from "../ui/FadeIn";
import content from "../../content.json";

const ExperienceRow = ({ role, company, period, desc, index }) => (
  <FadeIn delay={index * 100} className="w-full">
    <div className="group interactive grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors px-6">
      <div className="md:col-span-3">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 group-hover:text-[var(--accent)] transition-colors">
          {period}
        </span>
      </div>
      <div className="md:col-span-5">
        <h4 className="text-2xl font-medium text-neutral-900 dark:text-white mb-2 group-hover:text-[var(--accent)]">
          {role}
        </h4>
        <p className="text-neutral-500 font-serif italic">{company}</p>
      </div>
      <div className="md:col-span-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  </FadeIn>
);

const Experience = () => {
  const { sectionNumber, sectionTitle, items } = content.experience;

  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-12 bg-[#FDFDFC] dark:bg-[#050505] relative z-10"
    >
      <div className="max-w-[100rem] mx-auto">
        <div className="mb-24 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] px-2 py-1 rounded-md">
            {sectionNumber}
          </span>
          <h2 className="font-medium text-xl tracking-tight text-neutral-900 dark:text-white">
            {sectionTitle}
          </h2>
        </div>

        <div className="w-full border-t border-neutral-200 dark:border-neutral-800">
          {items.map((job, i) => (
            <ExperienceRow key={i} {...job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
