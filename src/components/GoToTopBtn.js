import React, { useEffect, useState } from "react";
import classes from "./GoToTopBtn.module.css";
import { FaArrowUp } from "react-icons/fa";


const GoToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const listenToScroll = () => {
      let height = 100;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > height) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", listenToScroll);
  }, [setIsVisible]);

  return (
    <div>
      {isVisible && (
        <button className={classes["top-btn"]} onClick={goTopHandler}>
          <FaArrowUp className={classes["top-btn__icon"]} />
        </button>
      )}
    </div>
  );
};

export default GoToTopBtn;
