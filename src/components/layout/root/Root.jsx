// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/navbar/Navbar";
import Footer from "../../pages/shared/footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto border mt-10">
      <div className="border mt-2">
        <Navbar></Navbar>
      </div>
      <div className="border m-2">
        <Outlet></Outlet>
      </div>
      <div className="border mt-2">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
