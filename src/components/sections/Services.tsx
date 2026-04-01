"use client";
import React, { useState } from "react";
import { services } from "@/data/services";
import { Section } from "@/components/ui/Section";
import * as Icons from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  // Group services into primary (first 4 for cards) and secondary (rest for a list or smaller cards)
  const primaryServices = services.slice(0, 4);
  const secondaryServices = services.slice(4);

  return (
    <Section id="services" className="bg-gold-light relative overflow-hidden py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Dynamic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <FadeIn direction="right" className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <p className="text-gold font-bold tracking-[0.25em] uppercase text-sm">Specialty Treatments</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest leading-[1.1] tracking-tight">
              Elevating your <span className="text-gold italic font-medium">natural</span> beauty.
            </h2>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.1} className="md:text-right max-w-sm">
            <p className="text-text-body text-base md:text-lg leading-relaxed mb-6 font-medium opacity-80">
              We offer a versatile range of dermatological procedures to restore, enhance, and protect your skin and hair health.
            </p>
          </FadeIn>
        </div>

        {/* Featured Service Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 lg:gap-8 mb-16">
          {primaryServices.map((service, index) => {
            const Icon = (Icons as unknown as Record<string, React.ElementType>)[service.icon] || Icons.Sparkles;
            const isHovered = hovered === service.id;

            return (
              <FadeIn key={service.id} direction="up" delay={index * 0.1}>
                <div
                  onMouseEnter={() => setHovered(service.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative bg-white rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-sage/40 overflow-hidden h-full flex flex-col"
                >
                  {/* Hover Background Expansion */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-[100%] transition-transform duration-500 origin-top-right group-hover:scale-[3] pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-forest/5 flex items-center justify-center mb-4 md:mb-8 group-hover:bg-forest transition-colors duration-500 shrink-0">
                      <Icon className="w-5 h-5 md:w-8 md:h-8 text-forest group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-forest mb-2 md:mb-4 tracking-tight group-hover:text-forest-mid transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-body text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-8 flex-grow">
                      {service.description}
                    </p>

                    <a href="#contact" className="inline-flex items-center gap-1 md:gap-2 text-forest font-bold text-[10px] sm:text-xs md:text-sm tracking-wide uppercase hover:text-gold-hover transition-colors mt-auto">
                      Consult Now
                      <ArrowUpRight className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${isHovered ? "translate-x-1 -translate-y-1" : ""}`} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Secondary Services List */}
        <FadeIn direction="up" delay={0.4}>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-sage/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
              <h3 className="text-2xl md:text-3xl font-bold text-forest">More Clinical Services</h3>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-forest text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold hover:text-forest transition-all duration-300 shadow-md hover:shadow-lg w-fit"
              >
                Book Appointment
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
              {secondaryServices.map((service) => {
                const Icon = (Icons as unknown as Record<string, React.ElementType>)[service.icon] || Icons.CheckCircle2;
                return (
                  <div key={service.id} className="flex gap-4 items-start group cursor-default p-3 -m-3 rounded-2xl hover:bg-sage/30 transition-colors">
                    <div className="mt-1">
                      <Icon size={20} className="text-gold group-hover:text-forest-mid transition-colors" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest text-sm mb-1">{service.title}</h4>
                      <p className="text-text-muted text-xs leading-relaxed line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

      </div>
    </Section>
  );
}