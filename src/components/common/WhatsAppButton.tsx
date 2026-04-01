"use client";
import React from "react";
import { contact } from "@/data/contact";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${contact.whatsapp}?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-gold shadow-2xl border-2 border-gold/50 transition-colors hover:bg-gold hover:text-forest"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={28} />
      <span className="absolute -inset-1 animate-ping rounded-full bg-gold opacity-20"></span>
    </motion.a>
  );
}

