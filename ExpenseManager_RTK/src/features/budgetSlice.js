import { createSlice } from "@reduxjs/toolkit";
const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    newBudget: 0,
    expenses: [],
    expensesHistory: [],
    totalExpense: 0,
    remainingBudget: 0,
  },
  reducers: {
    setNewBudget: (state, action) => {
      state.newBudget = action.payload;
      state.remainingBudget = action.payload;
      state.totalExpense = 0;
    },
    addNewExpense: (state, action) => {
      state.expenses.push(action.payload);
      state.remainingBudget =
        state.remainingBudget - Number(action.payload.amount);
      state.totalExpense += Number(action.payload.amount);
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => (
          expense.id == action.payload
            ? state.expensesHistory.push(expense)
            : "",
          expense.id !== action.payload
        )
      );
    },
    resetBudget: (state) => {
      Object.assign(state, {
        newBudget: 0,
        expenses: [],
        expensesHistory: [],
        totalExpense: 0,
        remainingBudget: 0,
      });
    },
  },
});

export const { setNewBudget, addNewExpense, deleteExpense, resetBudget } =
  budgetSlice.actions;
export default budgetSlice.reducer;
