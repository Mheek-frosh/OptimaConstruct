import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Optima Construct helped us move from scattered reporting to decision-ready project intelligence. We now see project drift weeks earlier.',
    role: 'Operations Director',
    company: 'Mid-sized General Contractor',
  },
  {
    quote: 'The Workforce Productivity Accelerator took repetitive admin weight off our stretched team. Our PMs finally focus on execution.',
    role: 'Project Manager',
    company: 'Commercial Developer',
  },
  {
    quote: 'We discovered margin erosion too late in the past. The Cost and Risk Control Suite gives us earlier visibility into cost overrun risk.',
    role: 'Commercial Manager',
    company: 'Engineering Consultant',
  },
];

const CaseStudiesSection = () => (
  <section className="relative py-24 bg-white">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight text-charcoal mb-6">
          What clients say
        </h2>
        <p className="text-charcoal/70 font-inter text-lg">
          Construction leaders trust Optima Construct for clear, timely insight.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-charcoal/5 border border-charcoal/5 hover:border-charcoal/10 transition-all"
          >
            <Quote size={32} className="text-charcoal/30 mb-6" />
            <p className="text-charcoal/90 font-inter leading-relaxed mb-6">{t.quote}</p>
            <p className="font-orbitron font-semibold text-charcoal text-sm">{t.role}</p>
            <p className="text-charcoal/60 font-inter text-sm">{t.company}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
