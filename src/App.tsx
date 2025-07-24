// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CartProvider } from './context/CartContext';
import Login from './pages/Login';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Menu />
                <About />
                <Contact />
              </>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
