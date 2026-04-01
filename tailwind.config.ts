import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest:          '#1C3A2F',
        'forest-mid':    '#2D5241',
        'forest-soft':   '#3D6B56',
        cream:           '#F7F3EE',
        sage:            '#E8EDE8',
        gold:            '#B8955A',
        'gold-hover':    '#A07A3F',
        'gold-light':    '#F0E6D3',
        'text-dark':     '#1A1A1A',
        'text-body':     '#4A4A4A',
        'text-muted':    '#7A7A7A',
        border:          '#E0DDD8',
      },
      fontFamily: {
        sans:    ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'body':    ['0.9375rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem',  { lineHeight: '1.65' }],
        'label':   ['0.8125rem', { lineHeight: '1.5', 
                                   letterSpacing: '0.04em' }],
      },
      borderRadius: {
        card: '16px',
        pill: '999px',
        btn:  '10px',
      },
      boxShadow: {
        card:         '0 2px 16px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.13)',
        float:        '0 4px 24px rgba(28,58,47,0.18)',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
        'fade-in':   'fadeIn 0.55s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
