import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
    console.log(cartContext);
  };

  // const addItemToCartHandler = (newItem) => {
  //   const existingItem = items.find((item) => item.id === newItem.id);
  //   if (existingItem) {
  //     existingItem.quantity += Number(newItem.quantity);
  //     updateItems([...items]);
  //   } else {
  //     updateItems((prevItems) => [...prevItems, newItem]);
  //   }
  //   console.log(cartContext);
  // };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
