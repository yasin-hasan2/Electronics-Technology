// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

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
              <li tabIndex={0}>
                <Link to="/myProduct">My Cart </Link>
              </li>

              <li tabIndex={0}>
                <Link to="/add"> Add Product </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
              <li>
                <Link to="/singUp"> Sing Up </Link>
              </li>
              <li>
                <Link to="/singIn"> Sing In </Link>
              </li>
              <li>
                <Link to="/clint"> Users </Link>
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
              <Link to="/add"> Add Product </Link>
            </li>
            <li>
              <Link to="/contact"> Contact </Link>
            </li>
            <li>
              <Link to="/singUp"> Sing Up </Link>
            </li>
            <li>
              <Link to="/singIn"> Sing In </Link>
            </li>
            <li>
              <Link to="/clint"> Users </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleSignOut}> Sign Out </button>
          ) : (
            <Link to="/singIn">
              <button> Sign In </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
