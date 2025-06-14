import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* CSS Reset and Base Styles */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Root Variables */
  :root {
    /* Colors */
    --color-charcoal-black: ${({ theme }) => theme.colors.charcoalBlack};
    --color-neon-blue: ${({ theme }) => theme.colors.neonBlue};
    --color-orange: ${({ theme }) => theme.colors.orange};
    --color-silver-gray: ${({ theme }) => theme.colors.silverGray};
    --color-light-gray: ${({ theme }) => theme.colors.lightGray};
    
    /* Typography */
    --font-primary: ${({ theme }) => theme.typography.fontFamily.primary};
    --font-mono: ${({ theme }) => theme.typography.fontFamily.mono};
    
    /* Animations */
    --transition-fast: ${({ theme }) => theme.animations.duration.fast} ${({ theme }) => theme.animations.easing.easeOut};
    --transition-normal: ${({ theme }) => theme.animations.duration.normal} ${({ theme }) => theme.animations.easing.easeOut};
    --transition-slow: ${({ theme }) => theme.animations.duration.slow} ${({ theme }) => theme.animations.easing.smooth};
    
    /* Spacing */
    --container-padding: ${({ theme }) => theme.spacing[4]};
    --section-padding: ${({ theme }) => theme.spacing[20]};
  }

  /* HTML & Body */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: var(--font-primary);
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.charcoalBlack};
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
    cursor: none; /* Custom cursor will be used */
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.darkGray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.silverGray};
    border-radius: 4px;
    transition: background var(--transition-fast);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.neonBlue};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeight.light};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wider};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.hero};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heroSpacing};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: none; /* Custom cursor */
  }

  button {
    font-family: inherit;
    cursor: none; /* Custom cursor */
    border: none;
    outline: none;
    background: none;
  }

  /* Utility Classes */
  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }

  .section {
    padding: var(--section-padding) 0;
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Responsive */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    html {
      font-size: 14px;
    }
    
    :root {
      --container-padding: ${({ theme }) => theme.spacing[3]};
      --section-padding: ${({ theme }) => theme.spacing[16]};
    }
  }
`;

export default GlobalStyles;