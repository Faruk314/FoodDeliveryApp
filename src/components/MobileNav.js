import React from "react";
import classes from "./MobileNav.module.css";
import { useDispatch } from "react-redux";
import { navActions } from "../features/navSlice";
import { HashLink as MobileLink } from "react-router-hash-link";

const MobileNav = () => {
  const dispatch = useDispatch();

  const closeNavHandler = () => {
    dispatch(navActions.toggleNav());
  };

  return (
    <div className={classes["mobile-nav__container"]}>
      <ul className={classes["mobile-nav_list"]}>
        <li>
          <MobileLink to="#home" smooth>
            Home
          </MobileLink>
        </li>
        <li>
          <MobileLink to="#menu" smooth>
            Menu
          </MobileLink>
        </li>
        <li>
          <MobileLink to="#service" smooth>
            Service
          </MobileLink>
        </li>
      </ul>
      <button
        onClick={closeNavHandler}
        className={classes["mobile-nav__close"]}
      >
        X
      </button>
    </div>
  );
};

export default MobileNav;
