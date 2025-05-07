import React, { useState } from "react";
import { BellOutlined } from "@ant-design/icons";
import Buttons from "../Components/Buttons";
function Bell() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <BellOutlined style={{ fontSize: 20 }} onClick={toggleDropdown} />

      {/* แสดงกล่องข้อความเมื่อคลิก */}
      {isOpen && (
        <div className="absolute mt-2 right-18 bg-white shadow-lg  rounded-lg w-70 p-4">
          <div className="flex justify-between max-w-md items-center w-full">
          <p className="text-base font-medium ml-4">Notification</p>
            <Buttons
              label="5 news"
              className="bg-[#4F73D9] text-white h-6 px-3 py-1 text-sm flex items-center justify-center rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Bell;
