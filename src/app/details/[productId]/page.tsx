'use client';

import Image from 'next/image'
import { products } from '../../components/grid/products';
import styles from './details.module.css'
import Header from '@/app/components/header/header';
import QuantitySelector from './QuantitySelector';


export default function Main({
  params,
}: {
  params: { productId: string }
}) {
  const productId = params.productId;
  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (newQuantity: number) => {
    console.log(`Selected quantity: ${newQuantity}`);
  };

  return (
    <>
      <Header />

      <div id={styles.paddingContainer}>

        <img className={styles.imgContainer} src={product.image} alt={product.name} />

        <div className={styles.textContainer}>

            <h1 className={styles.title}>Medusa {product.name}</h1>

            <p className={styles.price}>{product.price}</p>

            <div className={styles.selectBox}>
              <select>
                <option value="0">Select size:</option>
                <option value="1">S</option>
                <option value="1">M</option>
                <option value="1">L</option>
              </select>
            </div>

            <div className={styles.selectBox}>
              <select>
                <option value="0">Select color:</option>
                <option value="1">{product.color}</option>
              </select>
            </div>

            <QuantitySelector onQuantityChange={handleQuantityChange} />

            <button className={styles.addButton}>ADD TO CART +</button>

        </div>

      </div>
    </>
  )
}