import React from 'react';
import { products } from './products';
import styles from './grid.module.css'

const Grid: React.FC = () => {
  return (
    <div>
      <ul className={styles.productList}>
        {products.map(product => (
          <li className={styles.productContainer} key={product.id}>
            <a className={styles.productLink} href={`/details/${product.id}`}>
            <div className={styles.productCard}>
              <img className={styles.productImg} src={product.image} alt={product.name} />
              <div className={styles.productText}>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productPrice}>{product.price}</p>
              </div>
            </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;