/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          deep: "#06080f",
          surface: "rgba(13, 19, 36, 0.7)",
          card: "rgba(18, 26, 49, 0.6)",
        },
        accent: {
          cyan: "#00f5ff",
          purple: "#a855f7",
          pink: "#ec4899",
          emerald: "#10b981",
          amber: "#f59e0b",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Be Vietnam Pro"', 'sans-serif'],
        serif: ['"Playfair Display"', '"Instrument Serif"', 'Georgia', 'serif'],
        instrument: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-rise': 'fadeRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        fadeRise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
