import React from "react";
import Budget from "../Components/Budget";
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseTable from "../Components/ExpenseTable";
const Dashboard = () => {
  return (
    <section className="shadow-md mt-2 p-2 ">
      <h1 className="text-4xl font-bold m-3">Expense Tracker</h1>
      <Budget />
      <ExpenseForm />
      <ExpenseTable delete={true} />
    </section>
  );
};

export default Dashboard;
