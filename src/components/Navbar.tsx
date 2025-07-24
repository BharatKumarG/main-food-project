import React, { useState } from 'react';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Cart } from './Cart';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">FoodHub</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>

              <button 
                onClick={() => setIsCartOpen(true)}
                className="flex items-center space-x-1 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
              >
                <ShoppingCart size={20} />
                <span>Cart ({itemCount})</span>
              </button>

              {/* Login and Signup */}
              <a href="/login" className="text-gray-700 hover:text-orange-600 px-2">Login</a>
              <a href="/signup" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-md">Signup</a>
            </div>

            {/* Hamburger menu */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-orange-600">Home</a>
              <a href="#menu" className="block text-gray-700 hover:text-orange-600">Menu</a>
              <a href="#about" className="block text-gray-700 hover:text-orange-600">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-orange-600">Contact</a>

              <button 
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-1 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 w-full"
              >
                <ShoppingCart size={20} />
                <span>Cart ({itemCount})</span>
              </button>

              {/* Mobile Login/Signup */}
              <a href="/login" className="block text-gray-700 hover:text-orange-600">Login</a>
              <a href="/signup" className="block text-gray-800 bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md">Signup</a>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
