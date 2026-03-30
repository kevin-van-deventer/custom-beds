import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-white">
        <div className="aspect-[3/4] overflow-hidden relative">
          <img
            src={product.images[0] || `/images/premium_covers_for_bases.png`}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          {product.stock <= 5 && product.stock > 0 && (
            <span className="absolute top-4 left-4 bg-gold text-white text-[10px] uppercase tracking-widest px-2 py-1">
              Low Stock
            </span>
          )}
          {product.stock === 0 && (
            <span className="absolute inset-0 bg-ink/40 flex items-center justify-center text-white text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-[2px]">
              Out of Stock
            </span>
          )}
        </div>
        <div className="py-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-2">{product.category}</p>
          <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{product.name}</h3>
          <p className="text-sm font-light text-ink/60">From ${product.price.toLocaleString()}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
