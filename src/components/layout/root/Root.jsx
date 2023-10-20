// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/navbar/Navbar";
import Footer from "../../pages/shared/footer/Footer";

const Root = () => {
  return (
    <div className=" font-roboto container mx-auto  mt-10">
      <div className=" mt-2">
        <Navbar></Navbar>
      </div>
      <div className="mt-10">
        <Outlet></Outlet>
      </div>
      <div className=" mt-2">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
