import { ArrowUpOutlined } from "@ant-design/icons";

const DashboardCard = () => {
  return (
    <div
      className="bg-[#EEF3FF] w-[752px] h-[196px] bg-[length:100%_100%] bg-left rounded-md shadow-xl m-24"
      style={{
        backgroundImage: "url('/welcome-bg.svg')",
        backgroundPosition: "200px 0px",
      }}
    >
      <div className="flex items-center gap-4 pl-6 pt-6" >
        <img
          src="/user-1.jpg"
          alt="Mathew"
          className="w-12 h-12 rounded-full object-cover shadow-md"
          style={{ marginLeft: "16px", marginTop: "16px" }}
          
        />
        <h2 className="text-lg font-bold text-black" >
          Welcome back Mathew Anderson!
        </h2>
      </div>

      {/* Section: Sales and Separator */}
      <div className="flex items-center gap-6 mt-8 ml-10" style={{ marginTop: "50px" ,
                marginLeft: "55px"}}>
        {/* Today’s Sales */}
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold text-gray-800 flex items-center">
            $2,340{" "}
            <ArrowUpOutlined
              style={{
                fontSize: "18px",
                transform: "rotate(40deg)",
                marginLeft: "6px",
              }}
            />
          </h3>
          <p className="text-gray-500 text-sm">Today’s Sales</p>
        </div>

        {/* | Separator */}
        <span className="text-gray-300 text-2xl">|</span>

        {/* (Optional) Add more sections here, e.g., Performance */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-green-600">35%</h3>
          <p className="text-gray-500 text-sm">Overall Performance</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
