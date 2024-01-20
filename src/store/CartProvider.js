import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  // const addItemToCartHandler = (item) => {
  //   updateItems([...items, item]);
  //   console.log(cartContext);
  // };

  const addItemToCartHandler = (newItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.name === newItem.name
    );

    if (existingItemIndex !== -1) {
      //update allready exist order
      const updatedCartItems = [...items];
      updatedCartItems[existingItemIndex].quantity =
        Number(updatedCartItems[existingItemIndex].quantity) +
        Number(newItem.quantity);
      updateItems(updatedCartItems);
    } else {
      //new order simply insert data
      updateItems((items) => [...items, newItem]);
    }
    console.log(cartContext);
  };

  const removeItemFromCartHandler = (id) => {
    const updatedCartItems = [...items];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === id
    );

    if (existingItemIndex !== -1) {
      let updatedQuantity = updatedCartItems[existingItemIndex].quantity;

      if (updatedQuantity > 1) {
        updatedQuantity -= 1;

        // update cart
        updatedCartItems[existingItemIndex].quantity = updatedQuantity;
      } else {
        // remove if 1
        updatedCartItems.splice(existingItemIndex, 1);
      }

      updateItems(updatedCartItems);
    }
  };

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
