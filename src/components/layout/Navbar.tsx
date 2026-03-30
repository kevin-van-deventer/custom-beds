import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { user, isAdmin, login, logout } = useAuth();
  const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const productLinks = [
    { name: 'Mattresses', path: '/category/mattresses' },
    { name: 'Bases', path: '/category/bases' },
    { name: 'Headboards', path: '/category/headboards' },
    { name: 'Covers', path: '/category/covers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="text-2xl font-serif tracking-widest uppercase italic">Custom Beds</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/custom-beds" className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold transition-colors">Custom Beds</Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-gold transition-colors py-8">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Products</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 bg-white border border-ink/5 shadow-2xl py-4"
                  >
                    {productLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-paper hover:text-gold transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold transition-colors">About</Link>
            <Link to="/contact" className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative p-2 hover:bg-ink/5 rounded-full transition-colors">
              <ShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 bg-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {items.reduce((acc, i) => acc + i.quantity, 0)}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                {isAdmin && (
                  <Link to="/admin" className="p-2 hover:bg-ink/5 rounded-full transition-colors" title="Admin Dashboard">
                    <LayoutDashboard size={20} />
                  </Link>
                )}
                <button onClick={logout} className="p-2 hover:bg-ink/5 rounded-full transition-colors" title="Logout">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button onClick={login} className="p-2 hover:bg-ink/5 rounded-full transition-colors">
                <User size={20} />
              </button>
            )}
            
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-b border-ink/5 overflow-hidden"
          >
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <Link 
                  to="/custom-beds" 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-serif italic hover:text-gold transition-colors"
                >
                  Custom Beds
                </Link>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Collections</p>
                <div className="grid grid-cols-2 gap-4">
                  {productLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-serif italic hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-ink/5 space-y-4">
                <Link to="/about" onClick={() => setIsOpen(false)} className="block text-lg font-serif italic">About</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-lg font-serif italic">Contact</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
