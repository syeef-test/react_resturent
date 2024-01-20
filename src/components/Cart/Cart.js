import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const mergeTotalAmount = () => {
      const newTotalAmount = cartcntx.items.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setTotalAmount(newTotalAmount.toFixed(2));
    };

    mergeTotalAmount();
  }, [cartcntx.items]);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li key={item.id}>
          Name:{item.name} Price:{item.price} Quantity:{item.quantity}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
