import React, { useState } from "react";
import classes from "./Header.module.css";
import logo from "../images/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import { cartActions } from "../features/cartSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { navActions } from "../features/navSlice";

const Header = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [fixed, setIsFixed] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  const openCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  const openNavHandler = () => {
    dispatch(navActions.toggleNav());
  };

  return (
    <header className={fixed ? "navbar fixed" : "navbar"}>
      <div className={classes.left}>
        <img className={classes.logo} alt="" src={logo} />
        <h1>Food Delivery</h1>
      </div>

      <div className="right">
        <nav>
          <ul className={classes["navbar-list"]}>
            <li className={classes["navbar-list__item"]}>
              <Link to="#home">Home</Link>
            </li>
            <li className={classes["navbar-list__item"]}>
              <Link to="#menu" smooth>
                Menu
              </Link>
            </li>

            <li className={classes["navbar-list__item"]}>
              <Link to="#service" smooth>
                Service
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes["navbar-shop"]}>
        <GiHamburgerMenu
          onClick={openNavHandler}
          className={classes["navbar-mobile__icon"]}
        />
        <div className={classes["navbar-shop__content"]}>
          <MdShoppingBasket
            onClick={openCartHandler}
            className={classes["navbar-shop__icon"]}
          />
          <span className={classes["navbar-shop__counter"]}>
            {totalQuantity}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
