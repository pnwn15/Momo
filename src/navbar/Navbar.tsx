import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
  CodepenOutlined,
  RiseOutlined,
  MutedOutlined,
  TableOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Drawer, theme } from "antd";
import { useNavigate } from "react-router-dom";
import App from "../App";
const { Header, Sider, Content } = Layout;

const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false); // ใช้ collapsed state
  const [drawerVisible, setDrawerVisible] = useState(false); // ใช้ state สำหรับการแสดง Drawer
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
    <Layout>
      {/* Sidebar สำหรับ Desktop */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#ffffff" }}
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
        >
          <img
            src="/logo.svg" // เปลี่ยน path เป็นโลโก้ของคุณ
            alt="Logo"
            style={{ height: 22 }}
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["modern"]}
          items={menuItems(navigate)}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: "#FFFFFF" }}>
          {/* ปุ่ม Toggle สำหรับ Desktop */}
          <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
            onClick={toggleMenu}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              display: window.innerWidth >= 768 ? "block" : "none", // แสดงในหน้าจอที่ขนาด > 768px
            }}
          />

          {/* ปุ่ม Toggle สำหรับ Mobile */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              display: window.innerWidth < 768 ? "block" : "none", // แสดงในหน้าจอที่ขนาด < 768px
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
          }}
        >
          <App />
        </Content>
      </Layout>

      {/* Drawer สำหรับ Mobile */}
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
