import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { getProductById } from '../../services/productService';
import { motion } from 'motion/react';
import { Plus, Minus, Check, Truck, ShieldCheck, RotateCcw } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <div className="h-screen flex items-center justify-center">Product not found.</div>;

  const handleAddToCart = () => {
    addItem({
      productId: product.id!,
      name: product.name,
      price: product.price,
      quantity
    });
    // Optional: show a toast or redirect
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Images */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[4/5] overflow-hidden bg-white"
          >
            <img
              src={product.images[activeImage] || `/images/headboard_display_image_homepage.png`}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {(product.images.length > 0 ? product.images : [1, 2, 3, 4]).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`aspect-square overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-gold' : 'border-transparent'}`}
              >
                <img
                  src={typeof img === 'string' ? img : "/images/bases_display_image_homepage.png"}
                  alt={`${product.name} thumbnail ${idx}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 font-bold">{product.category}</p>
          <h1 className="text-5xl font-serif mb-6">{product.name}</h1>
          <p className="text-2xl font-light mb-8">${product.price.toLocaleString()}</p>
          
          <div className="prose prose-sm text-ink/60 mb-12 max-w-none">
            <p>{product.description}</p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="flex items-center space-x-6">
              <span className="text-xs uppercase tracking-widest font-bold">Quantity</span>
              <div className="flex items-center border border-ink/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-ink/5 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-ink/5 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full py-5 uppercase text-xs tracking-[0.2em] font-bold transition-all duration-500 ${
                product.stock === 0
                  ? 'bg-ink/10 text-ink/40 cursor-not-allowed'
                  : 'bg-ink text-paper hover:bg-gold'
              }`}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Collection'}
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-ink/5">
            <div className="flex items-start space-x-4">
              <Truck size={20} className="text-gold shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-1">White Glove Delivery</h4>
                <p className="text-[10px] text-ink/60">Complimentary setup in your room of choice.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <ShieldCheck size={20} className="text-gold shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-1">10 Year Warranty</h4>
                <p className="text-[10px] text-ink/60">Guaranteed quality and craftsmanship.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <RotateCcw size={20} className="text-gold shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-1">100 Night Trial</h4>
                <p className="text-[10px] text-ink/60">Sleep on it. Love it or return it.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Check size={20} className="text-gold shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Eco-Friendly</h4>
                <p className="text-[10px] text-ink/60">Sustainably sourced premium materials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
