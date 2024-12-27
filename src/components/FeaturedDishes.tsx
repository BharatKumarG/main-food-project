import React from 'react';
import { Star } from 'lucide-react';

const featuredDishes = [
  {
    id: 1,
    name: 'Signature Burger',
    price: 12.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Premium beef patty with special sauce and fresh vegetables'
  },
  {
    id: 2,
    name: 'Mediterranean Salad',
    price: 9.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Fresh vegetables with olive oil and feta cheese'
  },
  {
    id: 3,
    name: 'Margherita Pizza',
    price: 14.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Classic Italian pizza with fresh basil and mozzarella'
  }
];

export function FeaturedDishes() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Dishes
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our most popular and highly rated dishes
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={dish.image} alt={dish.name} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">{dish.rating}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-base text-gray-500">{dish.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${dish.price}</span>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}