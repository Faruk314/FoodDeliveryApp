import React, { useEffect, useRef, useState } from "react";
import classes from "./MealsSlider.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SliderItem from "./SliderItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "../features/cartSlice";

const MealsSlider = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.cart.meals);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);

  const handleClick = (direction) => {
    const container = listRef.current;
    const cardWidth = 400; // Width of one card
    const maxSlideNumber = meals.length - 1; // Maximum slide number

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      container.style.transform = `translateX(${
        -(slideNumber - 1) * cardWidth
      }px)`;
    }

    if (direction === "right" && slideNumber < maxSlideNumber) {
      setSlideNumber(slideNumber + 1);
      container.style.transform = `translateX(${-slideNumber * cardWidth}px)`;
    }
  };

  return (
    <div className={classes.list} id="service">
      <span className={classes.listTitle}>Our Fresh and Healty food</span>
      <div className={classes.wrapper}>
        <AiOutlineArrowLeft
          className={classes["slider-arrow__left"]}
          onClick={() => handleClick("left")}
        />
        <div className={classes.container} ref={listRef}>
          {meals.map((meal) => (
            <SliderItem
              key={meal.id}
              name={meal.name}
              price={meal.price}
              calories={meal.calories}
              meal={meal}
              imageSrc={meal.imageSrc}
            />
          ))}
        </div>
        <AiOutlineArrowRight
          className={classes["slider-arrow__right"]}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default MealsSlider;
