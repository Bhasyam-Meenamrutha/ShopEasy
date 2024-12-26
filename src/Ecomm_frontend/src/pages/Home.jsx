import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to ShopEasy</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="cta-button">
          Shop Now
        </Link>
      </div>
      <div className="featured-categories">
        <h2>Featured Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <h3>Home & Living</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;