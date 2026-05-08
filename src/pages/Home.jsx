import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading products...</div>;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px', fontFamily: 'sans-serif' }}>
        Our Collection
      </h1>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px', 
        justifyContent: 'center' 
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
            width: '250px', 
            border: '1px solid #eee', 
            borderRadius: '12px', 
            padding: '15px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            

            <div style={{ width: '100%', height: '180px', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
              />
            </div>

            <h2 style={{ fontSize: '16px', height: '40px', overflow: 'hidden', textAlign: 'center', marginBottom: '10px' }}>
              {product.title}
            </h2>
            
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563eb' }}>
              ${product.price}
            </p>

            <button 
              onClick={() => addToCart(product)}
              style={{ 
                width: '100%',
                backgroundColor: '#2563eb', 
                color: 'white', 
                padding: '10px', 
                border: 'none', 
                borderRadius: '8px', 
                cursor: 'pointer',
                marginTop: '10px',
                fontWeight: 'bold'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;