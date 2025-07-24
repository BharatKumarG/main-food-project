import React, { useState } from 'react';
import { ShoppingCart, Menu as MenuIcon, X, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Cart } from './Cart';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './AuthModal';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { state } = useCart();
  const { user, logout } = useAuth();

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
  };

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
                className="flex items-center space-x-1 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                <ShoppingCart size={20} />
                <span>Cart ({itemCount})</span>
              </button>

              {/* Auth Section */}
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <User size={16} className="text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Sign In
                </button>
              )}
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

              {/* Mobile Auth */}
              {user ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 px-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <User size={16} className="text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-600 hover:text-red-600 w-full px-2 py-1"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md w-full transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <AuthModal onClose={() => setShowAuthModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}
