import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Qidiruv uchun state
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

  // Mahsulotlarni qidiruv so'ziga qarab filtrlash
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      
      {/* QIDIRUV INPUTI */}
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <input 
          type="text" 
          placeholder="Search products..." 
          style={{ 
            padding: '12px 20px', 
            width: '100%', 
            maxWidth: '400px', 
            borderRadius: '25px', 
            border: '2px solid #2563eb',
            outline: 'none',
            fontSize: '16px'
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Collection</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} style={{ 
              width: '260px', 
              border: '1px solid #eee', 
              borderRadius: '15px', 
              padding: '20px', 
              backgroundColor: 'white',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <div style={{ height: '180px', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                <img src={product.image} alt={product.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '16px', height: '40px', overflow: 'hidden', marginBottom: '10px' }}>{product.title}</h3>
              <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#2563eb' }}>${product.price}</p>
              <button 
                onClick={() => addToCart(product)}
                style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '10px', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' }}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found with "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default Home;