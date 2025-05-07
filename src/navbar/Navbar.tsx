import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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
import Profile from "./Profile";

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
      label: <span className="flex">Home</span>,
      children: [
        {
          key: "modern",
          icon: <UserOutlined />,
          label: <span className="menu-label-home">Modern</span>,
          onClick: () => {
            navigate("/modern");
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
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: "#FFFFFF",
          height: "130vh", // ทำให้ Sider มีความสูงเต็มหน้าจอ
          boxShadow: "2px 0px 8px rgba(0, 0, 0, 0.1)", // เพิ่มเงาด้านขวา
        }}
        className="hidden lg:block" // ซ่อนบนหน้าจอ sm, md และแสดงบน lg ขึ้นไป
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 16px",
          }}
          className="gap-2"
        >
          <img src="/logos1.png" alt="Logo" style={{ height: 40 }} />
          {!collapsed && <p className="text-xl font-bold tracking-wider ">Modernize</p>}
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["modern"]}
          items={menuItems(navigate)}
        />
      </Sider>

      <Layout>
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
            icon={<MenuOutlined />}
            onClick={toggleMenu}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              display: window.innerWidth >= 768 ? "block" : "none",
            }}
          />

          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              display: window.innerWidth < 768 ? "block" : "none",
            }}
          />
          <div className="flex items-center p-10 h-full">
            <Profile />
          </div>
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: "100vh",
            backgroundColor: "#FFFFFF",
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
