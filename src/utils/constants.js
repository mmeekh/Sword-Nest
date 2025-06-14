// Application-wide constants and configuration

export const APP_CONFIG = {
  name: 'Sword Nest',
  tagline: 'We Forge AI-Powered Brands That Cut Through the Noise',
  description: 'AI-powered creative agency specializing in cutting-edge digital strategies for startups',
  url: 'https://swordnest.com',
  email: 'hello@swordnest.com',
  phone: '+1 (555) 123-4567',
  
  social: {
    twitter: 'https://twitter.com/swordnest',
    linkedin: 'https://linkedin.com/company/swordnest',
    instagram: 'https://instagram.com/swordnest',
    github: 'https://github.com/swordnest'
  }
};

export const NAVIGATION_ITEMS = [
  { id: 'portfolio', label: 'Portfolio', path: '/#portfolio' },
  { id: 'services', label: 'Services', path: '/#services' },
  { id: 'team', label: 'Team', path: '/#team' },
  { id: 'insights', label: 'Insights', path: '/insights' },
  { id: 'contact', label: 'Contact', path: '/#contact' }
];

export const PARTICLE_CONFIG = {
  count: 2000,
  speed: 0.001,
  mouseInfluence: 0.2,
  color: {
    r: 0.22,
    g: 0.74,
    b: 0.97,
    variance: 0.1
  },
  size: {
    min: 1,
    max: 3
  },
  radius: {
    initial: 3,
    explosion: 9
  }
};

export const SWORD_CONFIG = {
  blade: {
    width: 70, // percentage
    height: 4, // pixels
    glowIntensity: 20,
    animationDuration: 2000 // ms
  },
  hilt: {
    width: 15, // percentage
    height: 40, // pixels
    animationDelay: 1500 // ms
  }
};

export const ANIMATION_CONFIG = {
  hero: {
    particleRotationSpeed: 0.5,
    particlePulseSpeed: 2,
    fadeInDelay: 500,
    unsheatheDelay: 500
  },
  scroll: {
    smooth: true,
    duration: 800,
    easing: [0.25, 0.1, 0.25, 1]
  },
  hover: {
    scale: 1.05,
    duration: 300
  },
  pageTransition: {
    duration: 600,
    stagger: 100
  }
};

export const SOUND_CONFIG = {
  enabled: false, // Start muted by default
  volume: {
    master: 0.5,
    ambient: 0.3,
    ui: 0.6,
    effects: 0.8
  },
  files: {
    ambient: '/assets/sounds/ambient.mp3',
    swordDraw: '/assets/sounds/sword-draw.mp3',
    hover: '/assets/sounds/ui-hover.mp3',
    click: '/assets/sounds/ui-click.mp3',
    success: '/assets/sounds/success.mp3'
  }
};

export const PERFORMANCE_CONFIG = {
  fps: {
    target: 60,
    min: 30
  },
  quality: {
    particles: {
      high: 2000,
      medium: 1000,
      low: 500
    },
    shadows: {
      high: true,
      medium: false,
      low: false
    }
  },
  lazy: {
    rootMargin: '50px',
    threshold: 0.1
  }
};

export const SEO_CONFIG = {
  defaultTitle: 'Sword Nest | AI-Powered Creative Agency',
  titleTemplate: '%s | Sword Nest',
  defaultDescription: 'We forge AI-powered brands that cut through the noise. Sword Nest is a cutting-edge creative agency specializing in data-driven strategies for ambitious startups.',
  defaultImage: '/assets/images/og-image.jpg',
  twitterHandle: '@swordnest',
  keywords: [
    'AI marketing',
    'creative agency',
    'startup marketing',
    'brand strategy',
    'performance marketing',
    'AI-powered design',
    'growth marketing',
    'digital transformation'
  ]
};

export const FORM_CONFIG = {
  contact: {
    fields: [
      { name: 'name', type: 'text', required: true, placeholder: 'Your Name' },
      { name: 'email', type: 'email', required: true, placeholder: 'your@email.com' },
      { name: 'company', type: 'text', required: false, placeholder: 'Company (Optional)' },
      { name: 'message', type: 'textarea', required: true, placeholder: 'Tell us about your project...', rows: 5 }
    ],
    submitEndpoint: '/api/contact',
    successMessage: 'Your message has been sent. We\'ll be in touch soon.',
    errorMessage: 'Something went wrong. Please try again or email us directly.'
  }
};

export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920
};

export const Z_INDEX = {
  background: -1,
  content: 1,
  navigation: 100,
  dropdown: 200,
  modal: 300,
  tooltip: 400,
  notification: 500,
  cursor: 9999
};

export const ROUTES = {
  home: '/',
  insights: '/insights',
  caseStudy: '/case-study/:id',
  privacy: '/privacy',
  terms: '/terms'
};

export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  validation: {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    minLength: (min) => `Must be at least ${min} characters`,
    maxLength: (max) => `Must be no more than ${max} characters`
  }
};