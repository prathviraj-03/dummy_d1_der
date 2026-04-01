import React from "react";
import { doctor } from "@/data/doctor";
import { Activity, Camera, Link as LinkIcon, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-white pt-16 pb-8 border-t border-forest-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          
          <div>
            <a href="#home" className="flex items-center gap-3 text-2xl font-bold mb-4 tracking-tight">
              <Activity className="h-6 w-6 text-gold" />
              {doctor.name}
            </a>
            <p className="text-white/80 font-medium max-w-sm leading-relaxed">
              {doctor.tagline}. Providing advanced and compassionate skin care.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-gold tracking-tight">Quick Links</h4>
            <ul className="space-y-4 font-medium text-white/90">
              <li><a href="#home" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-gold hover:translate-x-1 inline-block transition-all">About</a></li>
              <li><a href="#services" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Services</a></li>
              <li><a href="#contact" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-gold tracking-tight">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-forest hover:border-transparent transition-all">
                <Camera size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-forest hover:border-transparent transition-all">
                <LinkIcon size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-forest hover:border-transparent transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-white/60">
          <p>© {new Date().getFullYear()} {doctor.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

