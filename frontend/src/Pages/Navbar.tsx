import React from "react";
import Homeui from "./Middle/Homeui";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Navbar() {
  const name = localStorage.getItem("name");
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  //  localStorage.removeItem("value")
   localStorage.removeItem("dietplan")
  }
  return (
    <div>
      <nav className="bg-gray-800 z-40 fixed top-0 left-0 right-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* <span className="sr-only">Open main menu</span> */}

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="block h-8 w-auto lg:hidden "
                    src="https://user-images.githubusercontent.com/106812942/237722737-7771a3f0-4138-4ca9-b511-e480c5a25934.png"
                    alt="Your Company"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://user-images.githubusercontent.com/106812942/237722737-7771a3f0-4138-4ca9-b511-e480c5a25934.png"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                   href="/dashboard"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  <Link
                    to="/workout"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Workout
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                onClick={handlelogout}
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <a style={{ display: !name ? "none" : "block" }} href="/">
                  Logout
                </a>
                {/* <span className="sr-only">View notifications</span> */}
                {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                {/* <span>Logout</span> */}
              </button>

              <div className="relative ml-3">
                <div className="flex flex-col gap-0">
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-9 w-9 rounded-full ml-4"
                      src="https://i.pinimg.com/474x/d8/0d/d2/d80dd2f38a99249677afa2cb58757992.jpg"
                      alt=""
                    />
                  </button>
                  <span
                    style={{ display: !name ? "none" : "block" }}
                    className="text-sky-400 mr-3"
                  >
                    {name}
                  </span>
                  <button
                    onClick={() => {
                      navigate("/mylogin");
                    }}
                    style={{ display: name ? "none" : "block" }}
                    className="text-white ml-3 mb-0"
                  >
                    Login
                  </button>
                  {/* <button
                    style={{ display: !name ? "none" : "block" }}
                    className="text-white ml-3 pb-3"
                  >
                    Logout
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="/workout"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Workout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
