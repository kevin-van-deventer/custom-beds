import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, MapPin, Mail, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BespokeOrderModal from './BespokeOrderModal';

const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-ink text-white rounded-[3rem] overflow-hidden shadow-2xl"
        >
          {/* Background Image / Underlay */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-40 lg:opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 z-0">
            <img 
              src="/images/custombedsforallroomsetups.png" 
              alt="Custom Beds Craftsmanship" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 sm:p-12 md:p-24 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold"
                >
                  Your Bespoke Sanctuary Awaits
                </motion.p>
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif leading-[0.9] tracking-tight">
                  Begin Your <br /> <span className="italic">Journey</span>
                </h2>
              </div>
              
              <p className="text-white/60 text-lg max-w-md leading-relaxed font-light">
                Whether you have a specific vision or need expert guidance, our specialists are here to assist you in creating your bespoke masterpiece.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 pt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-gold text-white px-12 py-5 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-white hover:text-ink transition-all duration-500 shadow-2xl flex items-center justify-center group"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
                
                <div className="flex items-center space-x-8 justify-center sm:justify-start">
                  <a 
                    href="https://wa.me/27128816555" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col space-y-1 text-white/40 hover:text-gold transition-colors duration-300"
                  >
                    <MessageCircle size={20} />
                    <span className="text-[8px] uppercase tracking-widest font-bold">WhatsApp</span>
                  </a>
                  <a 
                    href="mailto:jovan@custombedsdirect.co.za" 
                    className="flex flex-col space-y-1 text-white/40 hover:text-gold transition-colors duration-300"
                  >
                    <Mail size={20} />
                    <span className="text-[8px] uppercase tracking-widest font-bold">Email</span>
                  </a>
                  <a 
                    href="https://facebook.com/custombeds" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col space-y-1 text-white/40 hover:text-gold transition-colors duration-300"
                  >
                    <Facebook size={20} />
                    <span className="text-[8px] uppercase tracking-widest font-bold">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Identity Block - Styled like the Modal Sidebar */}
            <div className="lg:pl-20 border-l border-white/10 hidden lg:block">
              <div className="space-y-12">
                <div className="group">
                  <MapPin size={24} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-serif mb-2">Visit Factory</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Bashewa, South Africa</p>
                </div>
                <div className="group">
                  <Mail size={24} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-serif mb-2">Expert Advice</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Response within 24h</p>
                </div>
                <div className="pt-6">
                  <Link to="/contact" className="inline-flex items-center space-x-3 text-gold group">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">All Locations</span>
                    <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-all duration-500">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <BespokeOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactCTA;
