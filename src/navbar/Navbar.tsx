import React, { useState } from "react";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  CodepenOutlined,
  RiseOutlined,
  SoundOutlined,
  TableOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import App from "../App";
import Profile from "./Componentnavbar/Profile";
import Bell from "./Componentnavbar/Bell";
import Cart from "./Componentnavbar/Cart";
import Langue from "./Componentnavbar/Langue";
import Darkmode from "./Componentnavbar/Darkmode";

const { Header, Sider, Content } = Layout;

const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // ใช้ props.children
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setCollapsed(!collapsed); // toggle collapsed state
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible); // toggle Drawer visibility
  };

  const handleMenuClick = () => {
    setDrawerVisible(false); // เมื่อเลือกเมนูให้ปิด Drawer
  };

  const menuItems = (navigate) => [
    {
      type: "group",
      label: (
        <span
          className={`flex ${
            collapsed
              ? "justify-center text-2xl tracking-widest text-black"
              : "justify-start text-black font-extrabold"
          }`}
        >
          {collapsed ? "..." : "Home"}
        </span>
      ),
      children: [
        {
          key: "modern",
          icon: <UserOutlined />,
          label: <span className="menu-label-home">Modern</span>,
          onClick: () => {
            navigate("/");
            handleMenuClick();
          },
        },
        {
          key: "ecommerce",
          icon: <ShoppingCartOutlined />,
          label: <span className="menu-label-home">eCommerce</span>,
          onClick: () => {
            navigate("/ecommerce");
            handleMenuClick();
          },
        },
        {
          key: "nft",
          icon: <DollarOutlined />,
          label: <span className="menu-label-home">NFT</span>,
          onClick: () => {
            navigate("/nft");
            handleMenuClick();
          },
        },
        {
          key: "crypto",
          icon: <CodepenOutlined />,
          label: <span className="menu-label-home">Crypto</span>,
          onClick: () => {
            navigate("/crypto");
            handleMenuClick();
          },
        },
        {
          key: "general",
          icon: <RiseOutlined />,
          label: <span className="menu-label-home">General</span>,
          onClick: () => {
            navigate("/general");
            handleMenuClick();
          },
        },
        {
          key: "music",
          icon: <SoundOutlined />,
          label: <span className="menu-label-home">Music</span>,
          onClick: () => {
            navigate("/music");
            handleMenuClick();
          },
        },
        {
          key: "frontend",
          icon: <TableOutlined />,
          label: <span className="menu-label-home">Frontend Page</span>,
          onClick: () => {
            navigate("/frontend");
            handleMenuClick();
          },
        },
      ],
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={270}
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 0px 8px rgba(0, 0, 0, 0.1)",
          overflow: "auto", // เพิ่ม scroll ถ้าเมนูยาวเกิน
        }}
        className="hidden lg:block"
      >
        <div
          style={{
            display: "flex",
            height: 64,
            alignItems: "center",
            justifyContent: "center",
            padding: "0 16px",
          }}
          className="gap-2"
        >
          <img src="/logos1.png" alt="Logo" style={{ height: 40 }} />
          {!collapsed && (
            <p className="text-xl font-bold tracking-wider">Modernize</p>
          )}
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["modern"]}
          items={menuItems(navigate)}
          style={{ marginTop: 24 }}
        />
      </Sider>

      {/* Layout ด้านขวา */}
      <Layout
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Header
          style={{
            padding: 12,
            background: "#FFFFFF",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            onClick={toggleMenu}
            style={{
              fontSize: "16px",
              width: 64,
              height: 44,
              display: window.innerWidth >= 768 ? "block" : "none",
              padding: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuOutlined style={{ fontSize: 16 }} />
            </div>
          </Button>

          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
            style={{
              fontSize: "16px",
              width: 64,
              height: 14,
              display: window.innerWidth < 768 ? "block" : "none",
              padding: 0,
            }}
          />
          <div className="flex gap-6 my-auto items-center h-full">
            <Darkmode />
            <Langue />
            <Cart />
            <Bell />
            <Profile />
          </div>
        </Header>

        <Content
          className="bg-white p-3 md:p-8 flex justify-center"
          style={{
            flex: 1,
            overflow: "auto", // ✅ สำคัญ: ทำให้เลื่อน scroll ได้
          }}
        >
          {children}
        </Content>
      </Layout>

      <Drawer
        title="Menu"
        placement="left"
        onClose={toggleDrawer}
        open={drawerVisible}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["modern"]}
          items={menuItems(navigate)}
        />
      </Drawer>
    </Layout>
  );
};

export default Navbar;
