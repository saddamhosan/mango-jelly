import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "../fetaures/items/ItemsSlice";

const store = configureStore({
  reducer: {
    mobileReducer: mobileReducer,
  },
});

export default store