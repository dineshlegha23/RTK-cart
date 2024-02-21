import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";

export default configureStore({
  reducer: {
    shop: shopSlice,
  },
});
