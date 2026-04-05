import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, PenTool, Hammer, Truck, Sparkles, Ruler, Palette, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import BespokeOrderModal from '../../components/common/BespokeOrderModal';
import SEO from '../../components/common/SEO';
import { GoogleGenAI } from "@google/genai";

const CustomBeds = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const generateBespokeImage = async () => {
      setIsGenerating(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A high-end, luxury bedroom sanctuary being meticulously set up by a professional white-glove delivery team. The room is elegant with soft lighting, premium materials, and a bespoke custom bed as the centerpiece. The atmosphere is sophisticated and serene, matching a luxury London atelier brand aesthetic.',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
            },
          },
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            setGeneratedImage(`data:image/png;base64,${base64EncodeString}`);
            break;
          }
        }
      } catch (error) {
        console.error("Failed to generate image:", error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateBespokeImage();
  }, []);

  const steps = [
    {
      icon: <MessageSquare size={32} />,
      title: "The Inquiry",
      subtitle: "Step 01",
      description: "Discover your specific requirements on our platform or contact us for expert advice. We begin by understanding your unique sleep needs and aesthetic preferences.",
      image: "/images/step1custombeddesign.jpeg",
      accent: "bg-gold/10"
    },
    {
      icon: <PenTool size={32} />,
      title: "The Showroom at Home",
      subtitle: "Step 02",
      description: "We bring the showroom to you. Book an appointment with our expert team and experience the true quality of our materials and luxury finishes in the comfort of your home.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
      accent: "bg-ink/5"
    },
    {
      icon: <Hammer size={32} />,
      title: "Master Crafting",
      subtitle: "Step 03",
      description: "Our highly valued manufacturing team, with over 10 years of experience in carpentry and upholstery, hand-crafts your bed to your exact specifications.",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1200",
      accent: "bg-gold/10"
    },
    {
      icon: <Truck size={32} />,
      title: "Delivery & Installation",
      subtitle: "Step 04",
      description: "Your bespoke bed is delivered and professionally installed at your requested location, ensuring every detail is perfect before we consider the job done.",
      image: generatedImage || "https://images.unsplash.com/photo-1505693419173-42b925886275?auto=format&fit=crop&q=80&w=1200",
      accent: "bg-ink/5"
    }
  ];

  return (
    <div className="bg-paper min-h-screen overflow-hidden">
      <SEO 
        title="Bespoke Sanctuaries | Custom Bed Design Journey"
        description="Experience the Custom Beds Atelier. From initial discovery to master craftsmanship, co-create your perfect sleep sanctuary with our bespoke design journey."
        canonical="https://ais-pre-wur55bydyivnzlcfihylb7-161884020965.asia-southeast1.run.app/custom-beds"
      />
      {/* Immersive Hero Section: Branded & Custom */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1920" 
            alt="Bespoke Bed Craftsmanship" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
          />
          
          {/* Technical Grid Overlay - Custom Design Feeling */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #141414 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </div>

        <div className="relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="max-w-5xl mx-auto px-4">
              <p className="text-gold text-xs uppercase tracking-[0.8em] mb-4 font-bold">The Atelier Experience</p>
              <h1 className="text-ink text-7xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter">
                Bespoke <br /> <span className="italic text-gold">Sanctuaries</span>
              </h1>
            </div>

            <div className="relative w-full py-16 mt-12">
              {/* Full-width Banner */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
              
              <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-8">
                <p className="text-ink text-lg max-w-2xl leading-relaxed text-center font-medium">
                  The journey to perfect sleep is personal. We co-create a sanctuary that reflects your unique style and provides the ultimate foundation for your well-being.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Journey: Alternating Immersive Sections */}
      <div className="py-32">
        {steps.map((step, index) => (
          <section key={index} className="relative mb-32 last:mb-0">
            <div className={`max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`lg:col-span-7 relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl relative bg-ink/5">
                  <AnimatePresence mode="wait">
                    {isGenerating && !generatedImage ? (
                      <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-white/40 backdrop-blur-sm"
                      >
                        <Loader2 className="animate-spin text-gold" size={48} />
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Generating Bespoke Sanctuary...</p>
                      </motion.div>
                    ) : (
                      <motion.img 
                        key={step.image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </AnimatePresence>
                </div>
                {/* Decorative Element */}
                <div className={`absolute -z-10 w-full h-full ${step.accent} rounded-[2rem] -top-8 ${index % 2 === 0 ? '-left-8' : '-right-8'}`}></div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`lg:col-span-5 space-y-8 ${index % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}
              >
                <div className={`flex items-center space-x-4 ${index % 2 !== 0 ? 'justify-end' : ''}`}>
                  <span className="text-gold font-mono text-sm tracking-widest">{step.subtitle}</span>
                  <div className="h-[1px] w-8 bg-gold/30"></div>
                </div>
                <div className={`flex items-center space-x-6 ${index % 2 !== 0 ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className="p-4 bg-white shadow-xl rounded-2xl text-gold">
                    {step.icon}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif">{step.title}</h2>
                </div>
                <p className="text-ink/60 text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Unique Design Component: Material Palette */}
      <section className="bg-ink py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">The Library</p>
            <h2 className="text-white text-5xl md:text-7xl font-serif">A World of <span className="italic">Textures</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Belgian Linen", type: "Natural", img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400" },
              { name: "Italian Velvet", type: "Luxe", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
              { name: "British Wool", type: "Organic", img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=400" },
              { name: "Silk Blend", type: "Premium", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=400" }
            ].map((material, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden rounded-full mb-6 border-2 border-white/10 group-hover:border-gold transition-colors duration-500">
                  <img src={material.img} alt={material.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
                <div className="text-center">
                  <p className="text-white font-serif text-lg">{material.name}</p>
                  <p className="text-gold text-[9px] uppercase tracking-widest font-bold">{material.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-white/5 whitespace-nowrap pointer-events-none select-none">
          Bespoke Materials
        </div>
      </section>

      {/* Unique Design Component: Technical Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-4xl font-serif">Precision in <br /> Every <span className="italic">Dimension</span></h3>
            <p className="text-ink/60 leading-relaxed">
              We don't believe in standard sizes. Your bed is engineered to fit your life, whether that means extra height for storage or a custom width for a specific room layout.
            </p>
            <ul className="space-y-4">
              {[
                { icon: <Ruler size={16} />, text: "Millimeter-precise measurements" },
                { icon: <Palette size={16} />, text: "Infinite color combinations" },
                { icon: <ShieldCheck size={16} />, text: "Structural integrity guarantee" }
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 text-xs uppercase tracking-widest font-bold text-ink/40">
                  <span className="text-gold">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-ink/5 rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600" alt="Detail" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <div className="aspect-square bg-gold/10 rounded-3xl flex items-center justify-center p-12 text-center">
              <div>
                <Sparkles size={48} className="text-gold mx-auto mb-6" />
                <p className="text-2xl font-serif italic">"A bed that fits you like a tailored suit."</p>
              </div>
            </div>
            <div className="col-span-2 h-64 bg-ink rounded-3xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200" alt="Workshop" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-xs uppercase tracking-[0.5em] font-bold">Handcrafted in London</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: Start Your Journey */}
      <section className="py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-ink rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-10"
            >
              <p className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold">Your Project Starts Here</p>
              <h2 className="text-white text-5xl md:text-8xl font-serif leading-tight">Ready to <br /><span className="italic text-gold">Begin?</span></h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
                Submit your initial requirements and our master designers will contact you to start the journey of creating your bespoke sanctuary.
              </p>
              <div className="pt-8">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gold text-white px-16 py-6 uppercase text-[12px] tracking-[0.3em] font-bold hover:bg-white hover:text-ink transition-all duration-500 shadow-2xl flex items-center space-x-4 mx-auto"
                >
                  <span>Start Your Bespoke Project</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BespokeOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CustomBeds;
