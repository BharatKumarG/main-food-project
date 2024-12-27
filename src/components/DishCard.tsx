import React from 'react';
import { Star, Flame, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { type Dish } from '../data/dishes';
import { useCart } from '../context/CartContext';

interface DishCardProps {
  dish: Dish;
}

export function DishCard({ dish }: DishCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: dish });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white"
    >
      <div className="relative flex-shrink-0">
        <img 
          className="h-48 w-full object-cover" 
          src={dish.image} 
          alt={dish.name}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80';
          }}
        />
        {dish.isVegetarian && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full flex items-center text-sm">
            <Leaf size={16} className="mr-1" />
            Veg
          </div>
        )}
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">{dish.rating}</span>
            </div>
          </div>
          <p className="mt-3 text-base text-gray-500">{dish.description}</p>
          {dish.spiceLevel && (
            <div className="mt-2 flex items-center">
              <Flame size={16} className="text-red-500" />
              <span className="ml-1 text-sm text-gray-600">{dish.spiceLevel}</span>
            </div>
          )}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">₹{dish.price}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}