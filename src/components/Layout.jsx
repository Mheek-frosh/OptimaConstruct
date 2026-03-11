import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const { isDark } = useTheme();
  return (
  <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-charcoalDark text-white' : 'bg-white text-charcoal'}`}>
    <ScrollProgress />
    <BackToTop />
    <Navbar />
    <main role="main">
      <Outlet />
    </main>
    <Footer />
  </div>
  );
};

export default Layout;
