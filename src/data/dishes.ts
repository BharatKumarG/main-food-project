export interface Dish {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  category: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'Extra Hot';
  isVegetarian?: boolean;
}

import { breakfastDishes } from './categories/breakfast';
import { curryDishes } from './categories/curries';
import { biryaniDishes } from './categories/biryani';
import { starterDishes } from './categories/starters';
import { dalDishes } from './categories/dal';

export const dishes: Dish[] = [
  ...breakfastDishes,
  ...curryDishes,
  ...biryaniDishes,
  ...starterDishes,
  ...dalDishes
];