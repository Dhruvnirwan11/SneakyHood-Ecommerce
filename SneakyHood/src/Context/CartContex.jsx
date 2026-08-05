import { useState,createContext } from "react";
 export const CartContext = createContext()
 export  function CartProvider ({children}){
            const [cart,setCart]=useState([])
            const addToCart=(product)=>{
                
                 const exitingProduct=   cart.find((item)=>
                        item.id===product.id && item.size===product.selectedSize && item.color===product.SelectedColor
                    )

                    if(exitingProduct){
                        setCart(
                            cart.map((item)=>
                                item.id===product.id && item.selectedSize===product.selectedSize && item.selectedColor===product.selectedColor
                            ?{
                                ...item,
                                
                            }
                            : item

                            )
                        )
                    }
                    else{
                        setCart(
                            [
                                ...cart,
                                {
                                    ...product,
                              
                                }
                            ]
                        )
                    }
            }
       const IsInCart = (product) => {
    return cart.some(
        (item) =>
            item.id === product.id &&
            item.selectedSize === product.selectedSize &&
            item.selectedColor === product.selectedColor
    );
};
        const IncreaseQuantity =(id)=>{
            setCart(
            cart.map((item)=>
                item.id===id
                ?{
                    ...item,
                    selectedQuantity:item.selectedQuantity+1
                }
                :item
            )
        )
        }
        const DecreaseQuantity = (id) => {
  setCart(
    cart.map(item =>
      item.id === id
        ? {
            ...item,
            selectedQuantity: Math.max(1, item.selectedQuantity - 1)
          }
        : item
    )
  );
};

            
            return(
                <CartContext.Provider
                value={{cart,addToCart,IsInCart,IncreaseQuantity,DecreaseQuantity}}
                >
                        {children}
                </CartContext.Provider>
            );
     

 }