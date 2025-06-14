import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

// Theme and Styles
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

// Contexts
import { AudioProvider } from '@contexts/AudioContext';
import { LoadingProvider } from '@contexts/LoadingContext';

// Components
import CustomCursor from '@components/Common/CustomCursor';
import LoadingScreen from '@components/Common/LoadingScreen';
import Navigation from '@components/Navigation/Navigation';
import ScrollProgress from '@components/Common/ScrollProgress';
import SoundControl from '@components/Common/SoundControl';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const InsightsPage = lazy(() => import('./pages/InsightsPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Routes configuration
import { ROUTES } from '@utils/constants';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Check if first visit
    const hasVisited = localStorage.getItem('swordNestVisited');
    if (hasVisited) {
      setIsFirstVisit(false);
      setIsLoading(false);
    } else {
      // Simulate initial loading for first-time visitors
      const loadTimer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('swordNestVisited', 'true');
      }, 3000);
      
      return () => clearTimeout(loadTimer);
    }

    // Performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
      });
    }

    // Prevent right-click on production
    if (process.env.NODE_ENV === 'production') {
      const preventRightClick = (e) => e.preventDefault();
      document.addEventListener('contextmenu', preventRightClick);
      return () => document.removeEventListener('contextmenu', preventRightClick);
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LoadingProvider>
          <AudioProvider>
            <Router>
              <AnimatePresence mode="wait">
                {isLoading && isFirstVisit ? (
                  <LoadingScreen key="loading" />
                ) : (
                  <>
                    <CustomCursor />
                    <ScrollProgress />
                    <Navigation />
                    <SoundControl />
                    
                    <Suspense fallback={<LoadingScreen simple />}>
                      <Routes>
                        <Route path={ROUTES.home} element={<HomePage />} />
                        <Route path={ROUTES.insights} element={<InsightsPage />} />
                        <Route path={ROUTES.caseStudy} element={<CaseStudyPage />} />
                        <Route path={ROUTES.privacy} element={<PrivacyPage />} />
                        <Route path={ROUTES.terms} element={<TermsPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </Suspense>
                  </>
                )}
              </AnimatePresence>
            </Router>
          </AudioProvider>
        </LoadingProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;