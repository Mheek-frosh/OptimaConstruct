import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ isDark, toggleTheme }) => (
  <button
    type="button"
    onClick={toggleTheme}
    className="relative w-14 h-8 rounded-full flex items-center bg-charcoal/10 dark:bg-white/10 p-1 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-charcoal/20 dark:focus:ring-white/20"
    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    <div className="absolute inset-0 flex justify-between items-center px-1.5 pointer-events-none">
      <Sun size={14} className="text-charcoal/50 dark:text-white/90" />
      <Moon size={14} className="text-charcoal/90 dark:text-white/50" />
    </div>
    <motion.div
      className="z-10 w-6 h-6 rounded-full bg-white dark:bg-charcoal shadow-md flex items-center justify-center pointer-events-none"
      animate={{ x: isDark ? 24 : 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <motion.div animate={{ rotate: isDark ? 360 : 0 }} transition={{ duration: 0.4 }}>
        {isDark ? <Moon size={12} className="text-white" /> : <Sun size={12} className="text-charcoal" />}
      </motion.div>
    </motion.div>
  </button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setAboutDropdownOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', to: '/' },
    {
      label: 'About', to: '/about', hasDropdown: true, children: [
        { label: 'About Us', to: '/about' },
        { label: 'Teams', to: '/teams' },
        { label: 'Careers', to: '/careers' },
      ]
    },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const isAboutActive = location.pathname === '/about' || location.pathname === '/teams' || location.pathname === '/careers';

  const navCls = (path, hasDropdown) => {
    const active = hasDropdown ? isAboutActive : isActive(path);
    return `px-5 py-2 rounded-full text-sm font-orbitron font-medium tracking-wider transition-all duration-200 ${active
        ? 'text-charcoal dark:text-white bg-charcoal/10 dark:bg-white/10'
        : 'text-charcoal dark:text-white/80 hover:text-charcoal dark:hover:text-white hover:bg-charcoal/5 dark:hover:bg-white/5'
      }`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 backdrop-blur-md border-b ${isScrolled
          ? 'bg-white/95 dark:bg-charcoalDark/95 shadow-lg dark:shadow-none border-charcoal/5 dark:border-white/10'
          : 'bg-transparent border-transparent dark:border-transparent'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center text-charcoal dark:text-white transition-colors">
          <Logo dark={isDark} />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className={`flex items-center gap-1 ${navCls(item.to, true)}`}
                  aria-expanded={aboutDropdownOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {aboutDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 py-2 min-w-[180px] rounded-xl bg-white dark:bg-charcoalLight border border-charcoal/10 dark:border-white/10 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-4 py-2.5 text-sm font-orbitron tracking-wider transition-colors ${isActive(child.to)
                              ? 'text-charcoal dark:text-white bg-charcoal/5 dark:bg-white/10'
                              : 'text-charcoal dark:text-white/80 hover:bg-charcoal/5 dark:hover:bg-white/5 hover:text-charcoal dark:hover:text-white'
                            }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={item.label} to={item.to} className={navCls(item.to, false)}>
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron text-xs font-bold tracking-wider uppercase hover:opacity-90 dark:hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <button
            className="p-2 text-charcoal dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-charcoal/5 dark:border-white/10 bg-white dark:bg-charcoalDark"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label}>
                    <p className="py-2 font-orbitron text-xs uppercase tracking-widest text-charcoal/70 dark:text-white/50">About</p>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`block py-2.5 pl-4 font-orbitron text-sm tracking-wider transition-colors ${isActive(child.to) ? 'text-charcoal dark:text-white font-semibold' : 'text-charcoal dark:text-white/70'
                          }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`py-3 font-orbitron text-sm tracking-wider transition-colors ${isActive(item.to) ? 'text-charcoal dark:text-white font-semibold' : 'text-charcoal dark:text-white/70'
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="mt-4 py-3 px-4 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron text-xs font-bold tracking-wider text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
