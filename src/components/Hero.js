import React from "react";
import classes from "./Hero.module.css";
import herobg from "../images/heroBg.png";
import Card from "./Card";
import chickenkebab from "../images/chickenkebab.png";
import fishkebab from "../images/fishkebab.png";
import icecream from "../images/icecream.png";
import strawberies from "../images/strawberies.png";
import { HashLink as HeroLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className={classes.hero} id="home">
      <div className={classes["hero-left"]}>
        <h2 className={classes["hero-left__heading"]}>
          The Fastest <br /> Delivery in <span>City</span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          ullamcor eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Faucibus <br />
          ullamcor et molestie ac feugiat sed lectus vestibulum mattis per. Ut
          faucibus. <br />
        </p>

        <HeroLink className={classes["hero-left__btn"]} to="#menu" smooth>
          Order Now
        </HeroLink>
      </div>

      <div className={classes["hero-right"]}>
        <div className={classes["hero-right__content"]}>
          <Card
            src={icecream}
            heading="Icecream"
            desc="Chocolate & Vanilla"
            price="5.25"
          />
          <Card
            src={strawberies}
            heading="Strawberies"
            desc="Fresh Strawberries"
            price="10.25"
          />
          <Card
            src={chickenkebab}
            heading="Chicken Kebab"
            desc="Mixed Kebab Plate"
            price="8.25"
          />
          <Card
            src={fishkebab}
            heading="Fish Kebab"
            desc="Mixed Fish Kebab"
            price="5.25"
          />
        </div>
        <img src={herobg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
