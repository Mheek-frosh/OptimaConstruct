import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, AlertCircle, Briefcase, Eye, Target, Shield } from 'lucide-react';

const benefits = [
  { icon: AlertCircle, title: 'Earlier warning on delay and delivery risk' },
  { icon: Briefcase, title: 'Less admin work for PMs and technical staff' },
  { icon: Eye, title: 'Better visibility into procurement and cost drift' },
  { icon: Target, title: 'Stronger decision making across operations' },
  { icon: Shield, title: 'Better protection of project margin' },
];

const phases = [
  { num: '01', label: 'Diagnostic' },
  { num: '02', label: 'Pilot' },
  { num: '03', label: 'Integrator' },
  { num: '04', label: 'Rollout' },
];

const testimonials = [
  { quote: 'Optima Construct helped us move from scattered reporting to decision-ready project intelligence. We now see project drift weeks earlier.', role: 'Operations Director', company: 'General Contractor' },
  { quote: 'The Workforce Productivity Accelerator took repetitive admin weight off our stretched team. Our PMs finally focus on execution.', role: 'Project Manager', company: 'Commercial Developer' },
];

const HomePage = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-screen w-full bg-white dark:bg-charcoalDark text-charcoal dark:text-white overflow-hidden flex flex-col items-center justify-center pt-24 pb-16">
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920')" }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1.5 rounded-full bg-charcoal/5 dark:bg-white/10 text-charcoal/70 dark:text-white/70 font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
          Construction Intelligence
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-charcoal dark:text-white tracking-tight mb-6 leading-tight">
          AI Construction Planning and Cost Estimation Platform
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-charcoal/70 dark:text-white/70 max-w-2xl mx-auto mb-12 font-inter">
          Optima Construct AI helps builders and engineers optimize construction projects using intelligent automation and data-driven insights.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/services" className="group flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron text-sm font-bold tracking-wider uppercase hover:bg-charcoalLight transition-all">
            Explore services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-charcoal/20 dark:border-white/30 text-charcoal dark:text-white font-orbitron text-sm font-bold tracking-wider uppercase hover:border-charcoal/40 hover:bg-charcoal/5 transition-all">
            Get in touch
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '3', label: 'Focused systems' },
            { value: '4', label: 'Phase approach' },
            { value: '9+', label: 'Core capabilities' },
            { value: '1', label: 'Workflow at a time' },
          ].map((stat, i) => (
            <div key={i}>
              <span className="block text-2xl md:text-3xl font-orbitron font-bold text-charcoal dark:text-white">{stat.value}</span>
              <span className="text-xs font-orbitron tracking-widest text-charcoal/60 dark:text-white/60 uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Who we serve - condensed */}
    <section className="py-20 bg-charcoal/5 dark:bg-charcoal text-charcoal dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight mb-4">Who we serve</h2>
            <p className="text-charcoal/80 dark:text-white/80 font-inter text-lg">Mid-sized contractors, developers, engineering consultants, commercial managers, owner representatives, and operations leaders.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="Construction" className="rounded-2xl w-full object-cover h-64 lg:h-80" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* What we solve - brief */}
    <section className="py-20 bg-white dark:bg-charcoalDark">
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight text-charcoal dark:text-white mb-6">What we solve</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-charcoal/70 dark:text-white/70 font-inter text-lg mb-4">
          Construction firms are not short on information. They are short on clear, timely, decision-ready insight.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-charcoal/60 dark:text-white/60 font-inter">
          Critical project information lives across schedules, spreadsheets, procurement trackers, reports, contracts, and emails—creating delayed visibility, heavy admin burden, and margin erosion.
        </motion.p>
      </div>
    </section>

    {/* What we deliver - teaser + CTA */}
    <section className="py-20 bg-charcoal/5 dark:bg-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight text-charcoal dark:text-white mb-4">What we deliver</h2>
          <p className="text-charcoal/70 dark:text-white/70 font-inter text-lg">Three focused systems to reduce decision latency: Project Intelligence, Workforce Productivity, and Cost & Risk Control.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-12">
          {['Project Intelligence Systems', 'Workforce Productivity Systems', 'Cost and Risk Control Systems'].map((sys, i) => (
            <span key={i} className="px-5 py-2.5 rounded-full bg-charcoal/15 dark:bg-white/20 text-charcoal dark:text-white font-orbitron text-xs font-bold tracking-wider border border-charcoal/20 dark:border-white/20">{sys}</span>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-charcoal dark:text-white font-orbitron font-semibold text-sm tracking-wider hover:underline">
            View all services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Why clients care */}
    <section className="py-20 bg-charcoal/5 dark:bg-charcoal text-charcoal dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight text-center mb-16">Why clients care</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 hover:bg-charcoal/10 dark:hover:bg-white/10 transition-all">
              <item.icon size={28} className="text-charcoal dark:text-white/90 mb-4" />
              <p className="font-inter text-charcoal/90 dark:text-white/90 text-sm">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How we engage */}
    <section className="py-20 bg-white dark:bg-charcoalDark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight text-charcoal dark:text-white mb-6">How we engage</h2>
            <p className="text-charcoal/70 dark:text-white/70 font-inter text-lg mb-8">
              We begin with one painful workflow, one measurable pilot, and one clear business case—not a full-scale rollout.
            </p>
            <div className="flex flex-wrap gap-3">
              {phases.map((p, i) => (
                <span key={i} className="px-4 py-2 rounded-xl bg-charcoal/5 dark:bg-white/10 border border-charcoal/10 dark:border-white/10 font-orbitron font-semibold text-charcoal dark:text-white text-sm">{p.num} {p.label}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" alt="Construction collaboration" className="rounded-2xl w-full object-cover h-72" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-charcoal/5 dark:bg-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl tracking-tight text-charcoal dark:text-white text-center mb-12">What clients say</motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-white dark:bg-charcoalLight/30 border border-charcoal/5 dark:border-white/5 shadow-sm">
              <p className="text-charcoal/90 dark:text-white/90 font-inter leading-relaxed mb-4 italic">"{t.quote}"</p>
              <p className="font-orbitron font-semibold text-charcoal dark:text-white text-sm">{t.role}</p>
              <p className="text-charcoal/60 dark:text-white/60 font-inter text-sm">{t.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-charcoal/10 dark:bg-charcoal text-charcoal dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight mb-4">Ready to get started?</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-charcoal/70 dark:text-white/70 font-inter text-lg mb-8 max-w-xl mx-auto">
          Let's discuss your next pilot. We begin with one workflow, one measurable outcome.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-colors">
            Contact Us <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default HomePage;
