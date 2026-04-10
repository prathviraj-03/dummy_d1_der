"use client";

import React from "react";
import { siteData } from "@/data/siteData";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function Process() {
  const { steps, title } = siteData.process;

  return (
    <Section id="process" className="bg-forest py-24 px-6 relative overflow-hidden dark-section">
      {/* SVG dotted map placeholder background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 tracking-tight text-white drop-shadow-md">
            {title.regular}<span className="text-gold">{title.accent}</span>
          </h2>
        </FadeIn>
        
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 snap-x snap-mandatory">
          {steps.map((step, index) => (
            <FadeIn key={step.num} direction="up" delay={index * 0.1} className="flex min-w-[75%] sm:min-w-[45%] md:min-w-0 snap-center">
              <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-gold/40 shadow-xl hover:shadow-gold/5 hover:-translate-y-2 group w-full h-full">
                <span className="text-4xl sm:text-6xl font-bold text-gold/60 group-hover:text-gold mb-3 sm:mb-6 drop-shadow-md transition-colors duration-300">{step.num}</span>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white group-hover:text-gold transition-colors">{step.title}</h3>
                <p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

