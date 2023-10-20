// import React from 'react'
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div>
      <div className="flex justify-center">
        <ul className="  menu menu-horizontal bg-base-200 rounded-box">
          <li>
            <Link to="/iphone"> I Phone </Link>
          </li>
          <li>
            <Link to="/samsung"> Samsung </Link>
          </li>
          <li>
            <Link to="/google"> Google </Link>
          </li>
          <li>
            <Link to="/sony"> Sony </Link>
          </li>
          <li>
            <Link to="/intel"> Intel </Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Brand;
