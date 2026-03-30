import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../../types';
import ProductCard from '../../components/product/ProductCard';
import { getProducts } from '../../services/productService';
import { motion } from 'motion/react';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts(slug);
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [slug]);

  const categoryName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'All Products';

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <header className="mb-20 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 font-bold">Collections</p>
        <h1 className="text-5xl font-serif mb-6">{categoryName}</h1>
        <div className="flex justify-center space-x-8 text-xs uppercase tracking-widest font-medium text-ink/40">
          <Link to="/category/mattresses" className={slug === 'mattresses' ? 'text-gold' : ''}>Mattresses</Link>
          <Link to="/category/bases" className={slug === 'bases' ? 'text-gold' : ''}>Bases</Link>
          <Link to="/category/headboards" className={slug === 'headboards' ? 'text-gold' : ''}>Headboards</Link>
          <Link to="/category/covers" className={slug === 'covers' ? 'text-gold' : ''}>Covers</Link>
        </div>
      </header>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="animate-pulse space-y-4">
              <div className="aspect-[3/4] bg-ink/5"></div>
              <div className="h-4 bg-ink/5 w-1/2 mx-auto"></div>
              <div className="h-4 bg-ink/5 w-1/4 mx-auto"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-40">
              <p className="text-ink/40 italic mb-8">No products found in this collection.</p>
              <Link to="/" className="text-xs uppercase tracking-widest border-b border-ink/20 pb-2 hover:border-gold transition-colors">Return Home</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
