import { collection, query, getDocs, addDoc, updateDoc, doc, serverTimestamp, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Order } from '../types';

export const getOrders = async () => {
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Order));
};

export const createOrder = async (order: Partial<Order>) => {
  return await addDoc(collection(db, 'orders'), {
    ...order,
    createdAt: serverTimestamp(),
    status: 'pending'
  });
};

export const updateOrderStatus = async (id: string, status: Order['status']) => {
  return await updateDoc(doc(db, 'orders', id), { status });
};
