import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Calendar, ClipboardList, FileText, DollarSign, Mail, AlertTriangle } from 'lucide-react';

const WhatWeSolve = () => {
  const fragmentSources = [
    { icon: Calendar, label: 'Schedules' },
    { icon: FileSpreadsheet, label: 'Spreadsheets' },
    { icon: ClipboardList, label: 'Procurement trackers' },
    { icon: FileText, label: 'Daily site reports' },
    { icon: FileText, label: 'Contracts' },
    { icon: DollarSign, label: 'Cost reports' },
    { icon: Mail, label: 'Emails and meeting notes' },
  ];

  const problems = [
    'Delayed visibility into project issues',
    'Heavy admin burden on already stretched teams',
    'Slower decisions and reactive management',
    'Weak procurement foresight',
    'Reduced schedule control',
    'Margin erosion and avoidable risk',
  ];

  return (
    <section id="solve" className="relative py-24 bg-white text-charcoal">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight mb-6">
            What we solve
          </h2>
          <p className="text-charcoal/70 font-inter text-lg">
            Construction firms are not short on information. They are short on clear, timely, decision-ready insight.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-orbitron font-semibold text-lg tracking-wider uppercase text-charcoal/70 mb-6">
              Critical project information often lives across:
            </h3>
            <div className="flex flex-wrap gap-3">
              {fragmentSources.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-charcoal/5 border border-charcoal/10 text-charcoal font-inter text-sm"
                >
                  <item.icon size={16} className="text-charcoal/60" />
                  {item.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-orbitron font-semibold text-lg tracking-wider uppercase text-charcoal/70 mb-6 flex items-center gap-2">
              <AlertTriangle size={20} />
              That fragmentation creates:
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-charcoal/90 font-inter"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-charcoal/40 flex-shrink-0" />
                  {problem}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolve;
