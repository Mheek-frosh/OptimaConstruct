import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const BootLoader = ({ onComplete }) => {
  const { isDark } = useTheme();
  const [text, setText] = useState('');
  const fullText = 'OPTIMA CONSTRUCT // INITIALIZING...';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(onComplete, 600);
      }
    }, 45);
    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center font-orbitron ${isDark ? 'bg-charcoalDark' : 'bg-white'}`}
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className={`h-[2px] mb-8 ${isDark ? 'bg-white' : 'bg-charcoal'}`}
        />
        <h1 className={`tracking-[0.3em] text-sm font-bold min-h-[24px] flex items-center ${isDark ? 'text-white' : 'text-charcoal'}`}>
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className={`inline-block w-2 h-5 ml-1 ${isDark ? 'bg-white' : 'bg-charcoal'}`}
          />
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
          className={`h-[2px] mt-8 ${isDark ? 'bg-white' : 'bg-charcoal'}`}
        />
      </div>
      <div className={`absolute bottom-12 text-[10px] tracking-widest font-mono ${isDark ? 'text-white/40' : 'text-charcoal/40'}`}>
        OCA // CONSTRUCTION INTELLIGENCE v1.0
      </div>
    </motion.div>
  );
};

export default BootLoader;
