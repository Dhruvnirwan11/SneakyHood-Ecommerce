
import { Strikethrough } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({key,name,price,discount,rating,id}) {
  let discounted_price = (price -(discount*price/100)).toFixed(2)
   const navigate =useNavigate()

  return (
   
    <>
  
    <div className="product-card" onClick={()=>navigate(`/product/${id}`)}>
      <div>{discount===0?(<span></span>):<div  className="product-badge">{discount}% OFF</div>}</div>

      <div className="product-image-box">
        <img
          src="https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/16:9/w_1920,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png"
          alt="Nike shoe"
          className="product-image"
        />
      </div>

      <h3 className="product-name-container">{name} </h3>

      <div className="product-meta">
        <span className="product-price">{discount===0?(<span>${price}</span>):(<> <strike className="strikethrough_price">
                  <span>${price}</span>
                </strike>
                <span className="discounted-price">${discounted_price}</span>
              </>)}</span>

        <span className="product-rating">{rating} ★</span>
      </div>

      {/* <button className="product-btn">View Details</button> */}
    </div>
    
    </>
  );
}