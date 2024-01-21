import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  addItemByOne: (item) => {},
});

export default CartContext;
