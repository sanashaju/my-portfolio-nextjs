"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { ABOUT_ME } from "@/components/constants/data";

// =============================================
// TYPE DEFINITIONS
// =============================================
interface ProfileImageProps {
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
}

// interface VerifiedBadgeProps {
//   showTooltip: boolean;
//   setShowTooltip: (show: boolean) => void;
// }

interface LocationTimeProps {
  currentTime: string;
}

// =============================================
// CUSTOM HOOKS
// =============================================
const useISTTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

// =============================================
// UI COMPONENTS
// =============================================
const ProfileImage = ({ isHovering, setIsHovering }: ProfileImageProps) => (
  <div className="flex-shrink-0 relative group">
    {/* Brilliant White Glass Frame */}
    <div
      className="relative w-[126px] h-[126px] p-[3px] rounded-[2.2rem] bg-white/20 dark:bg-white/10 backdrop-blur-2xl border border-white/40 dark:border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:border-white/70 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glossy White Sheen */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-[2.2rem] pointer-events-none" />
      
      {/* Precise White Inner Edge */}
      <div className="absolute inset-0 rounded-[2.2rem] border-[0.5px] border-white/30 pointer-events-none" />
      
      <div className="w-full h-full rounded-[2rem] overflow-hidden bg-background/40 relative z-10">
        {isHovering ? (
          <Image
            src={ABOUT_ME.profileGif}
            alt="Profile GIF"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            unoptimized
          />
        ) : (
          <Image
            src={ABOUT_ME.profileImage}
            alt={ABOUT_ME.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        )}
      </div>
    </div>
    {/* Bright White Ambient Touch */}
    <span className="absolute -inset-6 blur-3xl bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></span>
  </div>
);

const VerifiedBadge = () => (
  <div className="inline-flex items-center">
    <MdVerified className="w-5 h-5 text-blue-500" />
  </div>
);

const LocationTime = ({ currentTime }: LocationTimeProps) => (
  <div className="hidden md:flex flex-col items-end gap-2 text-right text-sm">
    <div className="contact-card flex items-center gap-2 text-muted-foreground">
      <FaLocationCrosshairs className="w-4 h-4 text-[hsl(var(--border-hover))]" />
      <span className="font-mono uppercase tracking-wide">
        {ABOUT_ME.location}
      </span>
    </div>
    <div className="contact-card font-mono text-foreground">
      {currentTime ? `${currentTime} IST` : "Loading IST..."}
    </div>
  </div>
);

// =============================================
// MAIN COMPONENT
// =============================================
const Header = () => {
  const currentTime = useISTTime();
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <section className="pt-4">
      <div className="glass-panel hover-lift space-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <ProfileImage isHovering={isHovering} setIsHovering={setIsHovering} />

          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight">
                {ABOUT_ME.name}
              </h1>
              <VerifiedBadge />
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
              {ABOUT_ME.title}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {ABOUT_ME.description[0]}
            </p>
          </div>

          <LocationTime currentTime={currentTime} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="contact-card">
            <p className="text-blue-500 uppercase tracking-[0.3em] text-[0.6rem] mb-1">
              availability
            </p>
            <p className="font-semibold">
              Open to remote collabs · 9:00 AM - 7:00 PM IST
            </p>
          </div>
          <div className="contact-card">
            <p className="text-blue-500 uppercase tracking-[0.3em] text-[0.6rem] mb-1">
              speciality
            </p>
            <p className="font-semibold">Backend systems & secure APIs</p>
          </div>
          <div className="contact-card">
            <p className="text-blue-500 uppercase tracking-[0.3em] text-[0.6rem] mb-1">
              timezone
            </p>
            <p className="font-semibold">
              {currentTime ? `${currentTime} IST` : "Loading IST..."}
            </p>
            <p className="text-xs text-muted-foreground">
              Asia/Kolkata · UTC+05:30
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
