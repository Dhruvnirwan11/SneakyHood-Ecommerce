import "./ProductCard.css";
import {
  Heart,
  Star,
  ShoppingCart,
} from "lucide-react";

function ProductCard() {
  return (
    <div className="product-card">

      <div className="product-image">

        <span className="category-badge">
          New
        </span>

        <button className="wishlist-btn">
          <Heart size={20} />
        </button>

        <img
          src="SneakyHood\src\assets\Images\nike slipper.jpg"
          alt="Sneaker"
        />

      </div>

      <div className="product-content">

        <p className="product-brand">
          SneakyHood
        </p>

        <h3>
          Air Phantom X
        </h3>

        <div className="rating">

          <Star
            size={16}
            fill="#FFD700"
            color="#FFD700"
          />

          <span>4.8</span>

        </div>

        <div className="price-row">

          <div>
            <span className="price">
              $129
            </span>

            <span className="old-price">
              $169
            </span>
          </div>

          <button className="cart-btn">
            <ShoppingCart size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;