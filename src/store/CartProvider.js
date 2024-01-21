import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (newItem) => {
    // console.log(newItem);
    const existingItemIndex = items.findIndex(
      (item) => item.name === newItem.name
    );

    if (existingItemIndex !== -1) {
      //update allready exist order
      let updatedCartItems = [...items];
      updatedCartItems[existingItemIndex].quantity =
        Number(updatedCartItems[existingItemIndex].quantity) +
        Number(newItem.quantity);
      updateItems(updatedCartItems);
    } else {
      //new order simply insert data
      updateItems((items) => [...items, newItem]);
    }
  };

  const addItemToCartByOneHandler = (newItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.name === newItem.name
    );
    let updatedCartItems = [...items];

    if (existingItemIndex !== -1) {
      //update allready exist order

      updatedCartItems[existingItemIndex].quantity =
        Number(updatedCartItems[existingItemIndex].quantity) + 1;
      updateItems(updatedCartItems);
    } else {
      //new order simply insert data
      updateItems((items) => [...items, newItem]);
    }
  };

  const removeItemFromCartHandler = (newItem) => {
    const updatedCartItems = [...items];

    const existingItemIndex = items.findIndex(
      (item) => item.name === newItem.name
    );

    // console.log("remove id", existingItemIndex);

    if (existingItemIndex !== -1) {
      let updatedQuantity = updatedCartItems[existingItemIndex].quantity;

      if (updatedQuantity > 1) {
        updatedQuantity -= 1;

        // new array with the modified item
        const updatedItems = [...updatedCartItems];
        updatedItems[existingItemIndex].quantity = updatedQuantity;

        // console.log(updatedItems);
        updateItems(updatedItems);
      } else {
        // new array without the removed item
        const updatedItems = updatedCartItems.filter(
          (_, index) => index !== existingItemIndex
        );
        // console.log(updatedItems);

        updateItems(updatedItems);
      }
    }
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    addItemByOne: addItemToCartByOneHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
