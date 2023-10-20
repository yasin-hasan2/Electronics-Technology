// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/brand"> Brand </Link>
                <ul className="p-2">
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
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>
          </div>
          <a className="btn  text-[#FFFFFF] normal-case text-2xl">
            {" "}
            Phone Shope BD{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li tabIndex={0}>
              <Link to="/myProduct">Product </Link>
            </li>
            <li tabIndex={0}>
              <Link to="/brand"> Brand </Link>
            </li>
            <li tabIndex={0}>
              <Link to="/add"> Add Product </Link>
            </li>

            <li>
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn"> Log In </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
