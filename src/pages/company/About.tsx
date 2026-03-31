import React from 'react';
import { motion } from 'motion/react';
import { History, Award, Leaf, Users, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="space-y-32 pb-32 overflow-hidden">
      {/* Hero Header - Redesigned for Contrast & Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/custom_beds_for_all_room_setups.png"
            alt="Custom Beds Craftsmanship"
            className="w-full h-full object-cover opacity-40 brightness-[0.6]"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs uppercase tracking-[0.5em] mb-8 font-bold">The Heritage of Custom Beds</p>
            <h1 className="text-white text-6xl md:text-9xl font-serif mb-12 leading-[0.9] tracking-tight">
              Crafting the <br /> <span className="italic">Future of Sleep</span>
            </h1>
            <div className="w-24 h-[1px] bg-gold/50 mx-auto mb-12"></div>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Since 1998, we have been redefining the boundaries of comfort, blending traditional craftsmanship with modern innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Heritage - Split Layout */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center space-x-4 text-gold">
              <History size={20} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Our Journey</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">A Legacy of <br /><span className="italic">Excellence</span></h2>
            <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
              <p>
                Founded in the heart of London, Custom Beds began as a small atelier dedicated to the pursuit of the perfect night's rest. Our founder, a master upholsterer with a vision, realized that true luxury isn't just about appearance—it's about the profound restoration that only a custom-tailored bed can provide.
              </p>
              <p>
                Over two decades later, we remain a family-owned business, committed to the same principles of uncompromising quality and bespoke service that defined our very first creations.
              </p>
            </div>
            <div className="pt-6">
              <Link to="/category/all" className="inline-flex items-center space-x-4 text-ink group">
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Explore Our Work</span>
                <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all duration-500">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="Master Artisan at Work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-white p-10 shadow-xl hidden md:block max-w-xs border border-ink/5">
              <p className="text-4xl font-serif text-gold mb-2 italic">25+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Years of traditional hand-craftsmanship in London</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Craftsmanship - Grid Layout */}
      <section className="bg-paper py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <p className="text-gold text-xs uppercase tracking-[0.4em] mb-4 font-bold">The Custom Beds Standard</p>
            <h2 className="text-5xl md:text-7xl font-serif italic">Uncompromising Detail</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-ink text-white flex items-center justify-center rounded-full mb-8">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-serif">Master Artisans</h3>
              <p className="text-ink/60 leading-relaxed">
                Every piece is hand-crafted by artisans who have spent decades perfecting their trade. We don't use assembly lines; we use skilled hands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-ink text-white flex items-center justify-center rounded-full mb-8">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-serif">Natural Materials</h3>
              <p className="text-ink/60 leading-relaxed">
                From hand-teased horsehair to organic silk and cashmere, we source only the finest natural materials for breathability and longevity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-ink text-white flex items-center justify-center rounded-full mb-8">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-serif">Bespoke Design</h3>
              <p className="text-ink/60 leading-relaxed">
                No two sleepers are the same. We offer full customization of tension, size, and aesthetic to match your unique requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-ink text-white rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-24 flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center space-x-4 text-gold">
              <Leaf size={20} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Ethical Sourcing</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Kind to the <br /><span className="italic">Environment</span></h2>
            <p className="text-white/60 leading-relaxed text-lg">
              We believe that a good night's sleep shouldn't come at the cost of the planet. Our wood is sourced from FSC-certified forests, and our natural fillings are ethically harvested and fully biodegradable.
            </p>
            <p className="text-white/60 leading-relaxed text-lg">
              By creating products built to last a lifetime, we actively combat the "fast furniture" culture that fills our landfills.
            </p>
          </div>
          <div className="h-[400px] lg:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
              alt="Sustainable Forest"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Stats Section - Updated Styling */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-y border-ink/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-serif text-gold mb-2">25+</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Years of Heritage</p>
          </div>
          <div>
            <p className="text-5xl font-serif text-gold mb-2">10k+</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Bespoke Creations</p>
          </div>
          <div>
            <p className="text-5xl font-serif text-gold mb-2">100%</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Natural Fillings</p>
          </div>
          <div>
            <p className="text-5xl font-serif text-gold mb-2">30yr</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Product Guarantee</p>
          </div>
        </div>
      </section>

      {/* Meet the Visionaries - Owner & Team Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Julian Thorne - Founder"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Custom Design Component: Floating Quote Card */}
            <div className="absolute -bottom-10 -right-10 bg-gold p-10 shadow-2xl max-w-xs hidden md:block">
              <div className="text-white space-y-4">
                <div className="w-8 h-8 border-t-2 border-l-2 border-white/30 absolute top-4 left-4"></div>
                <p className="text-lg font-serif italic leading-relaxed">
                  "Luxury is not about excess; it's about the perfect alignment of form, function, and feeling."
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">— Julian Thorne</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <div className="inline-flex items-center space-x-4 text-gold">
              <Users size={20} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">The Visionaries</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Meet the <br /><span className="italic">Masterminds</span></h2>
            <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
              <p>
                Custom Beds is more than a brand; it's a collective of passionate artisans, designers, and dreamers. Led by our founder Julian Thorne, our team brings together over a century of combined expertise in fine upholstery, textile science, and ergonomic design.
              </p>
              <p>
                Every stitch, every layer of natural filling, and every hand-tufted detail is a testament to our shared commitment to excellence. We don't just build beds; we curate the foundation of your well-being.
              </p>
            </div>
            
            {/* Custom Design Component: Team Grid */}
            <div className="grid grid-cols-2 gap-8 pt-10">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
                <p className="text-sm font-serif">Elena Rossi</p>
                <p className="text-[9px] uppercase tracking-widest text-ink/40 font-bold">Lead Textile Designer</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
                <p className="text-sm font-serif">Marcus Chen</p>
                <p className="text-[9px] uppercase tracking-widest text-ink/40 font-bold">Master Upholsterer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Design Component: Signature Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ink text-white p-16 rounded-[3rem] text-center relative overflow-hidden mb-32"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif mb-6 italic">"Our hands tell the story of your rest."</h3>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">The Custom Beds Collective</p>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
