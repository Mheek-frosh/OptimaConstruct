import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamsPage from './pages/TeamsPage';
import CareersPage from './pages/CareersPage';
import BootLoader from './components/BootLoader';
import './index.css';

function App() {
  const [booting, setBooting] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {booting && <BootLoader onComplete={() => setBooting(false)} />}
      </AnimatePresence>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
