import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContactCTA from './components/common/ContactCTA';

// Lazy load pages
const Home = React.lazy(() => import('./pages/home/Home'));
const CategoryPage = React.lazy(() => import('./pages/shop/CategoryPage'));
const ProductDetail = React.lazy(() => import('./pages/shop/ProductDetail'));
const Cart = React.lazy(() => import('./pages/shop/Cart'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const About = React.lazy(() => import('./pages/company/About'));
const Contact = React.lazy(() => import('./pages/company/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/company/PrivacyPolicy'));
const Experience = React.lazy(() => import('./pages/experience/Experience'));
const CustomBeds = React.lazy(() => import('./pages/experience/CustomBeds'));

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <React.Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/custom-beds" element={<CustomBeds />} />
          </Routes>
        </React.Suspense>
      </main>
      {!isAdminRoute && <ContactCTA />}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
