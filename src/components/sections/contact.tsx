"use client";

import { useState, MouseEvent } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Copy,
  Check,
  ChevronDown,
} from "lucide-react";
import { SiLeetcode, SiWhatsapp } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ABOUT_ME, SOCIAL_LINKS } from "../constants/data";

type ContactLink = {
  label: string;
  value: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
};

const Contact = () => {
  const emailAddress =
    SOCIAL_LINKS.email?.replace("mailto:", "") || ABOUT_ME.email;
  const emailHref =
    SOCIAL_LINKS.email && SOCIAL_LINKS.email.trim() !== ""
      ? SOCIAL_LINKS.email.trim()
      : `mailto:${ABOUT_ME.email}`;
  const [copied, setCopied] = useState(false);
  const whatsappLink = SOCIAL_LINKS.whatsapp;

  const contactLinks: ContactLink[] = [
    {
      label: "Email",
      value: emailAddress,
      href: SOCIAL_LINKS.email,
      icon: Mail,
    },
    SOCIAL_LINKS.github && {
      label: "GitHub",
      value: SOCIAL_LINKS.github.replace("https://", ""),
      href: SOCIAL_LINKS.github,
      icon: FaGithub,
    },
    SOCIAL_LINKS.linkedin && {
      label: "LinkedIn",
      value: SOCIAL_LINKS.linkedin.replace("https://", ""),
      href: SOCIAL_LINKS.linkedin,
      icon: FaLinkedin,
    },
    SOCIAL_LINKS.leetcode && {
      label: "LeetCode",
      value: SOCIAL_LINKS.leetcode.replace("https://", ""),
      href: SOCIAL_LINKS.leetcode,
      icon: SiLeetcode,
    },
    SOCIAL_LINKS.phone && {
      label: "Phone",
      value: SOCIAL_LINKS.phone,
      href: `tel:${SOCIAL_LINKS.phone.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    SOCIAL_LINKS.instagram && {
      label: "Instagram",
      value: SOCIAL_LINKS.instagram.replace("https://", ""),
      href: SOCIAL_LINKS.instagram,
      icon: Instagram,
    },
  ].filter(Boolean) as ContactLink[];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);

      // Trigger Theme-Complementary Confetti
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.8 },
        colors: ["#A855F7", "#D946EF", "#8B5CF6", "#C084FC", "#FFFFFF"], // Purple, Fuchsia, Violet palette
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle", "square"],
      });

      setTimeout(() => setCopied(false), 2000);
    } catch {
      // no-op
    }
  };

  const handleOpenWhatsApp = () => {
    if (whatsappLink) {
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleSpecialNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href) return;
    const trimmed = href.trim();
    if (
      typeof window !== "undefined" &&
      (trimmed.startsWith("mailto:") || trimmed.startsWith("tel:"))
    ) {
      event.preventDefault();
      window.location.href = trimmed;
    }
  };

  return (
    <section className="py-6 space-y-8">
      <div className="flex flex-col gap-3">
        <h2 className="section-title">Let&apos;s Connect.</h2>
        <p className="text-sm text-muted-foreground/80 max-w-lg leading-relaxed font-light">
          Whether you have a project in mind or just want to say hi, my inbox is always open.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6 mt-2 md:mt-0">
          <div className="glass-panel pt-2 px-6 md:pt-3 md:px-8 pb-8 relative overflow-hidden group">
            
            <div className="relative z-10">
              {/* Ultra-compact Header */}
              <div className="flex items-center justify-between gap-4 border-b border-foreground/5 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold tracking-tight uppercase opacity-40">Network</h3>
                </div>
              </div>

              <div className="space-y-2.5">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-5 w-full">
                      <div className="w-12 h-12 rounded-2xl bg-foreground/[0.03] border border-foreground/5 flex items-center justify-center group-hover/link:border-accent/30 group-hover/link:bg-accent/10 transition-all duration-300">
                        <Icon className="w-5 h-5 group-hover/link:text-accent group-hover/link:scale-110 transition-all duration-300" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold opacity-60">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px] md:max-w-none">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  const linkClass = "group/link flex items-center gap-4 rounded-[2rem] border border-transparent bg-foreground/[0.02] px-5 py-4 text-left transition-all duration-300 hover:bg-foreground/[0.04] hover:border-foreground/10 hover:translate-x-1";

                  if (item.href) {
                    const isExternal = item.href.startsWith("http");
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        onClick={(event) => !isExternal && handleSpecialNavigation(event, item.href!)}
                        className={linkClass}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={item.label} className={linkClass}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-2 md:mt-0">
          <div className="glass-panel pt-2 px-6 md:pt-3 md:px-8 pb-8 space-y-3 relative overflow-hidden">
             {/* Ultra-compact Header */}
             <div className="flex items-center justify-between gap-4 border-b border-foreground/5 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-bold tracking-tight uppercase opacity-40">Direct</h3>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                 <span className="text-[9px] font-bold text-accent uppercase tracking-widest hidden sm:inline">Active</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-0">
              {/* Refined Email Copy Area */}
              <div className="space-y-2.5">
                <div 
                  onClick={handleCopyEmail}
                  className="group/copy relative cursor-pointer"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/50 to-accent-secondary/50 rounded-2xl blur opacity-20 group-hover/copy:opacity-40 transition duration-500" />
                  <div className="relative flex items-center justify-between gap-4 px-6 py-5 bg-background border border-foreground/5 rounded-2xl transition-all duration-300 hover:border-accent/40 group-hover/copy:bg-foreground/[0.01]">
                    <div className="flex items-center gap-4 truncate">
                      <Mail className="w-5 h-5 text-accent/60 group-hover/copy:text-accent transition-colors" />
                      <span className="font-mono text-sm tracking-tight text-foreground/80 group-hover/copy:text-foreground transition-colors truncate">
                        {emailAddress}
                      </span>
                    </div>
                    
                    <button
                      type="button"
                      className={`
                        shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl font-bold font-mono text-[10px] tracking-widest uppercase transition-all duration-300
                        ${copied 
                          ? "bg-accent/10 text-accent border border-accent/20" 
                          : "bg-foreground text-background hover:scale-105 active:scale-95"
                        }
                      `}
                    >
                      {copied ? <Check size={14} strokeWidth={3} /> : <Copy size={14} strokeWidth={3} />}
                      {copied ? "COPIED" : "COPY"}
                    </button>
                  </div>
                </div>

                <a
                  href={emailHref}
                  onClick={(event) => handleSpecialNavigation(event, emailHref)}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-foreground/5 border border-foreground/10 text-foreground text-xs font-bold font-mono tracking-[0.2em] py-5 transition-all duration-300 hover:bg-accent hover:text-background hover:border-accent hover:shadow-[0_20px_40px_rgba(var(--accent),0.2)] uppercase group"
                >
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Initiate_Handshake
                </a>
              </div>

              {/* Refined WhatsApp Section */}
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                disabled={!whatsappLink}
                className="w-full group inline-flex items-center justify-between gap-4 px-6 py-5 rounded-2xl border border-green-500/20 bg-green-500/5 transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/40 disabled:opacity-30 disabled:grayscale"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <SiWhatsapp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold">Secure_Chat</p>
                    <p className="text-[10px] text-green-500/60 font-mono">ENCRYPTED_LINE</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-green-500/20 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
