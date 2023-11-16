import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./msgSlice";
export const store = configureStore({
  reducer: { message: messageReducer },
});
