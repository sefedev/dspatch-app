import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="border-red px-5 sm:px-4 py-0 rounded border dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img
              src="/src/assets/brand-logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="DSpatch Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col justify-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="flex items-center">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Company
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tracking
                </a>
              </li>
              <li className="flex items-center">
                {" "}
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Partner with DSpatch
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Safety
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Support
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Help
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="text-primary hover:text-white border border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

let sample = (
  <>
    <ul>
      <li>Company</li>
      <li>Tracking</li>
      <li>Partner With Dispatch</li>
      <li>Safety</li>
      <li>Support</li>
      <li>Help</li>
    </ul>
  </>
);
