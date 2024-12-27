import { type Dish } from '../dishes';

export const curryDishes: Dish[] = [
  {
    id: 201,
    name: 'Gongura Chicken',
    price: 299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Spicy Andhra style chicken cooked with traditional gongura leaves',
    category: 'Curries',
    spiceLevel: 'Hot'
  },
  {
    id: 202,
    name: 'Andhra Fish Curry',
    price: 329,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Traditional fish curry with tamarind and red chilies',
    category: 'Curries',
    spiceLevel: 'Extra Hot'
  },
  {
    id: 203,
    name: 'Gutti Vankaya',
    price: 249,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Stuffed eggplant curry with peanut and sesame paste',
    category: 'Curries',
    spiceLevel: 'Hot',
    isVegetarian: true
  },
  {
    id: 204,
    name: 'Natu Kodi Curry',
    price: 349,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Country chicken curry cooked with traditional spices',
    category: 'Curries',
    spiceLevel: 'Extra Hot'
  },
  {
    id: 205,
    name: 'Royyala Iguru',
    price: 329,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Prawns curry cooked in special Andhra masala',
    category: 'Curries',
    spiceLevel: 'Hot'
  }
];