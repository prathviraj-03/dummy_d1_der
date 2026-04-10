import React from "react";
import { doctor, siteData } from "@/data/siteData";
import { Activity, Camera, Link as LinkIcon, MessageCircle } from "lucide-react";

export function Footer() {
  const { 
    taglineParams, 
    quickLinksTitle, 
    connectTitle, 
    rightsReserved, 
    privacyText, 
    termsText 
  } = siteData.footer;

  return (
    <footer className="bg-forest text-white pt-10 pb-6 md:pt-16 md:pb-8 border-t border-forest-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12 border-b border-white/10 pb-8 md:pb-12">
          
          <div>
            <a href="#home" className="flex items-center gap-3 text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">
              <Activity className="h-5 w-5 md:h-6 md:w-6 text-gold" />
              {doctor.name}
            </a>
            <p className="text-white/80 font-medium max-w-sm leading-relaxed text-sm md:text-base">
              {doctor.tagline}. {taglineParams}
            </p>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gold tracking-tight">{quickLinksTitle}</h4>
            <ul className="flex flex-wrap gap-4 md:space-y-4 md:block font-medium text-white/90 text-sm md:text-base">
              {siteData.navbar.navLinks.map(link => (
                <li key={link.name}><a href={link.href} className="hover:text-gold hover:translate-x-1 inline-block transition-all">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gold tracking-tight">{connectTitle}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-forest hover:border-transparent transition-all">
                <Camera size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-forest hover:border-transparent transition-all">
                <LinkIcon size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-forest hover:border-transparent transition-all">
                <MessageCircle size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-medium text-white/60 space-y-4 md:space-y-0">
          <p className="text-center md:text-left">© {new Date().getFullYear()} {doctor.name}. {rightsReserved}</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">{privacyText}</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">{termsText}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

