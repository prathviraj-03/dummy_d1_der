import React from 'react';
type BgVariant = 'cream' | 'white' | 'sage' | 'dark'

const bgMap = {
  cream: 'bg-[#F7F3EE]',
  white: 'bg-white',
  sage:  'bg-[#E8EDE8]',
  dark:  'bg-forest dark-section',
}

export function Section({ bg='cream', id='', children, className='' }: { bg?: BgVariant; id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section 
      id={id}
      className={`${bgMap[bg as keyof typeof bgMap] || bgMap.cream} py-20 md:py-28 px-6 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
