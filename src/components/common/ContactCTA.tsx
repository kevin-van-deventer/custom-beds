import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, MapPin, Mail, Facebook, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BespokeOrderModal from './BespokeOrderModal';

const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* CTA Section: Get in Touch */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="bg-paper border border-ink/5 p-12 md:p-24 rounded-[3rem] relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Begin Your Journey to <br /><span className="italic text-gold">Perfect Sleep</span></h2>
              <p className="text-ink/60 text-lg mb-12 max-w-md">
                Whether you have a specific vision or need expert guidance, our specialists are here to assist you in creating your bespoke sanctuary.
              </p>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gold text-white px-10 py-4 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-ink transition-all duration-500 shadow-xl"
                >
                  Book a Consultation
                </button>
                <div className="flex items-center gap-6">
                  <a 
                    href="https://wa.me/27128816555" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-ink hover:text-gold transition-colors duration-300"
                  >
                    <MessageCircle size={20} />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">WhatsApp</span>
                  </a>
                  <a 
                    href="https://facebook.com/custombeds" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-ink hover:text-gold transition-colors duration-300"
                  >
                    <Facebook size={20} />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Link to="/contact" className="group p-8 bg-white border border-ink/5 hover:border-gold/30 transition-all duration-500">
                <MapPin className="text-gold mb-6 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="font-serif text-xl mb-2">Visit Factory</h4>
                <p className="text-xs text-ink/40 uppercase tracking-widest font-bold">Bashewa, South Africa</p>
              </Link>
              <a href="mailto:johan@custombedsdirect.co.za" className="group p-8 bg-white border border-ink/5 hover:border-gold/30 transition-all duration-500">
                <Mail className="text-gold mb-6 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="font-serif text-xl mb-2">Email Johan</h4>
                <p className="text-xs text-ink/40 uppercase tracking-widest font-bold">Response within 24h</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <BespokeOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactCTA;
