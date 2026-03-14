import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { isDark } = useTheme();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const footerLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Teams', to: '/teams' },
    { label: 'Careers', to: '/careers' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer id="footer" className="bg-white dark:bg-charcoal text-charcoal dark:text-white py-16 px-6 relative overflow-hidden border-t border-charcoal/10 dark:border-white/10 transition-colors duration-300">
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div>
            <Logo className="h-8" dark={isDark} />
            <p className="mt-4 text-charcoal/70 dark:text-white/60 font-inter text-sm max-w-xs">
              Construction intelligence for faster decisions, stronger delivery, and better margin control.
            </p>
          </div>
          <div>
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-widest mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link key={link.label} to={link.to} className="text-[11px] font-orbitron tracking-widest uppercase text-charcoal/60 dark:text-white/60 hover:text-charcoal dark:hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-widest mb-4">Stay Updated</h4>
            {subscribed ? (
              <p className="text-charcoal dark:text-white/90 font-orbitron text-sm uppercase tracking-wider">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-charcoal/5 dark:bg-white/10 border border-charcoal/20 dark:border-white/20 rounded-xl text-charcoal dark:text-white placeholder:text-charcoal/40 dark:placeholder:text-white/40 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-charcoal/20 dark:focus:ring-white/30"
                  aria-label="Newsletter email"
                />
                <button type="submit" className="px-5 py-3 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-colors">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-charcoal/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-inter uppercase tracking-widest text-charcoal/50 dark:text-white/40">
            © {new Date().getFullYear()} Optima Construct. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/optimaconstructai?igsh=ZDQ1aDB2NXRteDE4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 flex items-center justify-center text-charcoal/70 dark:text-white/60 hover:text-charcoal dark:hover:text-white hover:border-charcoal/20 dark:hover:border-white/20 transition-all" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 flex items-center justify-center text-charcoal/70 dark:text-white/60 hover:text-charcoal dark:hover:text-white hover:border-charcoal/20 dark:hover:border-white/20 transition-all" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:contact@optimaconstructai.com" className="w-10 h-10 rounded-xl bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 flex items-center justify-center text-charcoal/70 dark:text-white/60 hover:text-charcoal dark:hover:text-white hover:border-charcoal/20 dark:hover:border-white/20 transition-all" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
