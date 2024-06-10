export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  { id: 1, name: 'T-shirt', price: '€ 14.99', image: '/images/item1.png' },
  { id: 2, name: 'Phone Case', price: '€ 9.99', image: '/images/item2.png' },
  { id: 3, name: 'Water Bottle', price: '€ 12.99', image: '/images/item3.png' },
  { id: 4, name: 'Tote', price: '€ 5.99', image: '/images/item4.png' },
  { id: 5, name: 'Cap', price: '€ 6.99', image: '/images/item5.png' },
  { id: 6, name: 'Backpack', price: '€ 14.99', image: '/images/item6.png' },
  { id: 7, name: 'Sweatshirt', price: '€ 19.99', image: '/images/item7.png' },
  { id: 8, name: 'Stickers', price: '€ 0.99', image: '/images/item8.png' },
  { id: 9, name: 'T-shirt', price: '€ 14.99', image: '/images/item9.png' },
  { id: 10, name: 'Socks', price: '€ 3.99', image: '/images/item10.png' },
  { id: 11, name: 'Mug', price: '€ 10.99', image: '/images/item11.png' },
];