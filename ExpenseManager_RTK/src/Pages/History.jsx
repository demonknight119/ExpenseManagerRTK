import React from "react";
import ExpenseTable from "../Components/ExpenseTable";
const History = () => {
  return (
    <div>
      <ExpenseTable delete={false} />
    </div>
  );
};

export default History;
