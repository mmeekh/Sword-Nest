import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollProgress } from '@hooks/useScrollProgress';

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => theme.colors.neonBlue};
  transform-origin: left;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.neonBlue};
`;

const ScrollProgress = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <ProgressBar
      style={{
        scaleX: scrollProgress / 100,
      }}
      transition={{
        ease: 'linear',
      }}
    />
  );
};

export default ScrollProgress;