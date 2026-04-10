import React from "react";
import { doctor, siteData } from "@/data/siteData";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, GraduationCap, Star, ArrowRight, User } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  const { badgeText, eyebrowText, verifiedSpecialistText, bookConsultationText, bookConsultationUrl } = siteData.about;

  return (
    <Section id="about" className="bg-cream relative overflow-hidden py-24">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #2d4a3e 1px, transparent 0)", backgroundSize: "32px 32px" }} 
      />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

          {/* Image — shifted left via negative margin */}
          <FadeIn direction="right" className="w-full lg:w-5/12 flex justify-center lg:-ml-8">
            <div className="relative group">
              {/* Gold arc accent behind image */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-gold/30 via-transparent to-transparent rotate-[-30deg] pointer-events-none z-0" />

              <div className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-[10px] border-white bg-cream group-hover:border-gold/30 transition-colors duration-700 relative z-10 flex items-center justify-center">
                {doctor.photo ? (
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform hover:scale-110 duration-1000"
                    style={{ backgroundImage: `url('${doctor.photo}')` }}
                  />
                ) : (
                  <User 
                    className="w-32 h-32 md:w-48 md:h-48 text-forest/20 transition-transform group-hover:scale-110 duration-700" 
                    strokeWidth={1} 
                  />
                )}
              </div>

              {/* Decorative rings */}
              <div className="absolute -inset-5 rounded-full border border-forest/10 group-hover:scale-105 transition-transform duration-700 pointer-events-none z-0" />
              <div className="absolute -inset-10 rounded-full border border-forest/5 group-hover:scale-105 transition-transform duration-1000 pointer-events-none z-0" />

              {/* Floating badge */}
              <div className="absolute bottom-4 -right-2 md:bottom-6 md:-right-6 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 border border-black/5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-forest text-xs font-bold">{badgeText}</span>
              </div>
            </div>
          </FadeIn>

          {/* Text content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left space-y-0">

            {/* Eyebrow */}
            <FadeIn direction="up">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-xs">{eyebrowText}</p>
              </div>
            </FadeIn>

            {/* Name — large, dominant */}
            <FadeIn direction="up" delay={0.05}>
              <h2 className="text-5xl md:text-6xl font-bold text-forest mb-6 tracking-tight leading-none">
                {doctor.name}
              </h2>
            </FadeIn>

            {/* Credential pills */}
            <FadeIn direction="up" delay={0.12}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
                <span className="bg-white/80 backdrop-blur-sm text-forest text-xs font-semibold px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border border-black/5">
                  <GraduationCap size={15} className="text-gold" />
                  {doctor.qualifications}
                </span>
                {doctor.memberships.length > 0 && (
                  <span className="bg-white/80 backdrop-blur-sm text-forest text-xs font-semibold px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border border-black/5">
                    <ShieldCheck size={15} className="text-gold" />
                    {verifiedSpecialistText}
                  </span>
                )}
              </div>
            </FadeIn>

            {/* Divider */}
            <FadeIn direction="up" delay={0.18}>
              <div className="w-12 h-0.5 bg-gold/40 mx-auto lg:mx-0 mb-7" />
            </FadeIn>

            {/* Bio */}
            <FadeIn direction="up" delay={0.22}>
              <p className="text-text-body text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 opacity-80">
                {doctor.bio}
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn direction="up" delay={0.3}>
              <a
                href={bookConsultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-forest text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold hover:text-forest transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                {bookConsultationText}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </FadeIn>
          </div>

        </div>
      </div>
    </Section>
  );
}