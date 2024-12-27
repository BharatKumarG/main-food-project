import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { dishes } from '../data/dishes';
import { DishCard } from './DishCard';
import { CategoryFilter } from './CategoryFilter';

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = Array.from(new Set(dishes.map(dish => dish.category)));

  const filteredDishes = selectedCategory === 'All'
    ? dishes
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <section className="py-12 bg-gray-50" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Menu
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover authentic Andhra cuisine with our carefully curated menu
          </p>
        </motion.div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}