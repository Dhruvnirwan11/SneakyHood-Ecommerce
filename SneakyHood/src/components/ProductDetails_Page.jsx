import { useState } from "react";
import "./ProductDetails_Page.css"

export default function ProductDetail_Page(){
    const[quantity,setQuantity]=useState(1)
    const[size,setSize]=useState(9)
    const[choosecolor,setChoosecolor]=useState(1)
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
            Air Jordan 1 Retro High OG
        </h1>

        <div class="rating-row">

            <span class="rating">
                ★ 4.8
            </span>

            <span class="reviews">
                215 Reviews
            </span>

        </div>

        <h2 class="price">
            $199.00
        </h2>

        <p class="description">
            Premium sneaker built with genuine leather and iconic
            basketball heritage.
        </p>

        

        <div class="option-group">

            <h4>Color</h4>

            <div class="color-options">

                <button class="color " onClick={()=>setChoosecolor(1)} style={{border:choosecolor===1?"4px solid #9b5cff":"none"}}></button>

                <button class="color" onClick={()=>setChoosecolor(2)} style={{border:choosecolor===2?"4px solid #9b5cff":"none"}}></button>

                <button class="color" onClick={()=>setChoosecolor(3)} style={{border:choosecolor===3?"4px solid #9b5cff":"none"}}></button>

                <button class="color" onClick={()=>setChoosecolor(4)} style={{border:choosecolor===4?"4px solid #9b5cff":"none"}}></button>

            </div>

        </div>


  

        <div class="option-group">

            <div class="size-header">

                <h4>Size</h4>

                <span>Size Guide</span>

            </div>

            <div class="size-options">

                
            <button
  onClick={() => setSize(7)}
  style={{
    background: size===7 ? "linear-gradient(135deg,#7b2ff7,#c84cff)" : "#111"}} >
          7
       </button>

                             
            <button
  onClick={() => setSize(8)}
  style={{
    background: size===8 ? "linear-gradient(135deg,#7b2ff7,#c84cff)" : "#111"}} >
          8
       </button>

                <button    onClick={() => setSize(9)}
  style={{
    background: size===9 ? "linear-gradient(135deg,#7b2ff7,#c84cff)" : "#111" }}>9</button>

                              
            <button
  onClick={() => setSize(10)}
  style={{
    background: size===10 ? "linear-gradient(135deg,#7b2ff7,#c84cff)" : "#111"}} >
          10
       </button>

                              
            <button
  onClick={() => setSize(11)}
  style={{
    background: size===11 ? "linear-gradient(135deg,#7b2ff7,#c84cff)" : "#111"}} >
          11
       </button>

               
            <button
  onClick={() => setSize(12)}
  style={{
    background: size===12 ? "linear-gradient(135deg,#7b2ff7,#c84cff)" : "#111"}} >
          12
       </button>


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

            <button class="add-cart">
                Add To Cart
            </button>

            <button class="buy-now">
                Buy Now
            </button>

        </div>

    </div>

</section>





<section class="product-features">

    <div class="feature-card">

        <div class="feature-icon"></div>

        <div>

            <h5>Free Shipping</h5>

            <p>Orders over $99</p>

        </div>

    </div>

    <div class="feature-card">

        <div class="feature-icon"></div>

        <div>

            <h5>14 Day Return</h5>

            <p>Easy Return Policy</p>

        </div>

    </div>

    <div class="feature-card">

        <div class="feature-icon"></div>

        <div>

            <h5>100% Authentic</h5>

            <p>Original Products</p>

        </div>

    </div>

    <div class="feature-card">

        <div class="feature-icon"></div>

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