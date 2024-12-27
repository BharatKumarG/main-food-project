import { type Dish } from '../dishes';

export const breakfastDishes: Dish[] = [
  {
    id: 101,
    name: 'Pesarattu Dosa',
    price: 8.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Healthy green gram dosa served with ginger chutney',
    category: 'Breakfast',
    spiceLevel: 'Medium',
    isVegetarian: true
  },
  {
    id: 102,
    name: 'Upma',
    price: 7.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Savory semolina breakfast with vegetables and ghee',
    category: 'Breakfast',
    spiceLevel: 'Mild',
    isVegetarian: true
  },
  {
    id: 103,
    name: 'Idli Sambar',
    price: 8.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589301570440-d7c37e159c63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Steamed rice cakes with lentil soup and chutneys',
    category: 'Breakfast',
    spiceLevel: 'Medium',
    isVegetarian: true
  }
];