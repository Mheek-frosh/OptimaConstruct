import React, { useState } from 'react';

/**
 * Logo - uses /logo.png from public folder. Inverts for dark backgrounds.
 * @param dark - when true, inverts for visibility on dark backgrounds (footer, nav in dark mode)
 */
const Logo = ({ className = 'h-10', dark = false }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className={`${className} font-orbitron font-bold text-xl ${dark ? 'text-white' : 'text-charcoal'}`}>
        OCA
      </span>
    );
  }

  return (
    <img
      src="/logo.png"
      alt="Optima Construct"
      className={`${className} w-auto object-contain ${dark ? 'brightness-0 invert' : ''}`}
      onError={() => setImgError(true)}
    />
  );
};

export default Logo;
