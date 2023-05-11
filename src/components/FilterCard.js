import classes from "./FilterCard.module.css";
import { FaHamburger } from "react-icons/fa";
import { cartActions } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const FillterCard = ({ name, desc }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(cartActions.filterMeals(desc))}
      className={classes["filter-card"]}
    >
      <span>
        <FaHamburger className={classes["filter-card__icon"]} />
      </span>
      <h3>{desc}</h3>
    </div>
  );
};

export default FillterCard;
