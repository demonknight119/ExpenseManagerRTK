import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../features/budget/budgetSlice";
export const budgetStore = configureStore({
  reducer: {
    budget: budgetReducer,
  },
});
