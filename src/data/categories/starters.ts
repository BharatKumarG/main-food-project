import { type Dish } from '../dishes';

export const starterDishes: Dish[] = [
  {
    id: 401,
    name: 'Chicken 65',
    price: 12.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Spicy deep-fried chicken with curry leaves',
    category: 'Starters',
    spiceLevel: 'Hot'
  },
  {
    id: 402,
    name: 'Mirchi Bajji',
    price: 6.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Stuffed chili fritters served with chutney',
    category: 'Starters',
    spiceLevel: 'Hot',
    isVegetarian: true
  },
  {
    id: 403,
    name: 'Punugulu',
    price: 7.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1601050690717-2b5b67f09e05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Deep-fried rice batter balls with spices',
    category: 'Starters',
    spiceLevel: 'Medium',
    isVegetarian: true
  }
];