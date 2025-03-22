import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewBudget } from "../features/budgetSlice";
import { RotateCcw } from "lucide-react";
import { resetBudget } from "../features/budgetSlice";
const Budget = () => {
  const dispatch = useDispatch();
  const newBudget = useSelector((state) => state.budget.newBudget);
  const remainingBudget = useSelector((state) => state.budget.remainingBudget);
  const totalExpense = useSelector((state) => state.budget.totalExpense);
  const [budget, setBudget] = useState("");
  const handleSetBudget = () => {
    if (!budget) return;
    dispatch(setNewBudget(budget));
    setBudget(0);
  };
  return (
    <div className="shadow-md p-4 m-4">
      <div className="flex w-full">
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          type="number"
          placeholder="Enter your budget"
          className="w-3/4 border-2 border-gray-200 focus:outline-none"
        />
        <button
          className="bg-blue-700 text-white rounded-md py-2 px-4 ml-4"
          onClick={handleSetBudget}
        >
          Set Budget
        </button>
        <button
          className="bg-orange-400 text-white rounded-md py-2 px-4 ml-4"
          onClick={() => dispatch(resetBudget())}
        >
          <RotateCcw />
        </button>
      </div>
      <div className=" md:flex justify-between mt-10  grid grid-cols-1 gap-5">
        <div className="bg-blue-100 shadow-sm p-4 rounded-md">
          <p>Total Budget</p>
          <h1 className="text-3xl font-bold">{newBudget}</h1>
        </div>
        <div className="bg-yellow-100 shadow-sm p-4 rounded-md">
          <p>Total Expenses</p>
          <h1 className="text-3xl font-bold">{totalExpense}</h1>
        </div>
        <div className="bg-red-100 shadow-sm p-4 rounded-md">
          <p>Remaining Budget</p>
          <h1 className="text-3xl font-bold">{remainingBudget}</h1>
        </div>
      </div>
    </div>
  );
};

export default Budget;
