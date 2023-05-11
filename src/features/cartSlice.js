import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import env from "react-dotenv";

const initalState = {
  meals: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
  totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
  loading: false,
  filteredMeals: [],
  isCartOpen: false,
  isFormOpen: false,
};

export const fetchMeals = createAsyncThunk("cart/fetchMeals", async () => {
  const response = await axios.get(`${env.FIREBASE_API}/Items.json`);

  return response.data;
});

export const sendMealOrder = createAsyncThunk(
  "cart/sendMealOrder",
  async (initialPost) => {
    const response = await axios.post(
      `${env.FIREBASE_API}/Orders.json`,
      initialPost
    );
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    addToCart(state, action) {
      let newItem = action.payload;

      let existingItem = state.cart.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      state.totalPrice += newItem.price;
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));

      if (!existingItem) {
        let item = {
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          desc: newItem.desc,
          calories: newItem.calories,
          quantity: 1,
          totalPrice: newItem.price,
          imageSrc: newItem.imageSrc,
        };

        state.cart.push(item);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }

      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },

    decrement(state, action) {
      state.totalQuantity--;
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );

      let id = action.payload;
      let existingItem = state.cart.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        existingItem.quantity = 0;
        state.cart = state.cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify([...state.cart]));
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      let total = state.cart
        .map((item) => item.totalPrice * item.quantity)
        .reduce((x, y) => x + y, 0);
      state.totalPrice = total;
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    clearAll(state) {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    filterMeals(state, action) {
      state.filteredMeals = state.meals.filter(
        (meal) => meal.desc === action.payload
      );
    },

    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },

    toggleForm(state) {
      state.isFormOpen = !state.isFormOpen;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMeals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      state.loading = false;
      state.meals = action.payload;
    });
    builder.addCase(fetchMeals.rejected, (state, action) => {
      state.loading = false;
      state.meals = [];
    });
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
