import { useState } from "react";
import { useParams } from "react-router-dom";
import { Truck , TimerReset,ShieldCheck,Wallet} from 'lucide-react';
import { useContext } from "react";
import { CartContext } from "../Context/CartContex";
import { useNavigate } from "react-router-dom";
import "./ProductDetails_Page.css"


export default function ProductDetail_Page({products_detail}){
     const { id } = useParams();
     const navigate = useNavigate();
    const[quantity,setQuantity]=useState(1)
    const[size,setSize]=useState(1)
    const[choosecolor,setChoosecolor]=useState(0)
    const product = products_detail.find(
  (item) => item.id === Number(id)
);
const selectedProducts={
  ...product,
  selectedQuantity:quantity,
  selectedColor: product.colors[choosecolor],
  selectedSize: product.sizes[size].size,
}
     let discount_price=(product.price -(product.discount*product.price/100)).toFixed(2)
     
     const {cart,addToCart,IsInCart}=useContext(CartContext)
    return(
            <>
                <section class="product-page">

    <div class="product-gallery">

        <div class="thumbnail-list">

            <div class="thumb active">
                <img src="https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/16:9/w_1920,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png" alt=""/>
            </div>

            <div class="thumb">
                <img src="https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/16:9/w_1920,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png" alt=""/>
            </div>

            <div class="thumb">
                <img src="https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/16:9/w_1920,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png" alt=""/>
            </div>

          

        </div>

        <div class="main-image">
            <img src="https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/16:9/w_1920,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png" alt=""/>
        </div>

    </div>


   

    <div class="product-info">

        <h1 class="product-title">
          {product.name}
        </h1>

        <div class="rating-row">

            <span class="rating">
                 ★ {product.rating}
            </span>

            <span class="reviews">
               {product.reviews} Reviews
            </span>

        </div>

        <h2 class="price">
            {product.discount===0?(<span>${product.price}</span>):(<><strike style={{color:"red",marginRight:12}}>${product.price}</strike><span>${discount_price}</span></>)}
        </h2>

        <p class="description">
           {product.description}
        </p>

        

        <div class="option-group">

            <h4>Color</h4>

            <div class="color-options">
               {product.colors.map((color,index)=>(
                     <button class="color " onClick={()=>setChoosecolor(index)} style={{border:choosecolor===index?"4px solid  #7b2ff7":"none",backgroundColor:color}}></button>
               ))}
               


            </div>

        </div>


  

        <div class="option-group">

            <div class="size-header">

                <h4>Size</h4>

                <span>Size Guide</span>

            </div>

            <div class="size-options">

              {product.sizes.map((sizes,index)=>(
                      <button
  onClick={() => setSize(index)}
  style={{
    background: size===index ? "linear-gradient(135deg,#7b2ff7,#c84cff)" : "#111"}} >
          {sizes.size}
       </button>
              ))}  
           

            </div>

        </div>



        <div class="option-group">

            <h4>Quantity</h4>

            <div class="quantity-box">

                <button onClick={()=>setQuantity(quantity=>Math.max(1,(quantity-1)))}>-</button>

                <span>{quantity}</span>

                <button onClick={()=>setQuantity(quantity=>(quantity+1))}>+</button>

            </div>

        </div>


        

        <div class="product-buttons">

            <button class="add-cart" onClick={()=>{
                if(IsInCart (selectedProducts)){
                        navigate("/cart")

                }
                else{
                    addToCart(selectedProducts)
                }
            }}>
                { IsInCart(selectedProducts)?"Go To Bag":"Add To Cart"}
            </button>

            <button class="buy-now">
                Buy Now
            </button>

        </div>

    </div>

</section>





<section class="product-features">

    <div class="feature-card">

        <div class="feature-icon"> <Truck /></div>

        <div>

            <h5>Free Shipping</h5>

            <p>Orders over $99</p>

        </div>

    </div>

    <div class="feature-card">

        <div class="feature-icon">< TimerReset/></div>

        <div>

            <h5>14 Day Return</h5>

            <p>Easy Return Policy</p>

        </div>

    </div>

    <div class="feature-card">

        <div class="feature-icon"><ShieldCheck/></div>

        <div>

            <h5>100% Authentic</h5>

            <p>Original Products</p>

        </div>

    </div>

    <div class="feature-card">

        <div class="feature-icon"><Wallet/></div>

        <div>

            <h5>Secure Payment</h5>

            <p>Safe Checkout</p>

        </div>

    </div>

</section>





<section class="product-tabs">

    <div class="tab-header">

        <button class="active">
            Description
        </button>

        <button>
            Reviews
        </button>

        <button>
            Shipping & Returns
        </button>

    </div>

    <div class="tab-content">

        <p>
            Inspired by the legendary Air Jordan silhouette.
            Crafted with premium leather, cushioned midsole,
            durable rubber outsole and modern comfort.
        </p>

        <ul>

            <li>Premium Leather Upper</li>

            <li>Air Cushion Midsole</li>

            <li>Non-slip Rubber Sole</li>

            <li>Perfect for Everyday Wear</li>

        </ul>

    </div>

</section>

            </>
    );
}