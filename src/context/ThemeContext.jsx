import React, { createContext, useContext, useState, useEffect } from 'react';

// Persisted key used across inline script and React theme context
const STORAGE_KEY = 'optima-theme';

// Central context for reading and updating the current theme
const ThemeContext = createContext();

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export const ThemeProvider = ({ children }) => {
  // Initialise from localStorage or system preference so UI matches user/device
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme to <html> so Tailwind's dark mode and CSS color-scheme react correctly
  const syncThemeToDOM = (t) => {
    const root = document.documentElement;
    if (t === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', t);
    root.style.colorScheme = t;
  };

  // Keep local state, DOM and localStorage in sync when theme changes
  useEffect(() => {
    syncThemeToDOM(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Listen for theme changes from other tabs/windows and mirror them here
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Toggle between light and dark, optionally using view transitions for a radial reveal
  const toggleTheme = (e) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      syncThemeToDOM(nextTheme);
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      const isDark = nextTheme === 'dark';
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: isDark ? '::view-transition-new(root)' : '::view-transition-old(root)'
        }
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};
