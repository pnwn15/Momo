import React, { useState, useRef, useEffect } from "react";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
function Profile() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const profile: any = [
    {
      image: "/user.jpg",
      name: "Mathew Anderson",
      position: "Designer",
      Mail: "info@modernize.com",
    },
  ];

  const menuProfile: string | number = [
    {
      id: 1,
      icon: <UserOutlined style={{ fontSize: 24 }} />,
      name: "My Profile",
      detail: "Account setting",
    },
    {
      id: 2,
      icon: <UserOutlined style={{ fontSize: 24 }} />,
      name: "My Inbox",
      detail: "Message $ Emails",
    },
    {
      id: 3,
      icon: <UserOutlined style={{ fontSize: 24 }} />,
      name: "My Task",
      detail: "To do and daily tasks",
    },
  ];
  return (
    <div className="relative h-full" ref={dropdownRef}>
      <div
        className="flex items-center h-full cursor-pointer"
        onClick={() => {
          console.log("Clicked");
          setOpen(!open);
        }}
      >
        <img className="w-10 h-10 rounded-full" src="/user.jpg" alt="Profile" />
      </div>
      {open && (
        <div className="absolute right-5 mt-2 w-80 h-96 bg-white shadow-lg rounded-lg py-2 z-50">
          <div className="max-w-xl relative left-6 flex gap-5 top-6 flex-col ">
            <h1 className="text-lg font-semibold">User Profile</h1>
            <div>
              {profile.map((item, index) => (
                <div key={index} className="flex items-center gap-5 w-full ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-18 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.position}</p>
                    <p className="text-sm text-blue-500">
                      <span className="mr-2">
                        <MailOutlined />
                      </span>
                      {item.Mail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t w-68 flex flex-col gap-7 border-gray-500">
                <div className="relative top-4 flex flex-col gap-4">
              {menuProfile.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 w-full py-2 px-4 mb-4  hover:bg-gray-100 cursor-pointer"
                >
                  <div className="border border-transparent rounded-md bg-[#F6F9FC] w-12 h-12 p-6 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="ml-4 flex flex-col">
                    <span className="text-sm">{item.name}</span>
                    <span className="text-sm">{item.detail}</span>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
