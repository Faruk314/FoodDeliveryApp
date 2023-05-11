import React from "react";
import classes from "./Cart.module.css";
import { BiArrowBack } from "react-icons/bi";
import CheckOutCard from "./CheckOutCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const delivery = cart.length > 0 ? 2 : 0;

  const clearAllHandler = () => {
    dispatch(cartActions.clearAll());
  };

  const closeCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  const openFormHandler = () => {
    dispatch(cartActions.toggleForm());
  };

  return (
    <div className={classes["cart-container"]}>
      <div className={classes["cart-container__top"]}>
        <BiArrowBack
          onClick={closeCartHandler}
          className={classes["cart-container__exit"]}
        />
        <h2>Cart</h2>
        <button
          onClick={clearAllHandler}
          className={classes["cart-container__btn"]}
        >
          Clear
        </button>
      </div>

      <div className={classes["cart-checkout__container"]}>
        {cart.length === 0 && <p>Cart is Empty</p>}
        {cart.map((item) => (
          <CheckOutCard
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            item={item}
            id={item.id}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>

      <div className={classes["cart-checkout__order"]}>
        <div className={classes["cart-checkout__total"]}>
          <h3>Sub Total</h3>
          <span>${totalPrice}</span>
        </div>

        <div className={classes["cart-checkout__total"]}>
          <h3>Delivery</h3>
          <span>${delivery}</span>
        </div>

        <div className={classes["cart-checkout__total"]}>
          <h3>Total</h3>
          <span>${totalPrice + delivery}</span>
        </div>

        <button
          onClick={openFormHandler}
          disabled={cart.length < 1 ? true : false}
          className={classes["cart-checkout__btn"]}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
