export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  color: string;
}

export const products: Product[] = [
  { id: 1, name: 'T-shirt', price: '€ 14.99', image: '/images/item1.png', color: 'white' },
  { id: 2, name: 'Phone Case', price: '€ 9.99', image: '/images/item2.png' , color: 'white' },
  { id: 3, name: 'Water Bottle', price: '€ 12.99', image: '/images/item3.png', color: 'white' },
  { id: 4, name: 'Tote', price: '€ 5.99', image: '/images/item4.png', color: 'black' },
  { id: 5, name: 'Cap', price: '€ 6.99', image: '/images/item5.png', color: 'black' },
  { id: 6, name: 'Backpack', price: '€ 14.99', image: '/images/item6.png', color: 'black' },
  { id: 7, name: 'Sweatshirt', price: '€ 19.99', image: '/images/item7.png', color: 'gray' },
  { id: 8, name: 'Stickers', price: '€ 0.99', image: '/images/item8.png', color: 'white' },
  { id: 9, name: 'T-shirt', price: '€ 14.99', image: '/images/item9.png', color: 'black' },
  { id: 10, name: 'Socks', price: '€ 3.99', image: '/images/item10.png', color: 'white' },
  { id: 11, name: 'Mug', price: '€ 10.99', image: '/images/item11.png', color: 'white' },
];