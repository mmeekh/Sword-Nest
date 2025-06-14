import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMousePosition } from '@hooks/useMousePosition';

const CursorWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.cursor};
  mix-blend-mode: difference;
`;

const CursorOuter = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.neonBlue};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.15s ease-out;
  opacity: ${({ $isVisible }) => ($isVisible ? 0.8 : 0)};

  &.hovering {
    width: 60px;
    height: 60px;
    border-color: ${({ theme }) => theme.colors.orange};
  }
`;

const CursorInner = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.colors.neonBlue};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

  &.hovering {
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.orange};
  }
`;

const CustomCursor = () => {
  const { mousePosition } = useMousePosition();
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) {
      setIsVisible(false);
      return;
    }

    // Update outer cursor with smooth follow
    const updateOuterPosition = () => {
      setOuterPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }));
    };

    const animationFrame = requestAnimationFrame(function animate() {
      updateOuterPosition();
      requestAnimationFrame(animate);
    });

    // Handle cursor visibility
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Handle hover states
    const handleElementHover = (e) => {
      const element = e.target;
      const isInteractive = 
        element.tagName === 'A' ||
        element.tagName === 'BUTTON' ||
        element.classList.contains('clickable') ||
        element.closest('a') ||
        element.closest('button');
      
      setIsHovering(isInteractive);
    };

    document.addEventListener('mouseover', handleElementHover);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [mousePosition]);

  // Don't render on touch devices
  if ('ontouchstart' in window) return null;

  return (
    <CursorWrapper>
      <CursorOuter
        className={isHovering ? 'hovering' : ''}
        $isVisible={isVisible}
        style={{
          left: `${outerPosition.x}px`,
          top: `${outerPosition.y}px`,
        }}
      />
      <CursorInner
        className={isHovering ? 'hovering' : ''}
        $isVisible={isVisible}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </CursorWrapper>
  );
};

export default CustomCursor;