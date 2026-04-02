import React from 'react';
export function Card({ dark=false, children, className='' }: { dark?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1.5 group cursor-pointer ${dark ? 'bg-forest text-white shadow-float hover:ring-2 hover:ring-gold/40' : 'bg-sage border border-[#E0DDD8] hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)]'} ${className}`}>
      {children}
    </div>
  )
}
