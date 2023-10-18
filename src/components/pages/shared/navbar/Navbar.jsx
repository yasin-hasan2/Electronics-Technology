// import React from 'react';

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
                <a>a</a>
              </li>
              <li>
                <a>b</a>
                <ul className="p-2">
                  <li>
                    <a>c</a>
                  </li>
                  <li>
                    <a>d</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>e</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>a</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>b</summary>
                <ul className="p-2">
                  <li>
                    <a>h</a>
                  </li>
                  <li>
                    <a>i</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>c</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
