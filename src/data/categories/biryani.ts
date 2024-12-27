import { type Dish } from '../dishes';

export const biryaniDishes: Dish[] = [
  {
    id: 301,
    name: 'Hyderabadi Chicken Biryani',
    price: 18.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Fragrant rice cooked with tender chicken and aromatic spices',
    category: 'Biryani',
    spiceLevel: 'Hot'
  },
  {
    id: 302,
    name: 'Mutton Biryani',
    price: 20.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Rich and flavorful biryani with tender mutton pieces',
    category: 'Biryani',
    spiceLevel: 'Hot'
  },
  {
    id: 303,
    name: 'Vegetable Biryani',
    price: 14.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1593179241557-bce1eb92e47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Mixed vegetables cooked with aromatic rice and spices',
    category: 'Biryani',
    spiceLevel: 'Medium',
    isVegetarian: true
  }
];