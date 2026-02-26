import { ABOUT_ME, SOCIAL_LINKS } from "@/components/constants/data";
import ScrollLink from "../ScrollLink";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 border-t border-border/40 pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Bio */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              {ABOUT_ME.name.split(" ")[0]}.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full Stack Developer specializing in building scalable MERN stack
              applications and reliable backend architectures.
            </p>
          </div>

          {/* Quick Links (Visual Sitemap) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Sitemap
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
              {SOCIAL_LINKS.resume && (
                <li>
                  <a
                    href={SOCIAL_LINKS.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent font-medium flex items-center gap-1"
                  >
                    Resume <ExternalLink size={10} />
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/30 hover:bg-accent/10 hover:text-accent transition-all text-muted-foreground border border-border/40"
              >
                <Github size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/30 hover:bg-accent/10 hover:text-accent transition-all text-muted-foreground border border-border/40"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="p-2 rounded-lg bg-muted/30 hover:bg-accent/10 hover:text-accent transition-all text-muted-foreground border border-border/40"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
          <p>
            © {new Date().getFullYear()} {ABOUT_ME.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <span className="text-accent">Next.js 15</span> &{" "}
            <span className="text-accent">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
