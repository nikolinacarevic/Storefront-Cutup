import React from 'react';
import { products } from './products';
import styles from './grid.module.css'

const Grid: React.FC = () => {
  return (
    <div>
      <ul>
        {products.map(product => (
          <li className={styles.productContainer} key={product.id}>
            <div className={styles.card}>
              <img className={styles.mainImg} src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;