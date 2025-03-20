import React from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useSelector } from "react-redux";
import * as d3 from "d3-scale-chromatic";
const Analytics = () => {
  const expenses = useSelector((state) => state.budget.expenses);
  //console.log(expenses);
  const categoryTotal = expenses.reduce((acc, el) => {
    acc[el.category] = (acc[el.category] || 0) + el.amount;
    return acc;
  }, {});
  //console.log("categorytotal", categoryTotal);
  const pieData = Object.entries(categoryTotal).map(([key, value]) => ({
    name: key,
    value: value,
  }));
  //console.log("pieData", pieData);
  return (
    <div className="shadow-lg p-6" style={{ width: "100%", height: "400px" }}>
      <h1>Expenses by Category</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill={d3.interpolateCool(Math.random())}
            label
          />

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
