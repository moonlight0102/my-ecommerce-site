import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>Your cart is empty.</p>
          <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>
            Go back to shopping
          </Link>
        </div>
      ) : (
        <div>
          <div style={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden' }}>
            {cart.map((item) => (
              <div key={item.id} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '20px', 
                borderBottom: '1px solid #eee',
                backgroundColor: 'white'
              }}>
                <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                
                <div style={{ flex: 1, marginLeft: '20px' }}>
                  <h3 style={{ fontSize: '18px', margin: '0 0 5px 0' }}>{item.title}</h3>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: '#2563eb' }}>${item.price}</p>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ 
                    backgroundColor: '#fee2e2', 
                    color: '#ef4444', 
                    border: 'none', 
                    padding: '10px 15px', 
                    borderRadius: '8px', 
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '30px', textAlign: 'right', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
            <h2 style={{ margin: '0 0 10px 0' }}>Total: ${totalPrice}</h2>
            <button style={{ 
              backgroundColor: '#2563eb', 
              color: 'white', 
              border: 'none', 
              padding: '12px 30px', 
              borderRadius: '8px', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;