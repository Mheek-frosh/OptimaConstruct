import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';

const CareersPage = () => (
  <>
    <section className="pt-32 pb-20 bg-white dark:bg-charcoalDark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-charcoal/5 dark:bg-white/10 text-charcoal/70 dark:text-white/70 font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Careers</span>
            <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-tight text-charcoal dark:text-white mb-6 leading-tight">
              Build with us
            </h1>
            <p className="text-charcoal/70 dark:text-white/70 font-inter text-lg leading-relaxed mb-8">
              Optima Construct is growing. We’re looking for people who want to help construction firms see earlier, act sooner, and protect margin.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity">
              Get in touch <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Career growth" className="rounded-2xl w-full object-cover h-80 lg:h-96" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-charcoal/5 dark:bg-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl tracking-tight text-charcoal dark:text-white mb-12">Why join Optima Construct</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Meaningful work', desc: 'Help construction firms make better decisions and protect margin in a critical industry.' },
            { title: 'Growth mindset', desc: 'We’re early-stage and evolving. There’s room to shape your role and our direction.' },
            { title: 'Construction + technology', desc: 'Work at the intersection of construction delivery and intelligent systems.' },
            { title: 'Flexible engagement', desc: 'We value output and impact. Flexible arrangements for the right fit.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-white dark:bg-charcoalLight/50 border border-charcoal/5 dark:border-white/10 flex gap-6">
              <Briefcase size={28} className="text-charcoal dark:text-white flex-shrink-0" />
              <div>
                <h3 className="font-orbitron font-semibold text-charcoal dark:text-white text-lg mb-2">{item.title}</h3>
                <p className="text-charcoal/70 dark:text-white/70 font-inter">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-charcoal/10 dark:bg-charcoal text-charcoal dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-charcoal/80 dark:text-white/80 font-inter mb-6">
          Don’t see a role that fits? We’re always interested in hearing from talented people. Send us a note and tell us how you’d like to contribute.
        </motion.p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-colors">
          Contact us <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </>
);

export default CareersPage;
