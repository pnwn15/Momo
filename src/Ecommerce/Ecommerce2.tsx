import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { LineChartOutlined } from "@ant-design/icons";

import type { ChartOptions } from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Filler
);

// SalesCard Component
const SalesCard = () => {
  const miniBarData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [4, 5, 3, 6, 5, 4, 6],
        backgroundColor: "#5A55FF",
        borderRadius: 4,
        barThickness: 10,
      },
    ],
  };

  const miniBarOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="rounded-2xl shadow-md p-4 bg-white w-60">
      <div className="p-2 bg-indigo-100 rounded-full inline-block mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h13L17 13M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>
      </div>
      <div className="w-full h-[32px]">
        <Bar data={miniBarData} options={miniBarOptions} />
      </div>
      <h4 className="text-xl font-semibold mt-2">
        $16.5k <span className="text-green-500 text-sm">↑</span>
      </h4>
      <p className="text-sm text-gray-500">Sales</p>
    </div>
  );
};

// GrowthCard Component
const GrowthCard = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Growth",
        data: [12, 15, 18, 20, 22, 24],
        fill: true,
        backgroundColor: "rgba(90, 85, 255, 0.1)",
        borderColor: "#5A55FF",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="rounded-2xl shadow-md p-4 bg-white w-60">

    <div className="p-2 bg-indigo-100 rounded-full inline-block mb-3">
      <LineChartOutlined className="text-indigo-600 text-xl" />
    </div>
     <div className="w-full h-[40px]">
      <Line data={lineData} options={lineOptions} />
    </div>
    
   <h4 className="text-xl font-semibold mt-2">
  24% <span className="text-green-500 text-sm">↑</span>
</h4>
<p className="text-sm text-gray-500">Growth</p>
    
  </div>
);
};

// Main Page
const Ecommerce2 = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Footwear",
        data: [1200, 1920, 1210, 2000, 1600, 2002],
        backgroundColor: "#4A90E2",
        borderRadius: 6,
        barThickness: 18,
      },
      {
        label: "Fashionware",
        data: [800, 501, 900, 630, 400, 605],
        backgroundColor: "#F5A623",
        borderRadius: 6,
        barThickness: 18,
      },
    ],
  };

  const barOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#6B7280",
          boxWidth: 12,
        },
      },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF" },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#E5E7EB" },
        ticks: { color: "#9CA3AF" },
      },
    },
  };

  const doughnutData = {
    labels: ["Profit", "Expense"],
    datasets: [
      {
        data: [23450, 23450],
        backgroundColor: ["#4A90E2", "#F5A623"],
        hoverOffset: 6,
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="flex flex-row gap-6 mt-6 mb-8 w-full h-full ">
      {/* Bar Chart Box */}
      <div className="bg-white w-[300px] h-[460px] rounded-md shadow-xl p-6 flex flex-col">
        <h3 className="text-lg font-bold text-black mb-1">Revenue Updates</h3>
        <p className="text-sm text-gray-500 mb-2">Overview of Profit</p>
        <div className="flex-1 w-full">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      {/* Doughnut Chart Box */}
      <div className="bg-white w-[300px] h-[460px] rounded-md shadow-xl p-6 flex flex-col items-center gap-6">
        <h3 className="text-lg font-bold text-black mb-1 text-center">
          Sales Overview
        </h3>
        <p className="text-sm text-gray-500 mb-4 text-center">Every Month</p>
        <div className="w-[200px] h-[200px]">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
        <div className="flex justify-around w-full mt-4">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">Profit</p>
            <h3 className="text-lg font-bold text-[#4A90E2]">$23,450</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">Expense</p>
            <h3 className="text-lg font-bold text-[#F5A623]">$23,450</h3>
          </div>
        </div>
      </div>

      {/* Sales + Growth Cards */}
      <div className="flex gap-6">
        <div className="hover:scale-105 transition-transform duration-300">
          <SalesCard />
        </div>
        <div className="hover:scale-105 transition-transform duration-300">
          <GrowthCard />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce2;
