import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../features/budgetSlice";
export const budgetStore = configureStore({
  reducer: {
    budget: budgetReducer,
  },
});
