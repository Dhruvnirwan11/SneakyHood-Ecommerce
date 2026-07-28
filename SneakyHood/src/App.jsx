import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard';
import Products from "./Data/Products.json"
import './app.css'
function App() {


  return (
    <>

    <Navbar></Navbar>
    <section className='collections'>{Products.map((product)=>(
        <ProductCard key={product.id} name={product.name} rating={product.rating} price={product.price} discount={product.discount}/>
    ))}</section>
      
    </>
    
    
  )
}

export default App;
