/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',     // Azul - mantenido
        secondary: '#10b981',   // Verde esmeralda - buen contraste
        tertiary: '#f59e0b',    // Amarillo/Ámbar - te gusta
        accent: '#7c3aed',      // Púrpura más vibrante - mejor que el anterior
        danger: '#ef4444',      // Rojo para errores
        
        // Colores específicos que te gustan
        purple: {
          500: '#8b5cf6',      // Tu púrpura favorito
          600: '#7c3aed',      // Versión más intensa
          700: '#6d28d9',      // Más oscuro
        },
        
        blue: {
          400: '#60a5fa',      // Azul claro
          500: '#3b82f6',      // Tu azul favorito
          600: '#2563eb',      // Más intenso
        },
        
        yellow: {
          400: '#fbbf24',      // Amarillo brillante
          500: '#f59e0b',      // Tu amarillo favorito
          600: '#d97706',      // Más intenso
        },
        
        dark: {
          bg: '#0a0b14',
          darker: '#06070a',
          card: 'rgba(15, 23, 42, 0.9)',
          surface: 'rgba(30, 41, 59, 0.7)',
          border: 'rgba(71, 85, 105, 0.4)',
        },
        
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
          accent: '#7c3aed',
        },
        
        border: 'rgba(148, 163, 184, 0.25)',
      },
      
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        
        'gradient-blue-purple': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-yellow-purple': 'linear-gradient(135deg, #f59e0b 0%, #8b5cf6 100%)',
        'gradient-blue-yellow': 'linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%)',
        
        'gradient-dark': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        'gradient-glow': 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)',
        'gradient-hero': 'linear-gradient(135deg, #0a0b14 0%, rgba(59, 130, 246, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
      },
      
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      
      animation: {
        'slideInUp': 'slideInUp 1s ease-out forwards',
        'slideIn': 'slideIn 0.6s ease-out',
        'blink': 'blink 0.7s infinite',
        'projectCard': 'projectCardSlideIn 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        slideInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        projectCardSlideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '100%': {
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      boxShadow: {
        // Sombras con tus colores favoritos
        'glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-yellow': '0 0 20px rgba(245, 158, 11, 0.4)',
        'dark': '0 10px 40px rgba(0, 0, 0, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}