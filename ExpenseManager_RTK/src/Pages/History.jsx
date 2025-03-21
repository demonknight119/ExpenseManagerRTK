import React from "react";
import ExpenseTable from "../Components/ExpenseTable";
import { useSelector } from "react-redux";
const History = () => {
  const history = useSelector((state) => state.budget.expensesHistory);
  console.log(history);
  return (
    <div className="mt-6 shadow-md m-4 p-6 overflow-x-auto">
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="w-1/2 p-4 text-left">Description</th>
            <th className="w-1/6 p-4 text-left">Amount</th>
            <th className="w-1/6 p-4 text-left">Category</th>
            {/* <th className="w-1/6 p-4 text-left">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {history.map((expense) => (
            <tr key={expense.id}>
              <td className="truncate p-4 uppercase">{expense.desc}</td>
              <td className="truncate p-4">{expense.amount}</td>
              <td className="truncate p-4 uppercase">{expense.category}</td>

              {/* <td
                onClick={() => handleDelete(expense.id)}
                className="text-red-600 cursor-pointer p-4"
              >
                <Trash2 />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
