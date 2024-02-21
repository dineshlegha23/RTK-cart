import { createSlice } from "@reduxjs/toolkit";

const localItems = localStorage.getItem("localItems");

const initialState = {
  products: [],
  cartItems: JSON.parse(localItems) || [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        return;
      } else {
        state.cartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          image: action.payload.image,
        });
      }
      localStorage.setItem("localItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("localItems", JSON.stringify(state.cartItems));
    },

    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts, addToCart, removeFromCart } = shopSlice.actions;
export default shopSlice.reducer;
