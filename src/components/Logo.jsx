import React from 'react';
/**
 * Logo - uses /logo.png from public folder. Inverts for dark backgrounds.
 * @param dark - when true, inverts for visibility on dark backgrounds (footer, nav in dark mode)
 */
const Logo = ({ className = 'h-10 lg:h-12', dark = false }) => {
  return (
    <img
      src={dark ? '/darlmode.png' : '/lightmode.png'}
      alt="Optima Construct"
      className={`${className} w-auto object-contain transition-all duration-300`}
    />
  );
};

export default Logo;
