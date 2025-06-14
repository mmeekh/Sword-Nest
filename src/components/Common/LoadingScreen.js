import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const draw = keyframes`
  0% {
    stroke-dashoffset: 280;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const LoadingWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.charcoalBlack};
  z-index: ${({ theme }) => theme.zIndex.loader};
`;

const SwordLoader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  
  svg {
    width: 100%;
    height: 100%;
    animation: ${pulse} 2s ease-in-out infinite;
  }
  
  .sword-path {
    fill: none;
    stroke: ${({ theme }) => theme.colors.neonBlue};
    stroke-width: 2;
    stroke-dasharray: 280;
    stroke-dashoffset: 280;
    animation: ${draw} 2s ease-out forwards;
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.neonBlue});
  }
`;

const LoadingText = styled(motion.div)`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.widest};
  color: ${({ theme }) => theme.colors.silverGray};
  text-transform: uppercase;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 2px;
  background: ${({ theme }) => theme.colors.darkGray};
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $progress }) => $progress}%;
    background: ${({ theme }) => theme.colors.neonBlue};
    transition: width 0.3s ease;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.neonBlue};
  }
`;

const SimpleLoader = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.darkGray};
  border-top-color: ${({ theme }) => theme.colors.neonBlue};
  border-radius: 50%;
  animation: ${keyframes`
    to { transform: rotate(360deg); }
  `} 0.8s linear infinite;
`;

const LoadingScreen = ({ simple = false }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (simple) return;

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Complete loading
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsExiting(true), 500);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [simple]);

  if (simple) {
    return (
      <LoadingWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SimpleLoader />
      </LoadingWrapper>
    );
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <LoadingWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <SwordLoader>
            <svg viewBox="0 0 100 100">
              {/* Simplified sword path */}
              <path
                className="sword-path"
                d="M50 10 L50 70 M35 70 L65 70 M40 75 L60 75 M45 80 L55 80 M40 25 L50 15 L60 25"
              />
            </svg>
          </SwordLoader>
          
          <LoadingText
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Forging Excellence
          </LoadingText>
          
          <ProgressBar $progress={progress} />
        </LoadingWrapper>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;