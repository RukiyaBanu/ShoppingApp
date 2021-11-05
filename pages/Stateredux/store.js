import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";

const reducer = {
  cart: cartReducer,
};

const Store = configureStore({
  reducer,
});

export default Store;
