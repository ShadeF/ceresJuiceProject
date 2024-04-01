import { createContext, useState } from "react";
import { PRODUCTS } from "../JuiceProducts"; // Adjust the import path as necessary

export const ShopContext = createContext(null);

// Initialize an empty cart
const getDefaultCart = () => {
 return {};
};

export const ShopContextProvider = (props) => {
 const [cartItems, setCartItems] = useState(getDefaultCart());

 const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item].quantity > 0) {
        totalAmount += cartItems[item].quantity * cartItems[item].price;
      }
    }
    return totalAmount;
 };

 const addToCart = (itemId) => {
    setCartItems((prev) => {
      const item = prev[itemId];
      if (item) {
        // If the item exists, increment its quantity
        return { ...prev, [itemId]: { ...item, quantity: item.quantity + 1 } };
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        const newItem = PRODUCTS.find((product) => product.id === itemId);
        return { ...prev, [itemId]: { ...newItem, quantity: 1 } };
      }
    });
 };

 const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const item = prev[itemId];
      if (item && item.quantity > 1) {
        return { ...prev, [itemId]: { ...item, quantity: item.quantity - 1 } };
      } else if (item) {
        // If the item's quantity is 1, remove it from the cart
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return prev;
    });
 };

 const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: { ...prev[itemId], quantity: newAmount } }));
 };

 const incrementItem = (itemId) => {
    setCartItems((prev) => {
      const item = prev[itemId];
      if (item) {
        return { ...prev, [itemId]: { ...item, quantity: item.quantity + 1 } };
      }
      return prev;
    });
 };

 const decrementItem = (itemId) => {
    setCartItems((prev) => {
      const item = prev[itemId];
      if (item && item.quantity > 1) {
        return { ...prev, [itemId]: { ...item, quantity: item.quantity - 1 } };
      } else if (item) {
        // If the item's quantity is 1, remove it from the cart
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return prev;
    });
 };

 const checkout = () => {
    setCartItems(getDefaultCart());
 };

 // Convert cartItems object to an array of items
 const getCartItemsArray = () => {
   return Object.values(cartItems).map(item => ({
     id: item.id,
     name: item.name,
     price: item.price,
     quantity: item.quantity
   }));
 };

 const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getCartItemsArray, // Include the method to convert cartItems to an array
    updateCartItemCount, // Reintegrated function
    incrementItem, // Reintegrated function
    decrementItem, // Reintegrated function
 };

 return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
 );
};
