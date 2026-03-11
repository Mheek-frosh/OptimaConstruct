import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Zap, Shield } from 'lucide-react';

const values = [
  { icon: Target, title: 'Outcome-focused', desc: 'We start with one painful workflow and one measurable business case—not a full-scale replacement.' },
  { icon: Users, title: 'Client-centred', desc: "Every engagement is tailored to your firm's context, capacity, and constraints." },
  { icon: Zap, title: 'Pragmatic', desc: 'We deliver incremental value and de-risk implementation at every phase.' },
  { icon: Shield, title: 'Independent', desc: 'No vendor alignment. Our recommendations are based solely on your needs.' },
];

const phases = [
  { num: '01', label: 'Diagnostic', desc: 'Understand your workflows, data, and pain points.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80' },
  { num: '02', label: 'Pilot', desc: 'Run a focused pilot on one workflow with clear KPIs.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
  { num: '03', label: 'Integrator', desc: 'Connect systems, automate reporting, and refine processes.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80' },
  { num: '04', label: 'Rollout', desc: 'Scale what works with adoption and governance in place.', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80' },
];

const AboutPage = () => (
  <>
    {/* Hero */}
    <section className="pt-32 pb-20 bg-white dark:bg-charcoalDark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-charcoal/5 dark:bg-white/10 text-charcoal/70 dark:text-white/70 font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-6">About Us</span>
            <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-tight text-charcoal dark:text-white mb-6 leading-tight">
              Construction intelligence for faster decisions
            </h1>
            <p className="text-charcoal/70 dark:text-white/70 font-inter text-lg leading-relaxed mb-8">
              Optima Construct helps mid-sized construction firms see earlier, act sooner, and protect margin—without forcing a full systems replacement. We combine industry depth with pragmatic technology and process design.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity">
              View our services <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="Construction site" className="rounded-2xl w-full object-cover h-80 lg:h-96" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-charcoal/5 dark:bg-white/5 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Who we serve with image */}
    <section className="py-20 bg-charcoal/5 dark:bg-charcoal text-charcoal dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-orbitron font-bold text-3xl tracking-tight mb-6">Who we serve</h2>
            <p className="text-charcoal/80 dark:text-white/80 font-inter text-lg max-w-xl leading-relaxed mb-4">
              Mid-sized contractors, developers, engineering consultants, commercial managers, owner representatives, and operations leaders.
            </p>
            <p className="text-charcoal/70 dark:text-white/70 font-inter leading-relaxed">
              We work with firms that are stretched for capacity and visibility—not for data. Our clients want clearer insight, less admin burden, and earlier warning on risk and margin pressure.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction team" className="rounded-2xl w-full object-cover h-72" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Our approach with images */}
    <section className="py-20 bg-white dark:bg-charcoalDark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl tracking-tight text-charcoal dark:text-white mb-12">Our approach</motion.h2>
        <div className="space-y-12">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              <div className="flex-1">
                <span className="font-orbitron font-bold text-4xl text-charcoal/20 dark:text-white/20 mb-2 block">{phase.num}</span>
                <h3 className="font-orbitron font-semibold text-charcoal dark:text-white text-xl mb-2">{phase.label}</h3>
                <p className="text-charcoal/70 dark:text-white/70 font-inter">{phase.desc}</p>
              </div>
              <div className="flex-1 w-full lg:max-w-md">
                <img src={phase.image} alt={phase.label} className="rounded-2xl w-full object-cover h-48" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values with image strip */}
    <section className="py-20 bg-charcoal/5 dark:bg-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-orbitron font-bold text-3xl tracking-tight text-charcoal dark:text-white mb-6">What we believe</h2>
            <p className="text-charcoal/70 dark:text-white/70 font-inter mb-8">
              Our values guide how we work with clients. We focus on outcomes, listen first, and stay pragmatic and independent.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="Collaboration" className="rounded-xl w-full object-cover h-32" />
            <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80" alt="Construction" className="rounded-xl w-full object-cover h-32 mt-4" />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-white dark:bg-charcoalLight/30 border border-charcoal/5 dark:border-white/5 hover:shadow-lg transition-shadow">
              <v.icon size={32} className="text-charcoal dark:text-white mb-4" />
              <h3 className="font-orbitron font-semibold text-charcoal dark:text-white text-lg mb-2">{v.title}</h3>
              <p className="text-charcoal/70 dark:text-white/70 font-inter">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-charcoal/10 dark:bg-charcoal text-charcoal dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <p className="text-charcoal/80 dark:text-white/80 font-inter mb-6 max-w-xl mx-auto">Let's discuss how we can help you see earlier and act sooner.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-colors">
          Get in touch <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </>
);

export default AboutPage;
