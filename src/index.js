import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Performance measurement
import reportWebVitals from './utils/reportWebVitals';

// GSAP Registration
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Configure GSAP defaults
gsap.config({
  nullTargetWarn: false,
  force3D: true
});

// Set default ease
gsap.defaults({
  ease: 'power2.inOut',
  duration: 0.8
});

// Check for WebGL support
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
};

// Device detection and performance
const initializeApp = () => {
  // Add device classes to body
  const html = document.documentElement;
  
  // Check WebGL
  if (!checkWebGLSupport()) {
    html.classList.add('no-webgl');
    console.warn('WebGL not supported. Some features may be limited.');
  }
  
  // Check touch support
  if ('ontouchstart' in window) {
    html.classList.add('touch-device');
  } else {
    html.classList.add('no-touch');
  }
  
  // Check reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    html.classList.add('reduced-motion');
    gsap.globalTimeline.timeScale(0);
  }
  
  // Performance mode based on device
  const checkPerformance = () => {
    const memory = navigator.deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    
    if (memory < 4 || cores < 4) {
      html.classList.add('low-performance');
      return 'low';
    } else if (memory >= 8 && cores >= 8) {
      html.classList.add('high-performance');
      return 'high';
    }
    return 'medium';
  };
  
  window.PERFORMANCE_MODE = checkPerformance();
};

// Initialize app settings
initializeApp();

// Create React root and render
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals (optional)
reportWebVitals((metric) => {
  // Send to analytics
  console.log(metric);
  
  // Example: Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
    });
  }
});

// Service Worker registration (optional for PWA)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered:', registration);
      })
      .catch((error) => {
        console.log('SW registration failed:', error);
      });
  });
}

// Hot Module Replacement for development
if (module.hot) {
  module.hot.accept();
}