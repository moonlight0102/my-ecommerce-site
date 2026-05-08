import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav style={{ 
      backgroundColor: '#2563eb', 
      padding: '10px 40px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      color: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '24px', 
        fontWeight: 'bold',
        letterSpacing: '1px'
      }}>
        MOONLIGHT SHOP
      </Link>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '30px' 
      }}>
        <Link to="/" style={{ 
          color: 'white', 
          textDecoration: 'none', 
          fontWeight: '500',
          fontSize: '16px'
        }}>
          Home
        </Link>
        
        <Link to="/cart" style={{ 
          color: 'white', 
          textDecoration: 'none', 
          fontWeight: '500', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>
          <span style={{ fontSize: '20px' }}>🛒</span>
          <span style={{ 
            backgroundColor: 'white', 
            color: '#2563eb', 
            borderRadius: '50%', 
            padding: '2px 8px', 
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {cart.length}
          </span>
        </Link>

        <Link to="/add-product" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
          padding: '8px 18px', 
          borderRadius: '25px',
          color: 'white',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '600',
          transition: '0.3s'
        }}>
          <span>👤</span> Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;