import React, { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartCntx from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartcntx = useContext(CartCntx);
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event) => {
    // positive
    const enteredValue = event.target.value;
    if (!enteredValue || enteredValue <= 0 || enteredValue % 1 !== 0) {
      return;
    }
    setQuantity(Number(enteredValue));
  };

  const addItemToCart = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    //const quantity = document.getElementById("amount_" + props.id).value;
    cartcntx.addItem({ ...props.items, quantity: quantity });
  };

  return (
    <form className={classes.form}>
      {/* {console.log(cartcntx)} */}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: quantity,
          onChange: handleInputChange,
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};
export default MealItemForm;
