// Sword Nest Design System Theme Configuration

export const theme = {
  colors: {
    // Primary Colors
    charcoalBlack: '#0F0F0F',
    neonBlue: '#38BDF8',
    orange: '#F97316',
    silverGray: '#9CA3AF',
    lightGray: '#F3F4F6',
    
    // Extended Palette
    darkGray: '#1A1A1A',
    midGray: '#4B5563',
    white: '#FFFFFF',
    
    // Semantic Colors
    error: '#EF4444',
    success: '#10B981',
    warning: '#F59E0B',
    
    // Gradient Definitions
    gradients: {
      blueGlow: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
      orangeGlow: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)',
      darkFade: 'linear-gradient(180deg, rgba(15, 15, 15, 0.9) 0%, transparent 100%)',
      swordShine: 'linear-gradient(90deg, transparent, #38BDF8, #38BDF8, transparent)'
    }
  },
  
  typography: {
    fontFamily: {
      primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"SF Mono", "Monaco", "Inconsolata", monospace'
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      'hero': 'clamp(2.5rem, 5vw, 5rem)'
    },
    
    fontWeight: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900
    },
    
    lineHeight: {
      tight: 1.1,
      snug: 1.2,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },
    
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.2em',
      heroSpacing: '0.3em'
    }
  },
  
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },
  
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px'
  },
  
  animations: {
    duration: {
      instant: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
      slowest: '1000ms'
    },
    
    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      glide: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
    }
  },
  
  effects: {
    shadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      glow: {
        blue: '0 0 20px rgba(56, 189, 248, 0.5), 0 0 40px rgba(56, 189, 248, 0.3)',
        orange: '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3)'
      }
    },
    
    blur: {
      sm: '4px',
      base: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px'
    },
    
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px'
    }
  },
  
  zIndex: {
    behind: -1,
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
    notification: 80,
    loader: 90,
    cursor: 9999
  }
};

// Media query helpers
export const media = {
  xs: `@media (min-width: ${theme.breakpoints.xs})`,
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  '2xl': `@media (min-width: ${theme.breakpoints['2xl']})`,
  '3xl': `@media (min-width: ${theme.breakpoints['3xl']})`
};

// Animation presets
export const animations = {
  fadeIn: `
    opacity: 0;
    animation: fadeIn ${theme.animations.duration.normal} ${theme.animations.easing.easeOut} forwards;
    @keyframes fadeIn {
      to { opacity: 1; }
    }
  `,
  
  slideUp: `
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp ${theme.animations.duration.slow} ${theme.animations.easing.easeOut} forwards;
    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  
  glow: (color = theme.colors.neonBlue) => `
    animation: glow 2s ease-in-out infinite alternate;
    @keyframes glow {
      from { box-shadow: 0 0 10px ${color}40; }
      to { box-shadow: 0 0 20px ${color}80, 0 0 30px ${color}40; }
    }
  `
};

export default theme;