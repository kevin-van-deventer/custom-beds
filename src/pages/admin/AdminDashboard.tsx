import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { Product, Order } from '../../types';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../services/productService';
import { getOrders, updateOrderStatus } from '../../services/orderService';
import { Plus, Trash2, Edit2, Package, ShoppingBag, BarChart3, Save, X, CheckCircle2, Clock, Truck, PackageCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AdminDashboard = () => {
  const { isAdmin, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'stats'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Form State
  const [productForm, setProductForm] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    category: 'mattresses',
    stock: 0,
    images: [],
    features: []
  });

  useEffect(() => {
    if (!isAdmin && !authLoading) return;
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const prodData = await getProducts(selectedCategory === 'all' ? undefined : selectedCategory);
        setProducts(prodData);
        
        const orderData = await getOrders();
        setOrders(orderData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [isAdmin, authLoading, selectedCategory]);

  if (authLoading) return <div className="h-screen flex items-center justify-center">Verifying credentials...</div>;
  if (!isAdmin) return <div className="h-screen flex items-center justify-center text-red-500 font-bold">Access Denied. Admin only.</div>;

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id!, productForm);
      } else {
        await createProduct(productForm);
      }
      setIsAddingProduct(false);
      setEditingProduct(null);
      // Refresh
      const prodData = await getProducts();
      setProducts(prodData);
      setMessage({ text: `Product ${editingProduct ? 'updated' : 'created'} successfully`, type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error saving product', type: 'error' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(p => p.id !== id));
      setMessage({ text: 'Product deleted successfully', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error deleting product', type: 'error' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleUpdateOrderStatus = async (orderId: string, status: Order['status']) => {
    try {
      await updateOrderStatus(orderId, status);
      setOrders(orders.map(o => o.id === orderId ? { ...o, status } : o));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-8 right-8 z-50 px-6 py-4 shadow-2xl flex items-center space-x-3 rounded-lg ${message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
          >
            {message.type === 'success' ? <CheckCircle2 size={18} /> : <X size={18} />}
            <span className="text-xs font-bold uppercase tracking-widest">{message.text}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-serif mb-2">Management Console</h1>
          <p className="text-xs uppercase tracking-widest text-ink/40">Custom Beds Operational Dashboard</p>
        </div>
        <div className="flex bg-ink/5 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-2 rounded-md text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'products' ? 'bg-white shadow-sm text-gold' : 'text-ink/60'}`}
          >
            <Package size={14} className="inline mr-2" />
            Products
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-2 rounded-md text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'orders' ? 'bg-white shadow-sm text-gold' : 'text-ink/60'}`}
          >
            <ShoppingBag size={14} className="inline mr-2" />
            Orders
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-6 py-2 rounded-md text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'stats' ? 'bg-white shadow-sm text-gold' : 'text-ink/60'}`}
          >
            <BarChart3 size={14} className="inline mr-2" />
            Stock
          </button>
        </div>
      </header>

      {activeTab === 'products' && (
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {['all', 'mattresses', 'bases', 'headboards', 'covers'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                    selectedCategory === cat 
                      ? 'bg-gold border-gold text-white shadow-lg' 
                      : 'bg-transparent border-ink/10 text-ink/40 hover:border-ink/20 hover:text-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setProductForm({ name: '', description: '', price: 0, category: 'mattresses', stock: 0, images: [], features: [] });
                setEditingProduct(null);
                setIsAddingProduct(true);
              }}
              className="bg-ink text-paper px-6 py-3 uppercase text-[10px] tracking-widest font-bold hover:bg-gold transition-colors flex items-center space-x-2"
            >
              <Plus size={14} />
              <span>Add New Product</span>
            </button>
          </div>

          <div className="bg-white border border-ink/5 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-ink/5 text-[10px] uppercase tracking-widest font-bold text-ink/60">
                <tr>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-ink/[0.02] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-ink/5 rounded overflow-hidden">
                          <img src={product.images[0] || `https://picsum.photos/seed/${product.id}/100/100`} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                        </div>
                        <span className="font-medium text-sm">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs uppercase tracking-widest text-ink/60">{product.category}</td>
                    <td className="px-6 py-4 text-sm font-medium">${product.price.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold ${product.stock <= 5 ? 'text-red-500' : 'text-ink/60'}`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-4">
                      <button
                        onClick={() => {
                          setProductForm(product);
                          setEditingProduct(product);
                          setIsAddingProduct(true);
                        }}
                        className="text-ink/40 hover:text-gold transition-colors"
                      >
                        <Edit2 size={16} />
                      </button>
                      {confirmDeleteId === product.id ? (
                        <div className="inline-flex items-center space-x-2">
                          <button onClick={() => handleDeleteProduct(product.id!)} className="text-red-500 hover:text-red-700 font-bold text-[10px] uppercase tracking-widest">Confirm</button>
                          <button onClick={() => setConfirmDeleteId(null)} className="text-ink/40 hover:text-ink font-bold text-[10px] uppercase tracking-widest">Cancel</button>
                        </div>
                      ) : (
                        <button onClick={() => setConfirmDeleteId(product.id!)} className="text-ink/40 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="space-y-8">
          <h2 className="text-2xl font-serif">Customer Orders</h2>
          <div className="grid grid-cols-1 gap-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white border border-ink/5 p-8 shadow-sm flex flex-col md:flex-row justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Order #{order.id?.slice(-6)}</span>
                    <span className="text-xs text-ink/40">{new Date(order.createdAt?.seconds * 1000).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-serif">{order.customerName}</h3>
                  <p className="text-xs text-ink/60">{order.customerEmail}</p>
                  <div className="space-y-2">
                    {order.items.map((item, idx) => (
                      <p key={idx} className="text-xs text-ink/80">• {item.name} x {item.quantity}</p>
                    ))}
                  </div>
                  {order.customDetails && (
                    <div className="bg-paper p-4 text-[10px] italic text-ink/60 border-l-2 border-gold">
                      "{order.customDetails}"
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between items-end">
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-1">Total Value</p>
                    <p className="text-2xl font-serif">${order.totalPrice.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center space-x-2 bg-ink/5 p-1 rounded">
                    {(['pending', 'processing', 'shipped', 'delivered'] as const).map(status => (
                      <button
                        key={status}
                        onClick={() => handleUpdateOrderStatus(order.id!, status)}
                        className={`p-2 rounded transition-all ${order.status === status ? 'bg-white shadow-sm text-gold' : 'text-ink/40 hover:text-ink'}`}
                        title={status.charAt(0).toUpperCase() + status.slice(1)}
                      >
                        {status === 'pending' && <Clock size={16} />}
                        {status === 'processing' && <Truck size={16} />}
                        {status === 'shipped' && <PackageCheck size={16} />}
                        {status === 'delivered' && <CheckCircle2 size={16} />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-ink/5 shadow-sm text-center">
            <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-4">Total Inventory Value</p>
            <p className="text-4xl font-serif">${products.reduce((acc, p) => acc + (p.price * p.stock), 0).toLocaleString()}</p>
          </div>
          <div className="bg-white p-8 border border-ink/5 shadow-sm text-center">
            <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-4">Low Stock Items</p>
            <p className="text-4xl font-serif text-red-500">{products.filter(p => p.stock <= 5).length}</p>
          </div>
          <div className="bg-white p-8 border border-ink/5 shadow-sm text-center">
            <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-4">Total Orders</p>
            <p className="text-4xl font-serif">{orders.length}</p>
          </div>
        </div>
      )}

      {/* Product Modal */}
      <AnimatePresence>
        {isAddingProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddingProduct(false)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto p-10 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-serif">{editingProduct ? 'Edit Product' : 'New Product'}</h2>
                <button onClick={() => setIsAddingProduct(false)} className="text-ink/40 hover:text-ink">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Product Name</label>
                    <input
                      required
                      type="text"
                      value={productForm.name}
                      onChange={e => setProductForm({ ...productForm, name: e.target.value })}
                      className="w-full bg-paper border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Category</label>
                    <select
                      value={productForm.category}
                      onChange={e => setProductForm({ ...productForm, category: e.target.value })}
                      className="w-full bg-paper border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold uppercase tracking-widest"
                    >
                      <option value="mattresses">Mattresses</option>
                      <option value="bases">Bases</option>
                      <option value="headboards">Headboards</option>
                      <option value="covers">Covers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Price ($)</label>
                    <input
                      required
                      type="number"
                      value={productForm.price}
                      onChange={e => setProductForm({ ...productForm, price: Number(e.target.value) })}
                      className="w-full bg-paper border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Initial Stock</label>
                    <input
                      required
                      type="number"
                      value={productForm.stock}
                      onChange={e => setProductForm({ ...productForm, stock: Number(e.target.value) })}
                      className="w-full bg-paper border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Description</label>
                    <textarea
                      required
                      value={productForm.description}
                      onChange={e => setProductForm({ ...productForm, description: e.target.value })}
                      className="w-full bg-paper border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold h-32 resize-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Product Images (Upload)</label>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {productForm.images?.map((base64, index) => (
                          <div key={index} className="relative aspect-square group">
                            <img
                              src={base64}
                              alt={`Product ${index + 1}`}
                              className="w-full h-full object-cover rounded border border-ink/5"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              decoding="async"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newImages = productForm.images?.filter((_, i) => i !== index);
                                setProductForm({ ...productForm, images: newImages });
                              }}
                              className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        ))}
                        <label className="aspect-square border-2 border-dashed border-ink/10 rounded flex flex-col items-center justify-center cursor-pointer hover:border-gold hover:bg-gold/5 transition-all group">
                          <Plus size={24} className="text-ink/20 group-hover:text-gold mb-2" />
                          <span className="text-[8px] uppercase tracking-widest font-bold text-ink/40 group-hover:text-gold">Upload Image</span>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={async (e) => {
                              const files = Array.from(e.target.files || []);
                              const base64Promises = files.map((file: File) => {
                                return new Promise<string>((resolve, reject) => {
                                  const reader = new FileReader();
                                  reader.onload = () => resolve(reader.result as string);
                                  reader.onerror = reject;
                                  reader.readAsDataURL(file);
                                });
                              });
                              try {
                                const newBase64s = await Promise.all(base64Promises);
                                setProductForm({
                                  ...productForm,
                                  images: [...(productForm.images || []), ...newBase64s]
                                });
                              } catch (err) {
                                console.error('Error uploading images:', err);
                              }
                            }}
                          />
                        </label>
                      </div>
                      <p className="text-[10px] text-ink/40 italic">Images are stored directly in the database. Max 1MB total per product recommended.</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-ink text-paper py-5 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-gold transition-all duration-500 flex items-center justify-center space-x-3"
                >
                  <Save size={14} />
                  <span>{editingProduct ? 'Update Product' : 'Create Product'}</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
