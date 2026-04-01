"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function Process() {
  const steps = [
    { num: "01", title: "Consultation", desc: "Detailed analysis of your skin and medical history." },
    { num: "02", title: "Diagnosis", desc: "Accurate identification of your specific dermatological concerns." },
    { num: "03", title: "Treatment", desc: "Customized procedures using state-of-the-art technology." },
    { num: "04", title: "Follow-up", desc: "Continuous monitoring to ensure optimal results." },
  ];

  return (
    <Section id="process" className="bg-forest text-cream relative overflow-hidden py-24">
      {/* SVG dotted map placeholder background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-white drop-shadow-md">
            Process that moves <span className="text-gold">things forward</span>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.num} direction="up" delay={index * 0.1} className="flex">
              <div className="flex flex-col items-center text-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-gold/40 shadow-xl hover:shadow-gold/5 hover:-translate-y-2 group w-full h-full">
                <span className="text-3xl sm:text-6xl font-bold text-gold/40 group-hover:text-gold mb-3 sm:mb-6 drop-shadow-md transition-colors duration-300">{step.num}</span>
                <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4 text-white group-hover:text-gold transition-colors">{step.title}</h3>
                <p className="text-white/70 font-medium text-xs sm:text-base leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

