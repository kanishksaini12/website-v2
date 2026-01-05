import React from "react";
import { Github, Linkedin, MailIcon } from "lucide-react";
import content from "../../content.json";

const Footer = () => {
  const { title, email, socials, copyright } = content.footer;

  const getIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github size={20} />;
      case "linkedin":
        return <Linkedin size={20} />;
      case "mail":
        return <MailIcon size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer
      id="contact"
      className="py-32 px-6 md:px-12 bg-[#111] text-white relative overflow-hidden z-10"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <div className="max-w-[100rem] mx-auto text-center md:text-left">
        <div className="inline-block relative">
          <h2 className="text-[12vw] leading-none font-bold tracking-tighter transition-colors duration-500 interactive">
            {title}
          </h2>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6">
            {socials.map((social, index) =>
              social.platform === "Mail" ? (
                <a
                  key={index}
                  href={`mailto:${email}`}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--accent)] hover:text-black hover:border-transparent transition-all"
                >
                  {getIcon(social.platform)}
                </a>
              ) : (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--accent)] hover:text-black hover:border-transparent transition-all"
                >
                  {getIcon(social.platform)}
                </a>
              )
            )}
          </div>
          <div className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
