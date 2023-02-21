import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Branch distribution",
      },
    },
  };

  const labels = [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: [
          36149, 38063, 40893, 42278, 45041, 48813, 52465, 55632, 55137, 59434,
          69607, 65388, 67418, 82722,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Gross profit",
        data: [
          5769, 6726, 7781, 18810, 20007, 22393, 24101, 25639, 24831, 26708,
          27546, 21508, 22287, 28321,
        ],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Operating Income",
        data: [
          5658, 6627, 8043, 9260, 9620, 12246, 13868, 14868, 13788, 14729,
          13923, -1743, 2561, 5285,
        ],
        backgroundColor: "rgba(153, 62, 235, 0.5)",
      },
      {
        label: "Pre Tax Income",
        data: [
          5658, 6627, 8043, 9260, 9620, 12246, 13868, 14868, 13788, 14729,
          13923, -1743, 2561, 6285,
        ],
        backgroundColor: "rgba(53, 262, 35, 0.5)",
      },
      {
        label: "Income After Taxes",
        data: [
          3658, 4627, 5043, 6260, 10620, 15246, 12868, 10868, 11788, 16729,
          18923, -3743, 1561, 4285,
        ],
        backgroundColor: "rgba(253, 262, 35, 0.5)",
      },
      {
        label: "Income From Continuous Operations",
        data: [
          5658, 6627, 10043, 9260, 1620, 18246, 19868, 15868, 12788, 15729,
          20923, -6743, 2561, 6285,
        ],
        backgroundColor: "rgba(253, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChart;
