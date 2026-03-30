export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  images: string[];
  features: string[];
  createdAt: any;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id?: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  customDetails: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  totalPrice: number;
  createdAt: any;
}

export interface Category {
  id?: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  role: 'admin' | 'customer';
}
