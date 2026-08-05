import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard';
import ProductDetail_Page from './components/ProductDetails_Page';
import CartPage from './components/CartPage';
import { Routes,Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './app.css'

function App() {

  const[products,setProducts]=useState([])
  useEffect(()=>{
    
       async function loadProducts(){
        try{
          const response = await fetch("/Data/Products.json")
              const data = await response.json()
              setProducts(data)
       } 
      catch(error){
        console.error("Failed to Load Products",error)
       }
       }
  loadProducts();
        
  },[])


  return (

    <>
    <ScrollToTop/>

    <Routes>
  <Route
    path="/"
    element={
      <>
        <Navbar />

        <section className="collections">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              rating={product.rating}
              price={product.price}
              discount={product.discount}
            />
          ))}
        </section>
      </>
    }
  />

  <Route
    path="/product/:id"
    element={<> <Navbar></Navbar>
    <ProductDetail_Page  products_detail={products}/></>}
  />
  <Route path='/cart' element={<>
  <Navbar></Navbar>
  <CartPage/></>}/>
</Routes>
        
    </>

    
    
  )
}
export default App;
