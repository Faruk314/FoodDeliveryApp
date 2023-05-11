import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen;
    },
  },
});

export const navActions = navSlice.actions;
export default navSlice.reducer;
