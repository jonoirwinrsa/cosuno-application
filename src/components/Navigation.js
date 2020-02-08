import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Layout.Header>
    <Menu mode="horizontal" theme="dark" style={{ lineHeight: "64px" }}>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/companies">Companies</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Navigation;
