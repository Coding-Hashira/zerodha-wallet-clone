import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data, cutout }) => {
  return (
    <Doughnut
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 18,
              boxHeight: 18,
            },
          },
        },
        cutout: cutout,
        spacing: 1,
      }}
      data={data}
    />
  );
};

export default Chart;
