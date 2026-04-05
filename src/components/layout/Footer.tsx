import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-ink text-paper py-16 md:py-20 mt-20">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      <div>
        <h3 className="text-2xl font-serif mb-6 italic">Custom Beds</h3>
        <p className="text-paper/60 text-sm leading-relaxed">
          Crafting the finest custom sleep experiences since 1998. Every bed is a masterpiece of comfort and design.
        </p>
      </div>
      <div>
        <h4 className="font-medium mb-6 uppercase text-xs tracking-widest">Shop</h4>
        <ul className="space-y-4 text-sm text-paper/60">
          <li><Link to="/category/mattresses">Mattresses</Link></li>
          <li><Link to="/category/bases">Bases</Link></li>
          <li><Link to="/category/headboards">Headboards</Link></li>
          <li><Link to="/category/covers">Covers</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-6 uppercase text-xs tracking-widest">Company</h4>
        <ul className="space-y-4 text-sm text-paper/60">
          <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          <li>Shipping & Returns</li>
          <li>Warranty</li>
          <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
        <p className="text-sm text-paper/60 mb-4">Join our list for exclusive sleep tips and offers.</p>
        <div className="flex">
          <input type="email" placeholder="Email" className="bg-white/10 border-none px-4 py-2 w-full focus:ring-1 focus:ring-gold" />
          <button className="bg-gold px-4 py-2 text-white uppercase text-xs font-bold">Join</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/10 text-center text-xs text-paper/40">
      &copy; {new Date().getFullYear()} Custom Beds. All rights reserved.
    </div>
  </footer>
);

export default Footer;
