import React, { useEffect, useState } from 'react';
import { Product } from '../../types';
import ProductCard from '../../components/product/ProductCard';
import { getProducts } from '../../services/productService';
import { motion } from 'motion/react';
import { ArrowRight, Ruler, Hammer, Truck, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await getProducts(undefined, 4);
        setFeaturedProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="space-y-20 md:space-y-32 pb-20 overflow-hidden">
      <SEO />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/headerimghomepagebedroomsetup.jpg"
            alt="Luxury Bedroom Setup"
            className="w-full h-full object-cover brightness-[0.75]"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-paper/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-xs uppercase tracking-[0.4em] mb-8 font-medium"
          >
            Exquisite Custom Sleep Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-5xl sm:text-7xl md:text-9xl font-serif mb-12 leading-[0.9] tracking-tight"
          >
            The Art of <br /> <span className="italic">Perfect Rest</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/category/all" className="bg-white text-ink px-10 py-4 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-gold hover:text-white transition-all duration-500">
              Shop Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Ethos - Updated with Mission */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-12 leading-tight italic">"The luxury of individual comfort is the underlying quality that sets our products and service apart from the rest."</h2>
          <p className="text-xs uppercase tracking-[0.4em] font-bold text-gold">Our Mission & Promise</p>
        </motion.div>
      </section>

      {/* Why Choose Custom Bed Direct */}
      <section className="max-w-7xl mx-auto px-4 pb-20 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-gold">Dual Comfort</h3>
            <p className="text-xs text-ink/60 leading-relaxed uppercase tracking-widest font-bold">Dual weight response in one mattress. No more compromises.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-gold">Recessed Design</h3>
            <p className="text-xs text-ink/60 leading-relaxed uppercase tracking-widest font-bold">Our base design prevents mattresses from sliding apart.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-gold">Hygiene First</h3>
            <p className="text-xs text-ink/60 leading-relaxed uppercase tracking-widest font-bold">Every mattress features a removable, washable, and replaceable cover.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-gold">Personalized Style</h3>
            <p className="text-xs text-ink/60 leading-relaxed uppercase tracking-widest font-bold">Headboards custom-made to your preference and aesthetic.</p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/category/mattresses" className="group relative h-[600px] overflow-hidden">
            <img src="/images/mattressdisplayimagehomepage.jpg" alt="Mattresses" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors"></div>
            <div className="absolute bottom-12 left-12 text-white">
              <h2 className="text-5xl font-serif mb-4 italic">Mattresses</h2>
              <p className="text-sm font-light opacity-80 mb-6 max-w-xs">Engineered for support, designed for luxury. Hand-tufted perfection.</p>
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-bold">
                <span>Explore Collection</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </Link>
          <div className="grid grid-rows-2 gap-8">
            <Link to="/category/headboards" className="group relative overflow-hidden">
              <img src="/images/headboarddisplayimagehomepage.png" alt="Headboards" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-4xl font-serif mb-2 italic">Headboards</h2>
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-bold">
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
            <Link to="/category/bases" className="group relative overflow-hidden">
              <img src="/images/basesdisplayimagehomepage.png" alt="Bases" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-4xl font-serif mb-2 italic">Bases</h2>
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-bold">
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* The Bespoke Experience */}
      <section className="bg-ink text-paper py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 font-bold">Our Process</p>
            <h2 className="text-5xl md:text-7xl font-serif italic">The Bespoke Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <Ruler className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif">01. Consultation</h3>
              <p className="text-sm text-paper/60 leading-relaxed">We begin with a personal consultation to understand your sleep patterns, aesthetic preferences, and physical requirements.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <Hammer className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif">02. Master Crafting</h3>
              <p className="text-sm text-paper/60 leading-relaxed">Our master artisans hand-craft your bed using traditional techniques passed down through generations of fine furniture makers.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <Truck className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif">03. White Glove Delivery</h3>
              <p className="text-sm text-paper/60 leading-relaxed">Your sanctuary is delivered and installed by our specialist team, ensuring every detail is perfect before we leave your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 font-bold">Curated Selection</p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic">Featured Pieces</h2>
          </div>
          <Link to="/category/all" className="text-xs uppercase tracking-widest border-b border-ink/20 pb-2 hover:border-gold transition-colors font-bold">View All</Link>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="aspect-[3/4] bg-ink/5"></div>
                <div className="h-4 bg-ink/5 w-1/2 mx-auto"></div>
                <div className="h-4 bg-ink/5 w-1/4 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.length > 0 ? (
              featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-ink/40 italic">
                No products available yet. Visit the admin panel to add your collection.
              </div>
            )}
          </div>
        )}
      </section>

      {/* Mattress Technology Spotlight */}
      <section className="py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">The Collection</p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic">Specialized Innovations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "Sensation", features: "Latex & Memory Foam, Blue Gel Technology", warranty: "10 Year" },
              { name: "LuxLine", features: "Extra Lumber Support, High Density Core", warranty: "10 Year" },
              { name: "Dream-o-pedic", features: "Square Cut High Density Core", warranty: "10 Year" },
              { name: "Snooze-o-pedic", features: "Entry Level Luxury, High Density", warranty: "10 Year" },
              { name: "Econo", features: "Medium Density Core, Max Comfort", warranty: "5 Year" }
            ].map((tech, i) => (
              <div key={i} className="p-8 border border-ink/5 bg-white space-y-4 hover:border-gold/30 transition-colors group">
                <h4 className="text-xl font-serif text-ink group-hover:text-gold transition-colors">{tech.name}</h4>
                <p className="text-[10px] leading-relaxed text-ink/60 uppercase tracking-widest font-bold">{tech.features}</p>
                <div className="pt-4 border-t border-ink/5 flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-ink/40">Warranty</span>
                  <span className="text-[10px] font-bold text-gold">{tech.warranty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="/images/custombedsforallroomsetups.png" alt="Materials" className="w-full aspect-square object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            <div className="absolute -bottom-10 -right-10 bg-white p-12 shadow-2xl hidden md:block max-w-xs">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Pure Distinction</p>
              <h3 className="text-2xl font-serif mb-4">Sustainably Sourced</h3>
              <p className="text-xs text-ink/60 leading-relaxed">From Egyptian cotton to hand-teased horsehair, we use only the finest natural materials.</p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 font-bold">Materials</p>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-8 italic">Nature's Finest</h2>
              <p className="text-ink/60 leading-relaxed">We believe that luxury is found in the details. Our materials are chosen not just for their beauty, but for their breathability, durability, and natural comfort.</p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="text-gold font-serif text-2xl">01</div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Organic Silk</h4>
                  <p className="text-xs text-ink/60">Naturally hypoallergenic and temperature regulating for a cool, serene sleep.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="text-gold font-serif text-2xl">02</div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Cashmere Wool</h4>
                  <p className="text-xs text-ink/60">Unrivaled softness and warmth, providing a cloud-like feel to every mattress.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="text-gold font-serif text-2xl">03</div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Solid Oak & Walnut</h4>
                  <p className="text-xs text-ink/60">Sustainably harvested hardwoods for bases that last a lifetime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section - Dual Comfort */}
      <section className="bg-ink text-paper py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">The Science of Sleep</p>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-8 italic text-white line-height-[0.9]">Dual Comfort <br /> Innovation</h2>
              <p className="text-paper/60 text-lg leading-relaxed mb-12">
                Our uniquely designed dual comfort system allows for independent weight response within a single mattress. By combining the base's recessed design with our high-density core technology, we eliminate the 'split' feeling while providing personalized support for both individuals.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-80 decoration-gold/50 underline">Blue Gel Temperature Protection</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-80 decoration-gold/50 underline">Latex & Memory Foam Fusion</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-80 decoration-gold/50 underline">Removable Washable Covers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square border border-gold/20 p-8 rounded-full animate-spin-slow absolute inset-0 -z-10"></div>
              <img 
                src="/images/custombedsforallroomsetups.png" 
                alt="Dual Comfort System" 
                className="w-full aspect-square object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Covers Showcase */}
      <section className="bg-paper py-16 md:py-32 border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 font-bold">Protection & Style</p>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 italic">The Finishing Touch</h2>
              <p className="text-ink/60">Our premium covers and protectors ensure your investment remains pristine while adding an extra layer of tailored elegance.</p>
            </div>
            <Link to="/category/covers" className="bg-ink text-paper px-10 py-4 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-gold transition-all duration-500">
              View Covers
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group overflow-hidden">
              <img src="/images/premiumprotectorsforbases.jpeg" alt="Cover 1" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <div className="group overflow-hidden mt-12">
              <img src="/images/custombedsforallroomsetups.png" alt="Cover 2" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <div className="group overflow-hidden">
              <img src="/images/premiumcoversforbases.jpeg" alt="Cover 3" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-32">
        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 font-bold">Voices of Comfort</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic">Client Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Eleanor Vance", role: "Interior Designer", text: "Custom Beds is my go-to for every high-end residential project. Their attention to detail and custom capabilities are simply unmatched in the industry." },
            { name: "Julian Thorne", role: "Hotelier", text: "We switched our entire boutique hotel to Custom Beds mattresses. Our guest satisfaction scores for sleep quality have never been higher." },
            { name: "Sophia Chen", role: "Private Client", text: "The bespoke process was a dream. I finally have a bed that fits my height and my style perfectly. It's the best investment I've ever made." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-10 border border-ink/5 shadow-sm space-y-6">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-sm text-ink/70 italic leading-relaxed">"{t.text}"</p>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">{t.name}</p>
                <p className="text-[10px] text-ink/40 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
