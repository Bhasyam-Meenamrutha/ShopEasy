import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Products.css';

const PRODUCTS = [
  { id: 1, name: 'Smartphone', price: 599.99, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Headphones', price: 99.99, image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Smartwatch', price: 199.99, image: 'https://via.placeholder.com/200' },
  { id: 5, name: 'Camera', price: 499.99, image: 'https://via.placeholder.com/200' },
  { id: 6, name: 'Speaker', price: 149.99, image: 'https://via.placeholder.com/200' },
];

function Products() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products">
      <div className="products-header">
        <h1>Our Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <div className="product-actions">
              <Link to={`/product/${product.id}`} className="view-details">
                View Details
              </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;