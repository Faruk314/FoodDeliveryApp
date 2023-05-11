import React from "react";
import classes from "./Card.module.css";

const Card = ({ src, heading, desc, price }) => {
  return (
    <div className={classes.card}>
      <img className={classes["card-img"]} src={src} alt="" />
      <h2>{heading}</h2>
      <span>{desc}</span>
      <span>${price}</span>
    </div>
  );
};

export default Card;
