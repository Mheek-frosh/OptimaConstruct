import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => (
  <section id="about" className="relative py-24 bg-charcoal text-white overflow-hidden">
    <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
    <div className="container mx-auto px-6 lg:px-12 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight mb-6">
            Who we serve
          </h2>
          <p className="text-white/80 font-inter text-lg leading-relaxed">
            Mid-sized contractors, developers, engineering consultants, commercial managers, owner representatives, and operations leaders.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
            alt="Construction site management"
            className="rounded-2xl w-full object-cover h-80 lg:h-96"
          />
          <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
