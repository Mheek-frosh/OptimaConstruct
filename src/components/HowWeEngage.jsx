import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  { num: '01', label: 'Diagnostic' },
  { num: '02', label: 'Pilot' },
  { num: '03', label: 'Integrator' },
  { num: '04', label: 'Rollout' },
];

const HowWeEngage = () => (
  <section id="engage" className="relative py-24 bg-charcoal/5">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight text-charcoal mb-6">
            How we engage
          </h2>
          <p className="text-charcoal/70 font-inter text-lg leading-relaxed mb-8">
            We do not begin with a full-scale rollout. We begin with one painful workflow, one measurable pilot, and one clear business case.
          </p>
          <p className="text-charcoal/80 font-inter leading-relaxed">
            Our five-phase approach delivers results incrementally, de-risks implementation, and builds stakeholder confidence at each step.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex flex-col gap-4">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-charcoal/10 hover:border-charcoal/20 hover:shadow-lg transition-all group"
              >
                <span className="font-orbitron font-bold text-2xl text-charcoal/30 group-hover:text-charcoal transition-colors">
                  {phase.num}
                </span>
                <span className="font-orbitron font-semibold text-charcoal text-lg">
                  {phase.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-charcoal text-white">
            <p className="font-orbitron font-bold text-sm tracking-wider uppercase mb-2">
              Commercial message
            </p>
            <p className="font-inter text-white/90">
              Optima Construct helps construction firms see earlier, act sooner, and protect margin—without forcing a full systems replacement.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowWeEngage;
