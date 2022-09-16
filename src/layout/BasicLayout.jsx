import React from "react";
import {Link, Outlet} from "react-router-dom";
import { Menu } from "antd";
import {Footer, Header} from "antd/lib/layout/layout";
import "./BasicLayout.css";

const BasicLayout = () => {
    return (
        <div>
          <Header>Header</Header>
          <Menu className="horizontal" mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home">💃 Home<Link to="/"></Link></Menu.Item>
            <Menu.Item key="about">🍸 About<Link to="/about"></Link></Menu.Item>
            <Menu.Item key="help">🐵 Help<Link to="/help"></Link></Menu.Item>
          </Menu>
          <div>
            <Outlet/>
          </div>
          <Footer>This is the end of the List</Footer>
        </div>
    )
}

export default BasicLayout;





{/* <Route path="/" element={<div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/help">Help</Link>
            <Link to="/*">404</Link>
          </nav>
          <Outlet/>
        </div>}> */}