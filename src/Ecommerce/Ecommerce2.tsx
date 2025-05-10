
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Ecommerce2 = () => {
  return (
    <div>
      <div className="bg-white w-[365px] h-[439px] rounded-md shadow-xl p-6 flex flex-col justify-between mt-6 mb-8">
        <h3 className="text-lg font-bold text-black mb-1">Revenue Updates</h3>
        <p className="text-sm text-gray-500 mb-4">Overview of Profit</p>
        <div className="w-full h-[300px]">
          <Bar
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "Footwear",
                  data: [12, 19, 14, 20, 16, 22],
                  backgroundColor: "#4A90E2",
                  borderRadius: 6,
                  barThickness: 18,
                },
                {
                  label: "Fashionware",
                  data: [8, 11, 9, 13, 10, 15],
                  backgroundColor: "#F5A623",
                  borderRadius: 6,
                  barThickness: 18,
                },
              ],
            }}
            options={{
              responsive: true,
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
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce2;
