export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: 1, name: 'Proizvod 1', price: 10, image: '/images/item1.png' },
  { id: 2, name: 'Proizvod 2', price: 20, image: '/images/item2.png' },
];