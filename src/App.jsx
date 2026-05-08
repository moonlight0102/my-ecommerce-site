import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <CartProvider> 
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<div className="p-10 text-center text-2xl">Cart Page</div>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;