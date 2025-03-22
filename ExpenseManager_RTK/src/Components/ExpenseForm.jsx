import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewExpense } from "../features/budgetSlice";
const ExpenseForm = () => {
  const dispatch = useDispatch();
  const remainingBudget = useSelector((state) => state.budget.remainingBudget);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("other");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newExpenses = {
      desc,
      amount: Number(amount),
      category,
      id: Date.now(),
    };
    if (!newExpenses.desc || newExpenses.amount <= 0) {
      alert("Please provide valid inputs");
      resetValues();
      return;
    }

    if (Number(newExpenses.amount) > remainingBudget) {
      alert("Over Budget");
      resetValues();
      return;
    }
    dispatch(addNewExpense(newExpenses));
    function resetValues() {
      setAmount("");
      setDesc("");
    }
    resetValues();
  };
  return (
    <form
      className="shadow-md mt-10 m-4 p-6"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
        <input
          value={desc}
          type="text"
          placeholder="Enter Decsription"
          className="focus:outline-none border-2 border-gray-200 rounded-md p-2"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          placeholder="Enter Amount"
          className="focus:outline-none border-2 border-gray-200 rounded-md p-2 "
        />
        <select
          value={"other"}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          id="category"
          className="focus:outline-none border-2 border-gray-200 rounded-md p-2"
        >
          <option value="other">Other</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded-md"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
