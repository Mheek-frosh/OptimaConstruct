import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, Shield, Check } from 'lucide-react';

const packagesData = [
  {
    id: 1,
    title: 'Project Intelligence Starter',
    bestFor: 'General contractors, developers, and consultants that need clearer project visibility across schedule, reporting, procurement, and issue management.',
    icon: BarChart3,
    included: [
      'Two-week opportunity diagnostic',
      'Workflow and data audit across active project controls',
      'KPI architecture for leadership reporting',
      'One project health dashboard concept',
      'Weekly exception reporting structure',
      '90-day implementation roadmap',
    ],
    problem: 'Most firms already produce reports. The issue is that reports arrive too late, in too many places, and without enough signal. This package creates the first real visibility layer across project controls.',
    benefits: [
      'Clearer insight into project drift',
      'Earlier visibility into blocked decisions',
      'Better understanding of where data fragmentation is hurting delivery',
      'A realistic roadmap for the first pilot',
    ],
    promise: 'Move from scattered reporting to decision-ready project intelligence.',
    color: 'charcoal',
  },
  {
    id: 2,
    title: 'Workforce Productivity Accelerator',
    bestFor: 'Firms whose PMs, coordinators, superintendents, and technical staff are overloaded with repetitive admin and coordination work.',
    icon: Users,
    included: [
      'Time study of admin heavy workflows',
      'Reporting automation design',
      'Meeting minutes to action register workflow',
      'Follow-up email drafting workflow',
      'Internal knowledge capture design',
      'Team onboarding and adoption playbook',
    ],
    problem: 'The labour shortage is not only a headcount problem. It is a productivity problem. Valuable people spend too much time packaging information rather than driving delivery.',
    benefits: [
      'Less non-billable admin effort',
      'Master reporting cycles',
      'Cleaner follow-up and accountability',
      'Better knowledge retention from senior staff',
      'More productive use of limited team capacity',
    ],
    promise: 'Take repetitive admin weight off stretched teams so they can focus on execution.',
    color: 'charcoal',
  },
  {
    id: 3,
    title: 'Cost and Risk Control Suite',
    bestFor: 'Commercial managers, preconstruction leaders, contractors, and developers who need stronger visibility into cost drift, procurement exposure, and contract risk.',
    icon: Shield,
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
    benefits: [
      'Earlier visibility into cost overrun risk',
      'Better procurement timing awareness',
      'More structured contract obligation review',
      'Better executive oversight of margin pressure',
      'Clearer commercial decision making',
    ],
    promise: 'Protect margin by identifying cost and risk signals earlier.',
    color: 'charcoal',
  },
];

const PackagesSection = () => (
  <section id="packages" className="relative py-24 bg-white text-charcoal">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-tight mb-6">
          Our three service packages
        </h2>
        <p className="text-charcoal/70 font-inter text-lg">
          We do not begin with a full-scale rollout. We begin with one painful workflow, one measurable pilot, and one clear business case.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {packagesData.map((pkg, i) => (
          <motion.article
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl border-2 border-charcoal/10 bg-white p-8 hover:border-charcoal/25 hover:shadow-2xl hover:shadow-charcoal/5 transition-all duration-500 flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-charcoal text-white flex items-center justify-center mb-6">
              <pkg.icon size={28} />
            </div>
            <h3 className="font-orbitron font-bold text-xl text-charcoal mb-2">
              {pkg.title}
            </h3>
            <p className="text-xs font-orbitron font-bold tracking-widest uppercase text-charcoal/50 mb-4">
              Best for
            </p>
            <p className="text-charcoal/70 font-inter text-sm mb-6 leading-relaxed">
              {pkg.bestFor}
            </p>

            <p className="text-xs font-orbitron font-bold tracking-widest uppercase text-charcoal/50 mb-3">
              What is included
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {pkg.included.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-charcoal/80 font-inter text-sm">
                  <Check size={16} className="text-charcoal flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-charcoal/10">
              <p className="text-xs font-orbitron font-bold tracking-widest uppercase text-charcoal/50 mb-2">
                What problem it solves
              </p>
              <p className="text-charcoal/80 font-inter text-sm mb-4 leading-relaxed">
                {pkg.problem}
              </p>
              <p className="text-xs font-orbitron font-bold tracking-widest uppercase text-charcoal/50 mb-2">
                Core commercial promise
              </p>
              <p className="font-orbitron font-semibold text-charcoal">
                {pkg.promise}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default PackagesSection;
