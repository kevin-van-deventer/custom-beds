import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    console.log('Form submitted:', formState);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 font-bold">Get in Touch</p>
        <h1 className="text-5xl font-serif">Contact Our Atelier</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="prose prose-sm text-ink/60">
            <p className="text-lg leading-relaxed">
              Whether you're looking for a personal consultation or have questions about our bespoke process, our team of sleep specialists is here to assist you.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-gold" size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Our Flagship Atelier</h4>
                <p className="text-sm text-ink/60">12 Bruton Street, Mayfair, London, W1J 6QA</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-gold" size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Phone</h4>
                <p className="text-sm text-ink/60">+44 (0) 20 7123 4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-gold" size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Email</h4>
                <p className="text-sm text-ink/60">atelier@luxebed.com</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-ink/5">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Opening Hours</h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-ink/60">
              <div>Monday - Friday</div>
              <div>10:00 AM - 6:00 PM</div>
              <div>Saturday</div>
              <div>11:00 AM - 5:00 PM</div>
              <div>Sunday</div>
              <div>By Appointment Only</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 border border-ink/5 shadow-sm">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-serif mb-4">Message Received</h3>
              <p className="text-ink/60 text-sm">Thank you for reaching out. A specialist will contact you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-xs uppercase tracking-widest border-b border-ink/20 pb-2 hover:border-gold transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Your Name</label>
                <input
                  required
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-paper border-none px-4 py-4 text-sm focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Email Address</label>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-paper border-none px-4 py-4 text-sm focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Message</label>
                <textarea
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-paper border-none px-4 py-4 text-sm focus:ring-1 focus:ring-gold h-40 resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink text-paper py-5 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-gold transition-all duration-500 flex items-center justify-center space-x-3"
              >
                <span>Send Message</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
