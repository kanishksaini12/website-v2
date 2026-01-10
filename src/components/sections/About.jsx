import React from "react";
import content from "../../content.json";

const About = () => {
  const {
    sectionNumber,
    sectionTitle,
    title,
    description,
    skills,
    image,
    imageLabel,
    resume,
  } = content.about;

  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 bg-white dark:bg-[#080808] relative z-10"
    >
      <div className="max-w-6xl mb-16 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] px-2 py-1 rounded-md">
          {sectionNumber}
        </span>
        <h2 className="font-medium text-xl tracking-tight text-neutral-900 dark:text-white">
          {sectionTitle}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-12 interactive">
            {title.main} <br />{" "}
            <span className="text-neutral-400 font-serif italic">
              {title.highlight}
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-8">
            {description}
          </p>
          <ul className="space-y-4 font-mono text-sm text-[var(--accent)] interactive">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-current" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Fixed Image Block */}
        <div className="relative group perspective-1000">
          <div className="aspect-[4/5] overflow-hidden rounded-lg relative transform transition-transform duration-500 group-hover:rotate-y-12">
            <img
              src={image}
              alt="Workspace"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)] to-transparent opacity-20 mix-blend-multiply pointer-events-none" />

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
              className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-black/70 transition-colors"
            >
              <div className="text-xs font-mono text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" />
                {imageLabel}
              </div>
            </a>
          </div>
          {/* Shadow element */}
          <div className="absolute -bottom-10 left-10 w-[90%] h-10 bg-[var(--accent)] blur-[50px] opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default About;
