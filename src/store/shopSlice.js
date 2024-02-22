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
      if (
        state.cartItems.findIndex((item) => item.id === action.payload.id) > -1
      ) {
        const newState = state.cartItems.filter((item) => {
          if (item.id === action.payload.id) {
            const quantity = item.quantity;
            if (quantity === 10) {
              return item;
            }
            item.quantity = quantity + 1;
            return item;
          }
          return item;
        });
        state.cartItems = newState;
      } else {
        state.cartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
          quantity: 1,
        });
      }
      localStorage.setItem("localItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const newState = state.cartItems.filter((item) => {
        if (item.id === action.payload) {
          const quantity = item.quantity;
          if (quantity === 1) {
            return;
          }
          item.quantity = quantity - 1;

          return item;
        }
        return item;
      });
      state.cartItems = newState;

      localStorage.setItem("localItems", JSON.stringify(state.cartItems));
    },

    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts, addToCart, removeFromCart } = shopSlice.actions;
export default shopSlice.reducer;
