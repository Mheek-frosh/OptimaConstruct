import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white dark:bg-charcoalDark">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1.5 rounded-full bg-charcoal/5 dark:bg-white/10 text-charcoal/70 dark:text-white/70 font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Contact Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-orbitron font-bold text-4xl md:text-5xl tracking-tight text-charcoal dark:text-white mb-6">
            Let's talk
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-charcoal/70 dark:text-white/70 font-inter text-lg">
            Have a project delivery, workforce, or margin problem? Reach out and let’s identify the right starting point.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 pb-24 bg-white dark:bg-charcoalDark">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <h3 className="font-orbitron font-bold text-lg tracking-tight text-charcoal dark:text-white">Get in touch</h3>
              <div className="space-y-6">
                <a href="mailto:contact@optimaconstructai.com" className="flex items-center gap-4 text-charcoal/80 dark:text-white/80 hover:text-charcoal dark:hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-charcoal/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-charcoal dark:text-white" />
                  </div>
                  <div>
                    <p className="font-orbitron text-xs uppercase tracking-wider text-charcoal/50 dark:text-white/50">Email</p>
                    <p className="font-inter text-charcoal dark:text-white">contact@optimaconstructai.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-charcoal/80 dark:text-white/80">
                  <div className="w-12 h-12 rounded-xl bg-charcoal/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-charcoal dark:text-white" />
                  </div>
                  <div>
                    <p className="font-orbitron text-xs uppercase tracking-wider text-charcoal/50 dark:text-white/50">Phone</p>
                    <p className="font-inter text-charcoal dark:text-white">+1 403 389 8114</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-charcoal/80 dark:text-white/80">
                  <div className="w-12 h-12 rounded-xl bg-charcoal/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-charcoal dark:text-white" />
                  </div>
                  <div>
                    <p className="font-orbitron text-xs uppercase tracking-wider text-charcoal/50 dark:text-white/50">Location</p>
                    <p className="font-inter text-charcoal dark:text-white">North America</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-charcoal/10 dark:border-white/10">
                <p className="text-charcoal/60 dark:text-white/60 font-inter text-sm">
                  We typically respond within 24–48 hours. For urgent inquiries, please call or email directly.
                </p>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
              {submitted ? (
                <div className="p-12 rounded-2xl bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 text-center">
                  <p className="font-orbitron font-semibold text-charcoal dark:text-white text-lg mb-2">Thank you for reaching out</p>
                  <p className="text-charcoal/70 dark:text-white/70 font-inter">We'll get back to you within 24–48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 lg:p-10 rounded-2xl bg-white dark:bg-charcoalLight/30 border-2 border-charcoal/10 dark:border-white/10 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block font-orbitron text-xs font-bold uppercase tracking-wider text-charcoal/70 dark:text-white/70 mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/20 dark:border-white/20 bg-white dark:bg-charcoalDark text-charcoal dark:text-white font-inter focus:outline-none focus:ring-2 focus:ring-charcoal/20 dark:focus:ring-white/20 focus:border-charcoal/40 dark:focus:border-white/40"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-orbitron text-xs font-bold uppercase tracking-wider text-charcoal/70 dark:text-white/70 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/20 dark:border-white/20 bg-white dark:bg-charcoalDark text-charcoal dark:text-white font-inter focus:outline-none focus:ring-2 focus:ring-charcoal/20 dark:focus:ring-white/20 focus:border-charcoal/40 dark:focus:border-white/40"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="company" className="block font-orbitron text-xs font-bold uppercase tracking-wider text-charcoal/70 dark:text-white/70 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/20 dark:border-white/20 bg-white dark:bg-charcoalDark text-charcoal dark:text-white font-inter focus:outline-none focus:ring-2 focus:ring-charcoal/20 dark:focus:ring-white/20 focus:border-charcoal/40 dark:focus:border-white/40"
                      placeholder="Your company"
                    />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className="block font-orbitron text-xs font-bold uppercase tracking-wider text-charcoal/70 dark:text-white/70 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/20 dark:border-white/20 bg-white dark:bg-charcoalDark text-charcoal dark:text-white font-inter focus:outline-none focus:ring-2 focus:ring-charcoal/20 dark:focus:ring-white/20 focus:border-charcoal/40 dark:focus:border-white/40 resize-none"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal font-orbitron font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send message <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 bg-charcoal/10 dark:bg-charcoal text-charcoal dark:text-white transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p className="font-inter text-charcoal/80 dark:text-white/80 mb-2">Prefer email?</p>
          <a href="mailto:contact@optimaconstructai.com" className="font-orbitron font-semibold text-lg hover:underline">
            contact@optimaconstructai.com
          </a>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
