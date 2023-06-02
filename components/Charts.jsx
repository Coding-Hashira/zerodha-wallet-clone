import { accountData, sectorData, stockData } from "@/data";
import React from "react";
import Chart from "./Chart";

const Charts = () => {
  return (
    <div className="md:justify-between max-w-screen items-center justify-center space-y-8 md:space-y-0 flex flex-col lg:flex-row">
      <div className="w-72 h-72">
        <Chart data={accountData} cutout={60} />
      </div>
      <div className="w-80 h-80">
        <Chart data={sectorData} cutout={60} />
      </div>
      <div className="h-80 w-80">
        <Chart data={stockData} />
      </div>
    </div>
  );
};

export default Charts;
