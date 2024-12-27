import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Clock, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Authentic Andhra Cuisine in Guntur
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-orange-50 rounded-lg"
          >
            <Utensils className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Traditional Recipes</h3>
            <p className="text-gray-600">Authentic Andhra flavors passed down through generations</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-orange-50 rounded-lg"
          >
            <Clock className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Fresh Preparation</h3>
            <p className="text-gray-600">All dishes are prepared fresh upon order</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-orange-50 rounded-lg"
          >
            <Award className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
            <p className="text-gray-600">Committed to providing the best dining experience</p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Founded by <span className="font-semibold">Bharat Kumar</span>, we bring the authentic taste of Andhra Pradesh to your table.
          </p>
        </div>
      </div>
    </section>
  );
}