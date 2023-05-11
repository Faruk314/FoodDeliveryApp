import React from "react";
import classes from "./CheckOutCard.module.css";
import { cartActions } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CheckOutCard = ({ name, quantity, item, id, imageSrc }) => {
  const cart = useSelector((state) => state.cart.cart);
  let total = cart.find((item) => item.id === id).totalPrice;

  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(cartActions.decrement(id));
  };

  const incrementHandler = () => {
    dispatch(cartActions.addToCart(item));
  };

  return (
    <div className={classes["cart-checkout__card"]}>
      <img src={imageSrc} alt="" />
      <div className={classes["cart-checkout__content"]}>
        <h2>{name}</h2>
        <span>${total}</span>
      </div>
      <div className={classes["cart-checkout__quantity"]}>
        <span onClick={decrementHandler}>-</span>
        <span>{quantity}</span>
        <span onClick={incrementHandler}>+</span>
      </div>
    </div>
  );
};

export default CheckOutCard;
