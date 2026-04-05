import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle, Mail, Ruler, Palette, Bed, Info } from 'lucide-react';

interface BespokeOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BespokeOrderModal: React.FC<BespokeOrderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dimensions: '',
    material: '',
    style: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const constructMessage = () => {
    return `Bespoke Bed Inquiry:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Dimensions: ${formData.dimensions}
Material: ${formData.material}
Style: ${formData.style}
Notes: ${formData.notes}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(constructMessage());
    window.open(`https://wa.me/27128816555?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Bespoke Bed Inquiry - ${formData.name}`);
    const body = encodeURIComponent(constructMessage());
    window.location.href = `mailto:johan@custombedsdirect.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/90 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative bg-white w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Left Side: Info */}
            <div className="md:w-1/3 bg-ink text-white p-10 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <p className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Bespoke Project</p>
                  <h3 className="text-3xl font-serif leading-tight">Define Your <br /><span className="italic text-gold">Masterpiece</span></h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Provide us with your initial requirements, and our master designers will contact you to refine every detail of your custom build.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-4 text-xs uppercase tracking-widest font-bold text-white/40">
                    <Ruler size={14} className="text-gold" />
                    <span>Custom Dimensions</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs uppercase tracking-widest font-bold text-white/40">
                    <Palette size={14} className="text-gold" />
                    <span>Curated Fabrics</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs uppercase tracking-widest font-bold text-white/40">
                    <Bed size={14} className="text-gold" />
                    <span>Hand-Tufted Finish</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-white/10">
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/30">Custom Bed Direct - Bashewa</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-2/3 p-10 md:p-16 overflow-y-auto">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 text-ink/20 hover:text-ink transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-ink/10 py-2 focus:border-gold outline-none transition-colors" 
                    placeholder="Julian Thorne" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-ink/10 py-2 focus:border-gold outline-none transition-colors" 
                    placeholder="johan@custombedsdirect.co.za" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-ink/10 py-2 focus:border-gold outline-none transition-colors" 
                    placeholder="012 881 6555" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Preferred Dimensions</label>
                  <input 
                    type="text" 
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full border-b border-ink/10 py-2 focus:border-gold outline-none transition-colors" 
                    placeholder="e.g. 210cm x 210cm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Fabric / Material</label>
                  <select 
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    className="w-full border-b border-ink/10 py-2 focus:border-gold outline-none transition-colors bg-transparent"
                  >
                    <option value="">Select Material</option>
                    <option value="Belgian Linen">Belgian Linen</option>
                    <option value="Italian Velvet">Italian Velvet</option>
                    <option value="British Wool">British Wool</option>
                    <option value="Silk Blend">Silk Blend</option>
                    <option value="Other">Other (Specify in notes)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Headboard Style</label>
                  <input 
                    type="text" 
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    className="w-full border-b border-ink/10 py-2 focus:border-gold outline-none transition-colors" 
                    placeholder="e.g. Winged, Tufted" 
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Additional Requirements</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border-b border-ink/10 py-2 focus:border-gold outline-none transition-colors resize-none" 
                    rows={2} 
                    placeholder="Any specific details or questions..." 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <button 
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] text-white py-4 flex items-center justify-center space-x-3 uppercase text-[10px] tracking-[0.3em] font-bold hover:brightness-110 transition-all shadow-lg"
                >
                  <MessageCircle size={16} />
                  <span>Send via WhatsApp</span>
                </button>
                <button 
                  onClick={handleEmail}
                  className="bg-ink text-white py-4 flex items-center justify-center space-x-3 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-gold transition-all duration-500 shadow-lg"
                >
                  <Mail size={16} />
                  <span>Send via Email</span>
                </button>
              </div>
              <p className="text-center text-ink/30 text-[9px] uppercase tracking-widest font-bold mt-6">
                Our team will review and respond within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BespokeOrderModal;
