import "./CartPage.css"
import { CartContext } from "../Context/CartContex";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Trash2,
  ChevronRight,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw
} from "lucide-react";
export default function CartPage (){
  const {cart,IncreaseQuantity,DecreaseQuantity}=useContext(CartContext)
  const navigate= useNavigate()
  const [quantity,setQuantity]=useState(0)

    return(<>
                
    <section className="cart-page">

      {/* LEFT */}

      <div className="cart-left">

        <h2 className="cart-heading">
          YOUR CART <span>( {cart.length} )</span>
        </h2>

  <div className="cart-products">
  {cart.map((item) => (
    <div className="cart-item" key={item.id}>
      <img
        src="https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/16:9/w_1920,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png"
        alt=""
      />

      <div className="cart-info">
        <h3>{item.name}</h3>

        <h4> {item.discount===0?(<span>${item.price}</span>):<span>${(item.price -(item.discount*item.price/100)).toFixed(2)}</span>}</h4>
        <div className="cart-item-additional-info">
      <h5 className="">Size: {item.selectedSize}</h5>
        <div className="cart-item-color" style={{backgroundColor:`${item.selectedColor}`,border:"3px solid #7b2ff7"}}></div>
</div>
      

        <div className="cart-actions">
          <div className="quantity-box">
            <button onClick={()=>DecreaseQuantity(item.id)}>
              <Minus size={16} />
            </button>

            <span>{item.selectedQuantity}</span>

            <button onClick={()=>IncreaseQuantity(item.id)
            }>
              <Plus size={16} />
            </button>
          </div>

          <button className="arrow-btn" onClick={()=>navigate(`/product/${item.id}`)}>
            <ChevronRight size={18} />
          </button>

          <button className="delete-btn">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>





      {/* RIGHT */}

      <div className="cart-summary">

        <h2>ORDER SUMMARY</h2>

        <div className="summary-row">

          <span>Subtotal</span>

          <span>$467.00</span>

        </div>

        <div className="summary-row">

          <span>Shipping</span>

          <span>$0.00</span>

        </div>

        <div className="summary-row discount">

          <span>Discount (WELCOME10)</span>

          <span>-$46.70</span>

        </div>

        <hr />

        <div className="summary-row total">

          <span>Total</span>

          <span>$420.30</span>

        </div>

        <button className="checkout-btn">

          PROCEED TO CHECKOUT

        </button>


        <div className="coupon">

          <label>Apply Coupon</label>

          <div className="coupon-box">

            <input
              type="text"
              placeholder="WELCOME10"
            />

            <button>

              APPLY

            </button>

          </div>

        </div>

      </div>

    </section>




    {/* FOOTER */}

    <section className="cart-footer">

      <div className="feature">

        <div className="icon">  <Truck size={24}/></div>

        <div>

          <h4>Free Shipping</h4>

          <p>On Orders over $199</p>

        </div>

      </div>

      <div className="feature">

        <div className="icon">   <RotateCcw size={24}/></div>

        <div>

          <h4>14 Day Return</h4>

          <p>Easy Return & Refund</p>

        </div>

      </div>

      <div className="feature">

        <div className="icon"> <ShieldCheck size={24}/></div>

        <div>

          <h4>Secure Payment</h4>

          <p>Safe & Secure Checkout</p>

        </div>

      </div>

    </section>

        </>);
}