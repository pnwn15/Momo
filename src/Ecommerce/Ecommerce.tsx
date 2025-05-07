const DashboardCard = () => {
  return (
    <div className=" bg-[#EEF3FF] w-[752px] h-[196px] bg-[length:100%_100%] bg-left  rounded-md shadow-xl m-24"
    style={{ backgroundImage: "url('/welcome-bg.svg')",
      backgroundPosition: '200px 0px',
    }}>
      <div className="flex items-center justify-start gap-4 mb-4 pl-6">
    <img
      src="/user-1.jpg" // รูปโปรไฟล์
      alt="Mathew"
      className="w-12 h-12 rounded-full object-cover shadow-md"
      style={{ marginLeft: "20px", marginTop: "20px" }} //
    />
     <div>      
      <h2 className="text-lg font-bold text-black"
  style={{ marginTop: "25px" }}>
    Welcome back Mathew Anderson!
  </h2>
    </div>
    </div>
    </div>
  );
};

export default DashboardCard;
