import React, { Fragment } from "react";

import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food " />
      </div>
    </Fragment>
  );
};

export default Header;
