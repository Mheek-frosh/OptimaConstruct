import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Briefcase, Eye, Target, Shield } from 'lucide-react';

const benefits = [
  { icon: AlertCircle, title: 'Earlier warning on delay and delivery risk' },
  { icon: Briefcase, title: 'Less low-value admin work for PMs and technical staff' },
  { icon: Eye, title: 'Better visibility into procurement and cost drift' },
  { icon: Target, title: 'Stronger decision making across leadership and operations' },
  { icon: Shield, title: 'Better protection of project margin' },
];

const WhyClientsCare = () => (
  <section id="why" className="relative py-24 bg-charcoal text-white">
    <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
    <div className="container mx-auto px-6 lg:px-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight mb-6">
          Why clients care
        </h2>
        <p className="text-white/80 font-inter text-lg">
          Optima Construct helps construction firms see earlier, act sooner, and protect margin—without forcing a full systems replacement.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {benefits.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <item.icon size={32} className="text-white/90 mb-4" />
            <p className="font-inter text-white/90 text-sm leading-relaxed">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyClientsCare;
