import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, CreditCard } from 'lucide-react';
import { createOrder } from '../../services/orderService';
import { motion, AnimatePresence } from 'motion/react';

const Cart = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', customDetails: '' });
  const navigate = useNavigate();

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    try {
      await createOrder({
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customDetails: customerInfo.customDetails,
        items: items,
        totalPrice: total
      });
      clearCart();
      setOrderComplete(true);
    } catch (err) {
      console.error(err);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="max-w-xl mx-auto px-4 py-40 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 shadow-xl border border-ink/5"
        >
          <h1 className="text-4xl font-serif mb-6">Thank You</h1>
          <p className="text-ink/60 mb-8 leading-relaxed">
            Your custom order has been received. One of our sleep consultants will contact you shortly to finalize the details.
          </p>
          <Link to="/" className="inline-block bg-ink text-paper px-10 py-4 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-gold transition-colors">
            Return to Store
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 text-center">
        <h1 className="text-4xl font-serif mb-8">Your Collection is Empty</h1>
        <Link to="/" className="text-xs uppercase tracking-widest border-b border-ink/20 pb-2 hover:border-gold transition-colors">
          Start Exploring
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-serif mb-16">Your Collection</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-12">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.productId}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center space-x-8 pb-12 border-b border-ink/5"
              >
                <div className="w-32 h-40 bg-ink/5 overflow-hidden">
                  <img
                    src="/images/mattressdisplayimagehomepage.jpg"
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif">{item.name}</h3>
                    <button onClick={() => removeItem(item.productId)} className="text-ink/40 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm font-light text-ink/60 mb-6">${item.price.toLocaleString()}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-ink/10">
                      <button
                        onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                        className="p-2 hover:bg-ink/5 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="p-2 hover:bg-ink/5 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-sm font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Checkout Form */}
        <div className="bg-white p-10 border border-ink/5 shadow-sm h-fit sticky top-32">
          <h2 className="text-2xl font-serif mb-8">Order Summary</h2>
          <div className="space-y-4 mb-8 pb-8 border-b border-ink/5">
            <div className="flex justify-between text-sm">
              <span className="text-ink/60">Subtotal</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-ink/60">Shipping</span>
              <span className="text-gold uppercase text-[10px] font-bold tracking-widest">Complimentary</span>
            </div>
            <div className="flex justify-between text-xl font-serif pt-4">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Full Name</label>
              <input
                required
                type="text"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                className="w-full bg-paper border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Email Address</label>
              <input
                required
                type="email"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                className="w-full bg-paper border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Customization Requests</label>
              <textarea
                value={customerInfo.customDetails}
                onChange={(e) => setCustomerInfo({ ...customerInfo, customDetails: e.target.value })}
                className="w-full bg-paper border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold h-24 resize-none"
                placeholder="Dimensions, materials, etc."
              />
            </div>
            <button
              type="submit"
              disabled={isCheckingOut}
              className="w-full bg-ink text-paper py-5 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-gold transition-all duration-500 flex items-center justify-center space-x-3"
            >
              {isCheckingOut ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>Place Custom Order</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 flex items-center justify-center space-x-2 text-[10px] text-ink/40 uppercase tracking-widest">
            <CreditCard size={12} />
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
