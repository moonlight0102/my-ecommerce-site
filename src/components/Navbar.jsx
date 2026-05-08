import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '../context/CartContext'; 

const Navbar = () => {
  const { cart } = useCart(); 

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
        MOONLIGHT <span className="text-gray-800">SHOP</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/cart" className="relative">
            <AiOutlineShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;