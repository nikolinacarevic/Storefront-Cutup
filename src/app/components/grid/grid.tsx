'use client';

import React, { useState, useEffect } from 'react';
import { products, Product } from './products';
import styles from './grid.module.css';
import Link from 'next/link';

const Grid: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [showFilter, setShowFilter] = useState<boolean>(false);

  useEffect(() => {
    if (selectedColor === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.color === selectedColor));
    }
  }, [selectedColor]);

  return (
    <div>
      <div>
        <img
          src='/images/filter.png'
          id={styles.filterImg}
          onClick={() => setShowFilter(!showFilter)}
          alt="Filter"
        />
        {showFilter && (
          <div className={styles.filterContainer}>
            <label htmlFor="color" className={styles.filterLabel}>Filter by Color: </label>
            <select
              id="color"
              className={styles.filterSelect}
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">All</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="gray">Gray</option>
            </select>
          </div>
        )}
      </div>
      <ul className={styles.productList}>
        {filteredProducts.map(product => (
          <li className={styles.productContainer} key={product.id}>
            <Link href={`/details/${product.id}`}>
              <div className={styles.productCard}>
                <img className={styles.productImg} src={product.image} alt={product.name} />
                <div className={styles.productText}>
                  <p className={styles.productName}>{product.name}</p>
                  <p className={styles.productPrice}>{product.price}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;