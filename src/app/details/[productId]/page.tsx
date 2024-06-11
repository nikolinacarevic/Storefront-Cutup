import Image from 'next/image'
import { products } from '../../components/grid/products';


export default function Main( { params } ) {
  const productId = params.productId;
  const product = products.find(product => product.id === parseInt(productId));

  return (
    <>
      <div>
      <img src={product.image} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </div>
    </div>
    </>
  )
}