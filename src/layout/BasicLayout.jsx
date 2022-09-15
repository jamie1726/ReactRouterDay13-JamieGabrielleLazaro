import React from "react";
import {Link, Outlet} from 'react-router-dom';

function BasicLayout () {
    return (
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/help">Help</Link>
            <Link to="/404">404</Link>
          </nav>
          <div>
            <Outlet/>
          </div>
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