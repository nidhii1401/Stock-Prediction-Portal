import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg py-4">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a className="flex items-center text-2xl font-bold tracking-tight cursor-pointer">
          <svg
            className="h-8 w-8 text-blue-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          Stock Prediction Portal
        </a>

        <div className="flex items-center space-x-4">

          <Button text='Login' class='btn rounded-full px-5 py-2 font-medium border border-blue-500 text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white'/>
          &nbsp;
          <Button text='Register' class='btn rounded-full px-5 py-2 font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transform-gpu' />
          
       
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
