// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '15px', background: '#333', color: '#fff', display: 'flex', gap: '20px' }}>
      <Link to="/katalog" style={{ color: '#fff', textDecoration: 'none' }}>Главная</Link>
      <Link to="/support" style={{ color: '#fff', textDecoration: 'none' }}>Поддержка</Link>
      <Link to="/max" style={{ color: '#fff', textDecoration: 'none' }}>Корзина</Link>
      <Link to="/monolog" style={{ color: '#fff', textDecoration: 'none' }}>Избрание</Link>
    </nav>
  );
};

export default Navbar;