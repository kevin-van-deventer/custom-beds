import { collection, query, getDocs, getDoc, doc, where, limit, orderBy, addDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Product } from '../types';

export const getProducts = async (categorySlug?: string, limitCount?: number) => {
  let q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
  
  if (categorySlug && categorySlug !== 'all') {
    q = query(q, where('category', '==', categorySlug));
  }
  
  if (limitCount) {
    q = query(q, limit(limitCount));
  }
  
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Product));
};

export const getProductById = async (id: string) => {
  const docSnap = await getDoc(doc(db, 'products', id));
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Product;
  }
  return null;
};

export const createProduct = async (product: Partial<Product>) => {
  return await addDoc(collection(db, 'products'), {
    ...product,
    createdAt: serverTimestamp()
  });
};

export const updateProduct = async (id: string, product: Partial<Product>) => {
  return await updateDoc(doc(db, 'products', id), {
    ...product,
    updatedAt: serverTimestamp()
  });
};

export const deleteProduct = async (id: string) => {
  return await deleteDoc(doc(db, 'products', id));
};
