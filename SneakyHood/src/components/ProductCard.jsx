
import { Strikethrough } from "lucide-react";
import "./ProductCard.css";

export default function ProductCard({name,price,discount,rating}) {
  let discounted_price = (price -(discount*price/100)).toFixed(2)
  

  return (
    <>
    <div className="product-card">
      <div>{discount===0?(<span></span>):<div  className="product-badge">{discount}% OFF</div>}</div>

      <div className="product-image-box">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop"
          alt="Nike shoe"
          className="product-image"
        />
      </div>

      <div className="product-name-container">{name} </div>

      <div className="product-meta">
        <span className="product-price">{discount===0?(<span>${price}</span>):(<> <strike className="strikethrough_price">
                  <span>${price}</span>
                </strike>
                <span className="discounted-price">${discounted_price}</span>
              </>)}</span>

        <span className="product-rating">{rating} ★</span>
      </div>

      <button className="product-btn">View Details</button>
    </div>
    </>
  );
}