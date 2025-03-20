import React from "react";
import { Link } from "react-router-dom";
import { ChartPie, History, Home } from "lucide-react";
const Navbar = () => {
  return (
    <div className="shadow-lg  ">
      <div className="flex w-1/2 justify-around">
        <div className="flex p-6 gap-2 m-1">
          <Home />
          <Link to={"/"}>Dashboard</Link>
        </div>
        <div className="flex p-6 gap-2 m-1">
          <ChartPie />
          <Link to={"/analytics"}>Analytics</Link>
        </div>
        <div className="flex p-6 gap-2 m-1">
          <History />
          <Link to={"/history"}>History</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
