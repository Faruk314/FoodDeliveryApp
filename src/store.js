import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./features/cartSlice";
import navSliceReducer from "./features/navSlice";

const store = configureStore({
  reducer: { cart: cartSliceReducer, nav: navSliceReducer },
});

export default store;
