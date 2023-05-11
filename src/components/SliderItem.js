import React from "react";
import classes from "./SliderItem.module.css";
import { MdShoppingBasket } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cartSlice";

const SliderItem = ({ price, name, calories, meal, imageSrc }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(meal));
  };
  return (
    <div className={classes.sliderItem}>
      <img src={imageSrc} alt="" />
      <div className={classes["sliderItem-right"]}>
        <span
          onClick={addToCartHandler}
          className={classes["sliderItem-right__cart"]}
        >
          <MdShoppingBasket className={classes["sliderItem-right__icon"]} />
        </span>

        <div className={classes["sliderItem-right__content"]}>
          <h2>{name}</h2>
          <span>{calories} calories</span>
          <h3>${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
