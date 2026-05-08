import { useCart } from '../context/CartContext';
import { AiOutlineDelete } from 'react-icons/ai';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty</h2>
        <p className="text-gray-400 mt-2">Add some products to see them here!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 border rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div>
                <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                <p className="text-blue-600 font-bold">${item.price}</p>
              </div>
            </div>
            
            <button 
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:bg-red-50 p-2 rounded-full transition"
            >
              <AiOutlineDelete size={24} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <div>
          <p className="text-gray-600 text-lg">Total Price:</p>
          <p className="text-3xl font-bold text-gray-900">${totalPrice}</p>
        </div>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg">
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default Cart;