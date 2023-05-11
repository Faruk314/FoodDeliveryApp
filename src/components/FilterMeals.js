import React, { useEffect } from "react";
import classes from "./FilterMeals.module.css";
import FilterCard from "./FilterCard";
import SliderItem from "./SliderItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchMeals } from "../features/cartSlice";

const FilterMeals = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.cart.meals);
  const filteredMeals = useSelector((state) => state.cart.filteredMeals);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  return (
    <div className={classes.wrapper} id="menu">
      <span className={classes["wrapper-title"]}>Our Dishes</span>
      <div className={classes.container}>
        {meals.map((categorie) => (
          <FilterCard
            key={categorie.id}
            name={categorie.name}
            desc={categorie.desc}
          />
        ))}
      </div>

      <div className={classes["container-filtered"]}>
        {filteredMeals.map((meal) => (
          <SliderItem
            key={meal.id}
            name={meal.name}
            calories={meal.calories}
            price={meal.price}
            meal={meal}
            imageSrc={meal.imageSrc}
            desc={meal.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterMeals;
