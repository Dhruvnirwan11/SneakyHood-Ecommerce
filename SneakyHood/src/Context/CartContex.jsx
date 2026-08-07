import { useState,createContext, useEffect } from "react";
 export const CartContext = createContext()
 export  function CartProvider ({children}){
          const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
});
           

    // Save cart
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

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
     const IncreaseQuantity = (product) => {
    setCart(
        cart.map((item) => {
            if (
                item.id === product.id &&
                item.selectedColor === product.selectedColor &&
                item.selectedSize === product.selectedSize
            ) {
                const stock = item.sizes.find(
                    (shoeStock) => shoeStock.size === item.selectedSize
                )?.stock || 0;

                return {
                    ...item,
                    selectedQuantity:
                        item.selectedQuantity < stock
                            ? item.selectedQuantity + 1
                            : item.selectedQuantity
                };
            }

            return item;
        })
    );
};
        const DecreaseQuantity = (products) => { 
  setCart(
    cart.map(item =>
      item.id===products.id && item.selectedColor===products.selectedColor && item.selectedSize===products.selectedSize

        ? {
            ...item,
            selectedQuantity: Math.max(1, item.selectedQuantity - 1)
          }
        : item
    )
  );
}
    const StockIdentifier = (products) => {
    const sizeData = products.sizes.find(
        (shoeStock) => shoeStock.size === products.selectedSize
    )
    const Exactproduct=cart.find((item)=>(
           item.id === products.id &&
                item.selectedColor === products.selectedColor &&
                item.selectedSize === products.selectedSize
                
    

    )
)
if(sizeData && Exactproduct){
     const restStock = sizeData.stock - Exactproduct.selectedQuantity
     if(restStock<=0){
    return "Buy Out"
     }
     return `${restStock } Available `
}
    return "Stock not found";
 
};
            const RemoveCartProduct=(product)=>{
                       const index = cart.findIndex(
    (item) =>
        item.id === product.id &&
        item.selectedSize === product.selectedSize &&
        item.selectedColor === product.selectedColor
);

          if (index !== -1) {
    const newCart = [...cart]; // copy the array
    newCart.splice(index, 1);  // remove from the copy
    setCart(newCart);          // update state
            }
            }
            return(
                <CartContext.Provider
                value={{cart,addToCart,IsInCart,IncreaseQuantity,DecreaseQuantity,StockIdentifier,RemoveCartProduct }}
                >
                        {children}
                </CartContext.Provider>
            );
     

 }