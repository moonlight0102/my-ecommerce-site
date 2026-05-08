import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({ title: '', price: '', image: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mahsulot muvaffaqiyatli qo'shildi (Hozircha faqat konsolda ko'rinadi)");
    console.log("Yangi mahsulot:", product);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '12px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Add New Product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Product Title" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
               onChange={(e) => setProduct({...product, title: e.target.value})} />
        <input type="number" placeholder="Price" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
               onChange={(e) => setProduct({...product, price: e.target.value})} />
        <input type="text" placeholder="Image URL (https://...)" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
               onChange={(e) => setProduct({...product, image: e.target.value})} />
        <textarea placeholder="Description" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', height: '100px' }} 
               onChange={(e) => setProduct({...product, description: e.target.value})}></textarea>
        <button type="submit" style={{ backgroundColor: '#10b981', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;