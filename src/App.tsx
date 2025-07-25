// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <>
              <Hero />
              <Menu />
              <About />
              <Contact />
            </>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
