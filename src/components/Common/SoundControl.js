import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '@contexts/AudioContext';

const ControlButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.silverGray};
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.neonBlue};
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
    
    svg {
      fill: ${({ theme }) => theme.colors.neonBlue};
    }
  }

  &.active {
    border-color: ${({ theme }) => theme.colors.neonBlue};
    background: rgba(56, 189, 248, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
`;

const SoundIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.silverGray};
  transition: fill 0.3s ease;
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 10px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.darkGray};
  border: 1px solid ${({ theme }) => theme.colors.silverGray};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  white-space: nowrap;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 20px;
    border: 6px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.silverGray};
  }
`;

const SoundControl = () => {
  const { isMuted, toggleMute, playSound } = useAudio();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    toggleMute();
    playSound('click');
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
    playSound('hover');
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <ControlButton
      className={!isMuted ? 'active' : ''}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isMuted ? (
        <SoundIcon viewBox="0 0 24 24">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </SoundIcon>
      ) : (
        <SoundIcon viewBox="0 0 24 24">
          <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/>
        </SoundIcon>
      )}
      
      <AnimatePresence>
        {showTooltip && (
          <Tooltip
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
          >
            {isMuted ? 'Enable Sound' : 'Disable Sound'}
          </Tooltip>
        )}
      </AnimatePresence>
    </ControlButton>
  );
};

export default SoundControl;