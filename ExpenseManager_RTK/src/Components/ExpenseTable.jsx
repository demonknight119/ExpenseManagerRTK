import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { deleteExpense } from "../features/budgetSlice";
const ExpenseTable = (props) => {
  const expenses = useSelector((state) => state.budget.expenses);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };
  return (
    <div className="mt-6 shadow-md m-4 p-6 overflow-x-auto">
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="w-1/2 p-4 text-left">Description</th>
            <th className="w-1/6 p-4 text-left">Amount</th>
            <th className="w-1/6 p-4 text-left">Category</th>
            {props.delete && <th className="w-1/6 p-4 text-left">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="truncate p-4 uppercase">{expense.desc}</td>
              <td className="truncate p-4">{expense.amount}</td>
              <td className="truncate p-4 uppercase">{expense.category}</td>
              {props.delete && (
                <td
                  onClick={() => handleDelete(expense.id)}
                  className="text-red-600 cursor-pointer p-4"
                >
                  <Trash2 />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
