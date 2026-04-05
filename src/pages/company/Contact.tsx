import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, ArrowRight, Instagram, Facebook } from 'lucide-react';
import SEO from '../../components/common/SEO';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
  };

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title="Contact Our Atelier | Bespoke Luxury Bedding South Africa" 
        description="Experience the luxury of individual comfort. Reach out to our South African artisans for a private consultation in Bashewa, Pretoria."
      />

      {/* Immersive Hero Header */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/premiumcoversforbases.jpeg"
            alt="Handcrafted Texture"
            className="w-full h-full object-cover opacity-30 grayscale brightness-[0.7] scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-paper"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <p className="text-gold text-[10px] uppercase tracking-[0.8em] mb-8 font-bold">The Consultation</p>
            <h1 className="text-white text-4xl sm:text-6xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter italic md:mt-16 md:mb-12">
              Reach Our <br /> <span className="text-gold not-italic">Specialists</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-8 md:-mt-10 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-2xl md:rounded-[3rem] overflow-hidden">
          {/* Left Side: Identity Monolith */}
          <div className="lg:col-span-5 bg-ink text-white p-8 sm:p-12 md:p-24 flex flex-col justify-between relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 space-y-20">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif italic text-gold">Direct Channels</h3>
                <div className="space-y-8 pt-6 border-l border-white/10 pl-6">
                  <div className="group transition-all hover:pl-4">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-white/40 mb-2">Factory Premises</p>
                    <div className="flex items-center space-x-4">
                      <MapPin size={16} className="text-gold" />
                      <span className="text-lg font-light leading-snug">Bashewa, <br />South Africa</span>
                    </div>
                  </div>
                  <div className="group transition-all hover:pl-4">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-white/40 mb-2">Direct Phone</p>
                    <div className="flex items-center space-x-4">
                      <Phone size={16} className="text-gold" />
                      <span className="text-lg font-light">012 881 6555</span>
                    </div>
                  </div>
                  <div className="group transition-all hover:pl-4">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-white/40 mb-2">Expert Inquiry</p>
                    <div className="flex items-center space-x-4">
                      <Mail size={16} className="text-gold" />
                      <span className="text-lg font-light">johan@custombedsdirect.co.za</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[9px] uppercase tracking-widest font-bold text-white/40">Connect With Us</p>
                <div className="flex space-x-8">
                  <a href="#" className="text-white/60 hover:text-gold transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="text-white/60 hover:text-gold transition-colors"><Facebook size={20} /></a>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-20">
              <p className="text-[9px] uppercase tracking-widest font-bold text-white/20 italic">"The luxury of individual comfort is the underlying quality that sets our products apart."</p>
            </div>
          </div>

          {/* Right Side: Form Monolith */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 md:p-24 relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-4 italic">Message Received</h3>
                <p className="text-ink/60 text-lg mb-10 font-light">Thank you for reaching out. A specialist will contact you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] uppercase tracking-widest border-b border-gold pb-2 hover:border-ink transition-colors font-bold"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2 group"
                  >
                    <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 group-focus-within:text-gold transition-colors">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Julian Thorne"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b border-ink/10 py-4 text-lg font-light focus:border-gold focus:outline-none transition-all"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2 group"
                  >
                    <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 group-focus-within:text-gold transition-colors">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="johan@custombeds.co.za"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b border-ink/10 py-4 text-lg font-light focus:border-gold focus:outline-none transition-all"
                    />
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2 group"
                >
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 group-focus-within:text-gold transition-colors">Your Message</label>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-ink/10 py-4 text-lg font-light focus:border-gold focus:outline-none transition-all h-32 resize-none"
                    placeholder="How can our artisans assist you?"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    type="submit"
                    className="group bg-ink text-paper px-16 py-6 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-gold transition-all duration-500 flex items-center justify-center space-x-4 shadow-xl"
                  >
                    <span>Send Message</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              </form>
            )}
          </div>
        </div>
        
        {/* Support Banner */}
        <div className="mt-32 border-t border-ink/5 pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-2xl font-serif italic mb-2">24h</p>
            <p className="text-[9px] uppercase tracking-widest font-bold text-ink/40">Expert Response</p>
          </div>
          <div>
            <p className="text-2xl font-serif italic mb-2">Private</p>
            <p className="text-[9px] uppercase tracking-widest font-bold text-ink/40">Consultation</p>
          </div>
          <div>
            <p className="text-2xl font-serif italic mb-2">Secure</p>
            <p className="text-[9px] uppercase tracking-widest font-bold text-ink/40">Bespoke Handling</p>
          </div>
          <div>
            <p className="text-2xl font-serif italic mb-2">Direct</p>
            <p className="text-[9px] uppercase tracking-widest font-bold text-ink/40">Craft Channel</p>
          </div>
        </div>
      </div>

      {/* SEO Watermark Element */}
      <div className="absolute top-[50%] -left-32 opacity-[0.02] pointer-events-none select-none hidden lg:block overflow-hidden">
        <h2 className="text-[40rem] font-serif leading-none rotate-90">CBD</h2>
      </div>
    </div>
  );
};

export default Contact;
