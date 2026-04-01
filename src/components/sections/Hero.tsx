"use client";
import React from "react";
import { doctor } from "@/data/doctor";

/* Phone icon */
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
);

/* Chat icon */
const ChatIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const BackgroundTexture = () => (
  <div className="hero-bg-texture pointer-events-none absolute inset-0 opacity-[0.03]" />
);

const HeroNav = () => (
  <nav className="hero-fadein relative z-20 flex items-center justify-between px-6 md:px-14 lg:px-20 py-5 border-b border-white/10">
    <a href="#home" className="flex items-center gap-2.5 select-none">
      <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-forest text-[11px] font-extrabold tracking-tight">
        Rx
      </span>
      <span className="text-cream font-bold hero-logo-text">
        {doctor.hero?.logoText ?? doctor.name?.split(" ").slice(-1)[0] ?? "Skin Code"}
      </span>
    </a>

    <ul className="hidden md:flex items-center gap-8">
      {doctor.hero?.nav.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
              l.active
                ? "text-gold underline underline-offset-4 decoration-gold decoration-2"
                : "text-sage/70 hover:text-white"
            }`}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>

    <a
      href="#contact"
      className="bg-gold text-forest text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gold-hover transition-all duration-300 shadow-md"
    >
      Contact Us
    </a>
  </nav>
);

const HeroContent = ({ phone, waNumber }: { phone: string; waNumber: string }) => {
  const { subtitle } = doctor.hero || { 
    subtitle: "Board-certified Dermatologist in Mangaluru — advanced treatments for all skin types with warmth and precision." 
  };
  
  return (
    <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 pt-14 pb-0 flex-1">
      <h1 className="hero-fadeup text-cream leading-[1.07] tracking-tight mb-5 hero-main-title font-bold">
        Skin Code
      </h1>

      <p className="hero-fadeup hero-subtitle text-sage/80 max-w-lg text-base md:text-[1.08rem] leading-relaxed mb-10">
        {subtitle}
      </p>

      <div className="hero-fadeup hero-actions flex flex-wrap items-center justify-center gap-4 mb-14">
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2.5 bg-gold text-forest font-semibold px-8 py-3.5 rounded-full hover:bg-cream hover:text-forest transition-all duration-300 shadow-lg text-sm group"
        >
          <PhoneIcon />
          Call Now
        </a>

        <a
          href={`https://wa.me/${waNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 border-2 border-gold text-gold font-semibold px-8 py-3.5 rounded-full hover:bg-gold hover:text-forest transition-all duration-300 text-sm"
        >
          <ChatIcon />
          Chat with Us
        </a>
      </div>
    </div>
  );
};

const HeroMarquee = () => {
  const images = doctor.hero?.images || [];
  const track = [...images, ...images];
  
  if (!images.length) return null;

  return (
    <div className="hero-marquee-container relative z-10 w-full overflow-hidden">
      <div className="hero-marquee-mask-left pointer-events-none absolute left-0 top-0 h-full w-32 z-10" />
      <div className="hero-marquee-mask-right pointer-events-none absolute right-0 top-0 h-full w-32 z-10" />

      <div className="marquee-track flex items-end h-full pb-0">
        {track.map((img, i) => (
          <div
            key={i}
            className="lens-card relative flex-shrink-0 overflow-hidden rounded-3xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
            <div className="hero-card-overlay absolute inset-0 transition-opacity duration-500 hover:opacity-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export function Hero() {
  const phone = doctor.phone ?? "+918000000000";
  const waNumber = phone.replace(/\D/g, "");

  return (
    <section
      id="home"
      className="relative min-h-screen bg-forest flex flex-col overflow-hidden"
    >
      <BackgroundTexture />
      <HeroNav />
      <HeroContent phone={phone} waNumber={waNumber} />
      <HeroMarquee />

      <div className="hero-bottom-divider w-full" />
    </section>
  );
}