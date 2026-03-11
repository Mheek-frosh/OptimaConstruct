import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  FileBarChart,
  FileSearch,
  Bot,
  Users,
  Brain,
  TrendingUp,
  ShoppingCart,
  FileCheck,
} from 'lucide-react';

const services = [
  { icon: Activity, label: 'Delay prediction', category: 'Project Intelligence' },
  { icon: FileBarChart, label: 'Reporting automation', category: 'Project Intelligence' },
  { icon: FileSearch, label: 'Document intelligence', category: 'Project Intelligence' },
  { icon: Bot, label: 'Admin automation', category: 'Workforce Productivity' },
  { icon: Users, label: 'Resource planning', category: 'Workforce Productivity' },
  { icon: Brain, label: 'Knowledge capture', category: 'Workforce Productivity' },
  { icon: TrendingUp, label: 'Cost forecasting', category: 'Cost & Risk Control' },
  { icon: ShoppingCart, label: 'Procurement intelligence', category: 'Cost & Risk Control' },
  { icon: FileCheck, label: 'Contract risk workflows', category: 'Cost & Risk Control' },
];

const ServicesSection = () => (
  <section id="services" className="relative py-24 bg-charcoal/5">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight text-charcoal mb-6">
          What we deliver
        </h2>
        <p className="text-charcoal/70 font-inter text-lg">
          Optima Construct helps firms reduce decision latency through three focused systems:
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group p-6 rounded-2xl bg-white border border-charcoal/5 hover:border-charcoal/15 hover:shadow-xl hover:shadow-charcoal/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-charcoal/5 flex items-center justify-center mb-4 group-hover:bg-charcoal group-hover:text-white transition-colors">
              <service.icon size={24} className="text-charcoal" />
            </div>
            <span className="text-[10px] font-orbitron font-bold tracking-widest uppercase text-charcoal/50">
              {service.category}
            </span>
            <h3 className="font-orbitron font-semibold text-charcoal mt-1 text-lg">
              {service.label}
            </h3>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 flex flex-wrap justify-center gap-4"
      >
        {['Project Intelligence Systems', 'Workforce Productivity Systems', 'Cost and Risk Control Systems'].map((sys, i) => (
          <span key={i} className="px-4 py-2 rounded-full bg-charcoal text-white font-orbitron text-xs font-bold tracking-wider">
            {sys}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
