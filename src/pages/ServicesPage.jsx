import React from 'react';
import { Link } from 'react-router-dom';
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
  BarChart3,
  Shield,
  Check,
} from 'lucide-react';

const services = [
  { icon: Activity, label: 'Delay prediction', category: 'Project Intelligence', desc: 'Identify schedule drift and delivery risk before it impacts your project.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { icon: FileBarChart, label: 'Reporting automation', category: 'Project Intelligence', desc: 'Turn scattered data into decision-ready dashboards and exception reports.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { icon: FileSearch, label: 'Document intelligence', category: 'Project Intelligence', desc: 'Extract insights from contracts, reports, and meeting notes automatically.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80' },
  { icon: Bot, label: 'Admin automation', category: 'Workforce Productivity', desc: 'Reduce repetitive tasks so your team focuses on delivery, not paperwork.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80' },
  { icon: Users, label: 'Resource planning', category: 'Workforce Productivity', desc: 'Match capacity to demand and keep the right people on the right projects.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80' },
  { icon: Brain, label: 'Knowledge capture', category: 'Workforce Productivity', desc: 'Capture institutional knowledge from senior staff before it walks out the door.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80' },
  { icon: TrendingUp, label: 'Cost forecasting', category: 'Cost & Risk Control', desc: 'See cost overrun risk earlier with estimate vs actual and cost-to-complete models.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
  { icon: ShoppingCart, label: 'Procurement intelligence', category: 'Cost & Risk Control', desc: 'Track long-lead items, vendor reliability, and procurement exposure.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80' },
  { icon: FileCheck, label: 'Contract risk workflows', category: 'Cost & Risk Control', desc: 'Surface contract obligations and commercial risk before they become claims.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80' },
];

const packagesData = [
  {
    title: 'Project Intelligence Starter',
    bestFor: 'General contractors, developers, and consultants that need clearer project visibility across schedule, reporting, procurement, and issue management.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    included: [
      'Two-week opportunity diagnostic',
      'Workflow and data audit across active project controls',
      'KPI architecture for leadership reporting',
      'One project health dashboard concept',
      'Weekly exception reporting structure',
      '90-day implementation roadmap',
    ],
    problem: 'Most firms already produce reports. The issue is that reports arrive too late, in too many places, and without enough signal. This package creates the first real visibility layer across project controls.',
    promise: 'Move from scattered reporting to decision-ready project intelligence.',
  },
  {
    title: 'Workforce Productivity Accelerator',
    bestFor: 'Firms whose PMs, coordinators, superintendents, and technical staff are overloaded with repetitive admin and coordination work.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    included: [
      'Time study of admin heavy workflows',
      'Reporting automation design',
      'Meeting minutes to action register workflow',
      'Follow-up email drafting workflow',
      'Internal knowledge capture design',
      'Team onboarding and adoption playbook',
    ],
    problem: 'The labour shortage is not only a headcount problem. It is a productivity problem. Valuable people spend too much time packaging information rather than driving delivery.',
    promise: 'Take repetitive admin weight off stretched teams so they can focus on execution.',
  },
  {
    title: 'Cost and Risk Control Suite',
    bestFor: 'Commercial managers, preconstruction leaders, contractors, and developers who need stronger visibility into cost drift, procurement exposure, and contract risk.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    included: [
      'Estimate versus actual variance review',
      'Cost to complete forecasting model',
      'Procurement risk register',
      'Long lead materials heatmap',
      'Vendor reliability scorecard',
      'Contract obligation extraction workflow',
      'Weekly commercial risk review structure',
    ],
    problem: 'Many firms discover margin erosion after it has already taken hold. This package improves visibility into the financial and operational signals that usually appear too late.',
    promise: 'Protect margin by identifying cost and risk signals earlier.',
  },
];

const ServicesPage = () => (
  <>
    {/* Page Hero */}
    <section className="pt-32 pb-16 bg-white dark:bg-charcoalDark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-charcoal/5 dark:bg-white/10 text-charcoal/70 dark:text-white/70 font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Services</span>
            <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-tight text-charcoal dark:text-white mb-6">
              What we deliver
            </h1>
            <p className="text-charcoal/70 dark:text-white/70 font-inter text-lg max-w-xl">
              Optima Construct helps firms reduce decision latency through three focused systems and tailored service packages. We begin with one workflow, one pilot, one business case.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction intelligence" className="rounded-2xl w-full object-cover h-64 lg:h-80" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services Grid with images */}
    <section className="py-20 bg-charcoal/5 dark:bg-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl tracking-tight text-charcoal dark:text-white mb-4">Core capabilities</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-charcoal/70 dark:text-white/70 font-inter mb-12 max-w-2xl">Nine capabilities across project intelligence, workforce productivity, and cost & risk control.</motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group rounded-2xl bg-white dark:bg-charcoalLight/30 border border-charcoal/5 dark:border-white/5 overflow-hidden hover:border-charcoal/15 dark:hover:border-white/15 hover:shadow-xl transition-all"
            >
              <div className="h-40 overflow-hidden">
                <img src={service.image} alt={service.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-charcoal/5 dark:bg-white/10 flex items-center justify-center mb-4 group-hover:bg-charcoal dark:group-hover:bg-white transition-colors [&>svg]:text-charcoal dark:[&>svg]:text-white group-hover:[&>svg]:text-white dark:group-hover:[&>svg]:text-charcoal">
                  <service.icon size={24} />
                </div>
                <span className="text-[10px] font-orbitron font-bold tracking-widest uppercase text-charcoal/50 dark:text-white/50">{service.category}</span>
                <h3 className="font-orbitron font-semibold text-charcoal dark:text-white mt-1 text-lg">{service.label}</h3>
                <p className="text-charcoal/70 dark:text-white/70 font-inter text-sm mt-2">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Packages with images */}
    <section className="py-20 bg-white dark:bg-charcoalDark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight text-charcoal dark:text-white mb-4">Service packages</h2>
          <p className="text-charcoal/70 dark:text-white/70 font-inter text-lg">We begin with one painful workflow, one measurable pilot, and one clear business case—not a full-scale rollout.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packagesData.map((pkg, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border-2 border-charcoal/10 dark:border-white/10 bg-white dark:bg-charcoalLight/30 overflow-hidden hover:border-charcoal/25 dark:hover:border-white/20 hover:shadow-2xl transition-all flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="w-14 h-14 rounded-2xl bg-charcoal dark:bg-white text-white dark:text-charcoal flex items-center justify-center mb-6 -mt-12 relative z-10">
                  <pkg.icon size={28} />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-charcoal dark:text-white mb-2">{pkg.title}</h3>
                <p className="text-xs font-orbitron font-bold tracking-widest uppercase text-charcoal/50 dark:text-white/50 mb-3">Best for</p>
                <p className="text-charcoal/70 dark:text-white/70 font-inter text-sm mb-6 leading-relaxed">{pkg.bestFor}</p>
                <p className="text-xs font-orbitron font-bold tracking-widest uppercase text-charcoal/50 dark:text-white/50 mb-3">What is included</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.included.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-charcoal/80 dark:text-white/80 font-inter text-sm">
                      <Check size={16} className="text-charcoal dark:text-white flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-charcoal/10 dark:border-white/10">
                  <p className="text-xs font-orbitron font-bold tracking-widest uppercase text-charcoal/50 dark:text-white/50 mb-2">Core promise</p>
                  <p className="font-orbitron font-semibold text-charcoal dark:text-white">{pkg.promise}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-charcoal/10 dark:bg-charcoal text-charcoal dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <p className="text-charcoal/80 dark:text-white/80 font-inter mb-6 max-w-xl mx-auto">Ready to discuss which package fits your needs?</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-colors">
          Contact Us
        </Link>
      </div>
    </section>
  </>
);

export default ServicesPage;
