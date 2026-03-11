import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Linkedin } from 'lucide-react';

const management = [
  {
    name: 'James Mitchell',
    title: 'Chief Executive Officer',
    role: 'Leads strategy and client engagement. Former COO at a top-50 ENR contractor.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Sarah Chen',
    title: 'Director of Delivery',
    role: 'Drives implementation and process design. 15+ years in project controls and commercial management.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Marcus Webb',
    title: 'Head of Technology',
    role: 'Oversees systems integration and automation. Background in construction tech and ERP implementations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
];

const keyStaff = [
  {
    name: 'Elena Rodriguez',
    title: 'Senior Consultant, Project Intelligence',
    role: 'Specializes in delay analysis, reporting automation, and dashboard design.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'David Park',
    title: 'Senior Consultant, Cost & Risk',
    role: 'Focuses on cost forecasting, procurement intelligence, and contract workflows.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Rachel Thompson',
    title: 'Senior Consultant, Workforce Productivity',
    role: 'Designs admin automation, knowledge capture, and adoption playbooks.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
  },
];

const TeamsPage = () => (
  <>
    <section className="pt-32 pb-20 bg-white dark:bg-charcoalDark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-charcoal/5 dark:bg-white/10 text-charcoal/70 dark:text-white/70 font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Our Team</span>
            <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-tight text-charcoal dark:text-white mb-6 leading-tight">
              Experts in construction intelligence
            </h1>
            <p className="text-charcoal/70 dark:text-white/70 font-inter text-lg leading-relaxed mb-8">
              Our team combines deep construction industry experience with expertise in process design, systems integration, and data analytics.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity">
              Get in touch <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaboration" className="rounded-2xl w-full object-cover h-80 lg:h-96" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Management */}
    <section className="py-20 bg-charcoal/5 dark:bg-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl tracking-tight text-charcoal dark:text-white mb-4">Management</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-charcoal/70 dark:text-white/70 font-inter mb-12 max-w-2xl">Leadership with deep construction and technology expertise.</motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {management.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl bg-white dark:bg-charcoalLight/30 border border-charcoal/5 dark:border-white/10 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-orbitron font-bold text-charcoal dark:text-white text-lg">{person.name}</h3>
                <p className="text-charcoal/60 dark:text-white/60 font-orbitron text-xs font-semibold uppercase tracking-wider mt-1">{person.title}</p>
                <p className="text-charcoal/70 dark:text-white/70 font-inter text-sm mt-3">{person.role}</p>
                <a href="#" className="inline-flex items-center gap-1.5 mt-4 text-charcoal/60 dark:text-white/60 hover:text-charcoal dark:hover:text-white font-inter text-sm transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} /> Connect
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Key Staff */}
    <section className="py-20 bg-white dark:bg-charcoalDark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl tracking-tight text-charcoal dark:text-white mb-4">Key Staff</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-charcoal/70 dark:text-white/70 font-inter mb-12 max-w-2xl">Senior consultants who lead engagements and deliver outcomes.</motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {keyStaff.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row md:flex-col gap-6 rounded-2xl bg-charcoal/5 dark:bg-white/5 border border-charcoal/5 dark:border-white/10 p-6 hover:border-charcoal/10 dark:hover:border-white/20 transition-all"
            >
              <div className="flex-shrink-0 w-32 h-32 rounded-2xl overflow-hidden">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-orbitron font-bold text-charcoal dark:text-white text-lg">{person.name}</h3>
                <p className="text-charcoal/60 dark:text-white/60 font-orbitron text-xs font-semibold uppercase tracking-wider mt-1">{person.title}</p>
                <p className="text-charcoal/70 dark:text-white/70 font-inter text-sm mt-3">{person.role}</p>
                <a href="#" className="inline-flex items-center gap-1.5 mt-4 text-charcoal/60 dark:text-white/60 hover:text-charcoal dark:hover:text-white font-inter text-sm transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} /> Connect
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What we bring */}
    <section className="py-20 bg-charcoal/5 dark:bg-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-orbitron font-bold text-3xl tracking-tight text-charcoal dark:text-white mb-12">What we bring</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Construction background', desc: 'Hands-on experience in project controls, commercial management, and delivery.' },
            { title: 'Process & systems', desc: 'Skilled in workflow design, automation, and technology selection.' },
            { title: 'Client-first approach', desc: "We tailor solutions to your firm's context and capacity." },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-white dark:bg-charcoalLight/50 border border-charcoal/5 dark:border-white/10">
              <Users size={32} className="text-charcoal dark:text-white mb-4" />
              <h3 className="font-orbitron font-semibold text-charcoal dark:text-white text-lg mb-2">{item.title}</h3>
              <p className="text-charcoal/70 dark:text-white/70 font-inter">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-charcoal/10 dark:bg-charcoal text-charcoal dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <p className="text-charcoal/80 dark:text-white/80 font-inter mb-6">Join a team focused on construction intelligence.</p>
        <Link to="/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-colors">
          View careers <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </>
);

export default TeamsPage;
