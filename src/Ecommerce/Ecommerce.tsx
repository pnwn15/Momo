import { ArrowUpOutlined } from "@ant-design/icons";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardCard = () => {
  const data = {
    labels: ['Blue', 'Orange', 'Light Blue'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#4A90E2', '#F5A623', '#B5D6F0'],
        hoverOffset: 4
      }
    ]
  };

  const options = {
    responsive: true,
    cutout: '70%', // เพิ่มความโปร่งตรงกลาง
    plugins: {
      legend: {
        display: false // ซ่อน legend เพื่อให้ไม่กินพื้นที่ในกล่องเล็ก
      },
      tooltip: {
        enabled: true
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-1 ml-4">
      {/* การ์ดหลัก */}
      <div
        className="bg-[#EEF3FF] w-full max-w-[750px] h-[200px] bg-no-repeat bg-cover rounded-md shadow-xl p-6"
        style={{
          backgroundImage: "url('/welcome-bg.svg')",
          backgroundPosition: "170px 0px",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex items-center gap-4 pl-6 pt-6">
          <img
            src="/user-1.jpg"
            alt="Mathew"
            className="w-12 h-12 rounded-full object-cover shadow-md"
            style={{ marginLeft: "-20px", marginTop: "-20px" }}
          />
          <h2 className="text-lg font-bold text-black">
            Welcome back Mathew Anderson!
          </h2>
        </div>

        <div className="flex items-center gap-6 mt-8 ml-10">
          <div className="flex flex-col" style={{ marginTop: "30px", marginLeft: "30px" }}>
            <h3 className="text-3xl font-bold text-gray-800 flex items-center">
              $2,340{" "}
              <ArrowUpOutlined
                style={{
                  fontSize: "18px",
                  transform: "rotate(40deg)",
                  marginLeft: "20px",
                  color: "green",
                }}
              />
            </h3>
            <p className="text-black text-sm">Today’s Sales</p>
          </div>

          <span className="text-gray-300 text-2xl" style={{ marginTop: "30px" }}>|</span>

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center" style={{ marginTop: "30px" }}>
              35%
              <ArrowUpOutlined
                style={{
                  fontSize: "18px",
                  transform: "rotate(40deg)",
                  marginLeft: "8px",
                  color: "green",
                }}
              />
            </h3>
            <p className="text-black text-sm">Overall Performance</p>
          </div>
        </div>
      </div>

      {/* กล่องใหม่ที่ต่อท้าย */}
      <div className="bg-white w-full md:w-[166px] h-[200px] rounded-md shadow-xl p-4 flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold text-black">$10,230</h3>
        <p className="text-gray-500 text-sm mb-2">Expense</p>
        <div className="w-[100px] h-[100px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
