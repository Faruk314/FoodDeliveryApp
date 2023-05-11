import React, { useState } from "react";
import classes from "./OrderForm.module.css";
import { useSelector } from "react-redux";
import CheckOutCard from "./CheckOutCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cartSlice";
import { sendMealOrder } from "../features/cartSlice";

const OrderForm = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [lastName, setLastName] = useState("");

  const [address, setAddress] = useState("");

  const closeFormHandler = () => {
    dispatch(cartActions.toggleForm());
  };

  const handleForm = (e) => {
    e.preventDefault();

    dispatch(sendMealOrder({ cart }));
    dispatch(cartActions.toggleForm());
    dispatch(cartActions.clearAll());

    setName("");
    setLastName("");
    setAddress("");
  };

  return (
    <div className={classes["order-form__overlay"]}>
      <div className={classes["order-form__content"]}>
        <div className={classes["order-form__left"]}>
          <h3>Your Order</h3>
          <span>Total: {totalPrice}$</span>
          <div className={classes["order-form_left-container"]}>
            {cart.length < 1 && <p>Cart is Empty</p>}
            {cart.map((item) => (
              <CheckOutCard
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                imageSrc={item.imageSrc}
                id={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className={classes["order-form__right"]}>
          <button onClick={closeFormHandler} className={classes["close-btn"]}>
            X
          </button>
          <form onSubmit={handleForm}>
            <div className={classes["order-form-input__container"]}>
              <label htmlFor="user">First name:</label>
              <input
                onChange={(e) => setName(e.target.value)}
                id="user"
                type="text"
                placeholder="enter your first name"
              />
            </div>

            <div className={classes["order-form-input__container"]}>
              <label htmlFor="user">Last name:</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                id="user"
                type="text"
                placeholder="enter your last name"
              />
            </div>

            <div className={classes["order-form-input__container"]}>
              <label htmlFor="address">Address:</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                id="address"
                type="text"
                placeholder="enter your address"
              />
            </div>

            <button
              disabled={name && lastName && address ? false : true}
              className={classes["order-form__confirmBtn"]}
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
