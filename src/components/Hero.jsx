import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => (
  <section id="hero" className="relative min-h-screen w-full bg-white text-charcoal overflow-hidden flex flex-col items-center justify-center pt-24 pb-16">
    <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920')" }}
    />
    
    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-charcoal/5 text-charcoal/70 font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase">
          Construction Intelligence
        </span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-charcoal tracking-tight mb-6 leading-[1.05]"
      >
        See earlier.
        <br />
        <span className="text-charcoal/70">Act sooner.</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-12 font-inter"
      >
        Construction intelligence for faster decisions, stronger delivery, and better margin control.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="#packages"
          className="group flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-white font-orbitron text-sm font-bold tracking-wider uppercase hover:bg-charcoalLight transition-all"
        >
          Explore packages
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#services"
          className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-charcoal/20 text-charcoal font-orbitron text-sm font-bold tracking-wider uppercase hover:border-charcoal/40 hover:bg-charcoal/5 transition-all"
        >
          View services
        </a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {[
          { value: '3', label: 'Focused systems' },
          { value: '5', label: 'Phase approach' },
          { value: '9+', label: 'Core capabilities' },
          { value: '1', label: 'Painful workflow at a time' },
        ].map((stat, i) => (
          <div key={i}>
            <span className="block text-2xl md:text-3xl font-orbitron font-bold text-charcoal">{stat.value}</span>
            <span className="text-xs font-orbitron tracking-widest text-charcoal/60 uppercase">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
