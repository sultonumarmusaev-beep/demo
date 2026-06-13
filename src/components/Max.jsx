// src/pages/Cart.jsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Routes, Route } from 'react-router-dom';

const Cart = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2><ShoppingCart /> Ваша корзина</h2>
      <p style={{ color: '#666', marginTop: '10px' }}>В корзине пока пусто...</p>
    </div>
  );
};

export default Cart;