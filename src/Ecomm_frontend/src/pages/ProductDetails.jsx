import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const PRODUCTS = [
  { id: 1, name: 'Smartphone', price: 599.99, image: 'https://via.placeholder.com/400', description: 'Latest smartphone with amazing features.' },
  { id: 2, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/400', description: 'Powerful laptop for all your needs.' },
  { id: 3, name: 'Headphones', price: 99.99, image: 'https://via.placeholder.com/400', description: 'High-quality wireless headphones.' },
  { id: 4, name: 'Smartwatch', price: 199.99, image: 'https://via.placeholder.com/400', description: 'Track your fitness and stay connected.' },
  { id: 5, name: 'Camera', price: 499.99, image: 'https://via.placeholder.com/400', description: 'Capture your memories in high resolution.' },
  { id: 6, name: 'Speaker', price: 149.99, image: 'https://via.placeholder.com/400', description: 'Premium sound quality speaker.' },
];

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button onClick={() => addToCart(product)} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;