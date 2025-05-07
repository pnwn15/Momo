import { ArrowUpOutlined } from "@ant-design/icons";
const DashboardCard = () => {
  return (
    <div
      className=" bg-[#EEF3FF] w-[752px] h-[196px] bg-[length:100%_100%] bg-left  rounded-md shadow-xl m-24"
      style={{
        backgroundImage: "url('/welcome-bg.svg')",
        backgroundPosition: "200px 0px",
      }}
    >
      <div className="flex items-center justify-start gap-4 mb-4 pl-6">
        <img
          src="/user-1.jpg" // รูปโปรไฟล์
          alt="Mathew"
          className="w-12 h-12 rounded-full object-cover shadow-md"
          style={{ marginLeft: "20px", marginTop: "20px" }} //
        />
      </div>
      <div>
        <h2
          className="text-lg font-bold text-black"
          style={{ marginTop: "-40px", marginLeft: "80px" }}
        >
          Welcome back Mathew Anderson!
        </h2>

        <div style={{ marginTop: "60px", marginLeft: "40px" }}>
          <h3 className="text-3xl font-bold text-gray-800">
            $2,340{" "}
            <ArrowUpOutlined
              style={{
                fontSize: "18px",
                transform: "rotate(40deg)",
                marginTop: "-50px",
                marginLeft: "-5px",
              }}
            />
          </h3>
          <p className="text-gray-500 text-sm">Today’s Sales</p>
        </div>
        <span className="text-gray-1000text-2xl">|</span>
      </div>
    </div>
  );
};

export default DashboardCard;
