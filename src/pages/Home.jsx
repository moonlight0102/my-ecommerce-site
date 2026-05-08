import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-2xl font-semibold text-gray-600">Loading products...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Exclusive Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <img 
                src={product.image} 
                alt={product.title} 
                className="h-48 w-full object-contain mb-4" 
              />
              <h2 className="text-lg font-semibold text-gray-700 line-clamp-2">{product.title}</h2>
              <p className="text-gray-500 text-sm mt-2">{product.category}</p>
            </div>
            
            <div className="mt-4">
              <p className="text-xl font-bold text-blue-600">${product.price}</p>
              <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;