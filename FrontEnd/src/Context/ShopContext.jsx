import { createContext, useEffect, useState } from "react";





export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_products, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);


  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
   if(localStorage.getItem('auth-token')){
     let cart=JSON.parse(localStorage.getItem('cart'));
     cart[itemID]=cart[itemID]+1;
     localStorage.setItem('cart',JSON.stringify(cart));
   }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo= all_products.find((product)=>product.id==Number(item));
        totalAmount+=itemInfo.new_price*cartItems[item];
      }
    }
      return totalAmount;
  };

const getTotalCartItems = () => {
  let totalItem = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      totalItem += cartItems[item];
    }
  }
  return totalItem;
};


  const contextValue = { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
