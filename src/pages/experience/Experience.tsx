import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Ruler, Hammer, Truck, ShieldCheck, Star, Award, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <div className="bg-paper overflow-hidden">
      {/* Immersive Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/headboarddisplayimagehomepage.png"
            alt="Luxury Bedroom"
            className="w-full h-full object-cover brightness-[0.7]"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-paper/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-white text-xs uppercase tracking-[0.6em] mb-8 font-bold">The Art of Bespoke Sleep</p>
            <h1 className="text-white text-6xl md:text-9xl font-serif mb-12 leading-[0.9] tracking-tight">
              A Legacy of <br /> <span className="italic">Excellence</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/category/all" className="bg-gold text-white px-12 py-5 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-white hover:text-ink transition-all duration-700 shadow-2xl">
                Discover the Collection
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute left-8 bottom-32 hidden lg:block">
          <p className="writing-mode-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
            ESTABLISHED 1998 &bull; LONDON ATELIER
          </p>
        </div>
      </section>

      {/* The Heritage (Company) */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 font-bold">The Heritage</p>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Born from a <br /> Passion for <br /> <span className="italic">Restoration</span></h2>
              <p className="text-ink/60 text-lg leading-relaxed font-light">
                Custom Beds was founded on the belief that sleep is the ultimate luxury. Our story began in a small London atelier, where we set out to redefine the relationship between the body and the bed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-3xl font-serif text-gold mb-2">25+</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Years of Mastery</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-gold mb-2">10k+</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Bespoke Sanctuaries</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[200px] border border-ink/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-ink text-paper p-12 hidden md:block max-w-xs shadow-2xl">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">The Atelier</p>
              <p className="text-sm font-light leading-relaxed">Every stitch, every tuft, and every layer is placed by hand in our London workshop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Craft (Process) */}
      <section className="bg-ink text-paper py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 font-bold">The Process</p>
            <h2 className="text-5xl md:text-7xl font-serif">Bespoke by Design</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold/20 hidden md:block -translate-y-1/2"></div>
            
            {[
              { 
                step: "01", 
                title: "Personal Consultation", 
                icon: <Ruler size={24} />, 
                desc: "We analyze your sleep posture, temperature preferences, and aesthetic desires to create your unique sleep profile." 
              },
              { 
                step: "02", 
                title: "Material Selection", 
                icon: <Sparkles size={24} />, 
                desc: "Choose from our curated library of organic silks, cashmere wools, and hand-teased natural fibers." 
              },
              { 
                step: "03", 
                title: "Master Crafting", 
                icon: <Hammer size={24} />, 
                desc: "Our artisans spend over 100 hours hand-crafting your bed using traditional techniques and modern precision." 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 bg-ink p-8 space-y-8"
              >
                <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center bg-ink mx-auto">
                  <span className="text-gold font-serif text-xl">{item.step}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <p className="text-paper/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Materials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-8">
                <div className="aspect-square overflow-hidden rounded-full border border-ink/5">
                  <img src="/images/custombedsforallroomsetups.png" alt="Material 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
                <div className="aspect-square overflow-hidden rounded-full border border-ink/5 mt-12">
                  <img src="/images/premiumcoversforbases.jpeg" alt="Material 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-12"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 font-bold">Uncompromising Quality</p>
                <h2 className="text-5xl md:text-7xl font-serif mb-8">Nature's <br /> <span className="italic">Purest</span> Elements</h2>
                <p className="text-ink/60 text-lg leading-relaxed font-light">
                  We reject synthetic foams and chemical adhesives. Instead, we embrace the natural resilience of horsehair, the softness of cashmere, and the breathability of organic cotton.
                </p>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <Award size={20} className="text-gold" />
                  <span className="text-xs uppercase tracking-widest font-bold">Sustainably Harvested Hardwoods</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Heart size={20} className="text-gold" />
                  <span className="text-xs uppercase tracking-widest font-bold">Hypoallergenic Natural Fibers</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Star size={20} className="text-gold" />
                  <span className="text-xs uppercase tracking-widest font-bold">Certified Organic Materials</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concierge Service (Customer Service) */}
      <section className="bg-paper py-32 border-y border-ink/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 font-bold">Service Beyond Compare</p>
          <h2 className="text-5xl md:text-7xl font-serif mb-12">The Concierge <br /> <span className="italic">Promise</span></h2>
          <p className="text-ink/60 text-xl leading-relaxed font-light mb-16">
            Your journey with Custom Beds doesn't end at purchase. Our white-glove concierge service ensures every aspect of your experience is seamless, from the first consultation to the final installation and beyond.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Truck size={32} className="text-gold mx-auto mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest">White Glove Delivery</h4>
              <p className="text-[10px] text-ink/40 uppercase tracking-widest">Complimentary Setup & Installation</p>
            </div>
            <div className="space-y-4">
              <ShieldCheck size={32} className="text-gold mx-auto mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest">Lifetime Guarantee</h4>
              <p className="text-[10px] text-ink/40 uppercase tracking-widest">Unrivaled Craftsmanship Warranty</p>
            </div>
            <div className="space-y-4">
              <Heart size={32} className="text-gold mx-auto mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest">100 Night Trial</h4>
              <p className="text-[10px] text-ink/40 uppercase tracking-widest">Absolute Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/images/premiumcoversforbases.jpeg" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-8xl font-serif mb-12">Ready to <br /> <span className="italic">Transform</span> Your Sleep?</h2>
          <Link to="/contact" className="inline-flex items-center space-x-4 bg-ink text-paper px-12 py-6 uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-gold transition-all duration-700 shadow-2xl">
            <span>Book a Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Experience;
