"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { doctor } from "@/data/doctor";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-forest/95 backdrop-blur-md shadow-sm py-3"
          : "bg-forest py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-white">
              {doctor.name}
            </span>
            <span className="hidden sm:inline-block bg-sage/20 text-sage text-[10px] lg:text-xs tracking-wider uppercase font-medium px-2 py-0.5 rounded-full border border-sage/30">
              MBBS · MD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-gold transition-colors tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://fayumi.in/viewdoctor/skin-code"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-forest hover:bg-white hover:text-forest transition-colors px-6 py-2.5 rounded-full font-bold flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[73px] bg-forest border-t border-forest-light overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 text-lg pb-24">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gold transition-colors font-medium tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://fayumi.in/viewdoctor/skin-code"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-forest hover:bg-white transition-colors px-8 py-3 rounded-full font-bold flex items-center gap-2 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5" />
                Book Your Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

