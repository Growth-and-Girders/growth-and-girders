import React, { useEffect, useState } from "react";
import treejer from "../Assets/treejer.png";
import { Link } from 'react-router-dom';
// import { ethers } from "ethers";
 const { ethers } = require("ethers");



const Navbar = () => {
  

  return (
    <nav className="#1B1D09">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            {/* ... */}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                src={treejer}
                alt=""
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/About"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  style={{ paddingTop: "25px" }}
                >
                  <Link to="/About" >
                  About
                  </Link>
                  
                </a>
                <a
                  href="/Partnership"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  style={{ paddingTop: "25px" }}
                ><Link to="/Partnership" >
                    Partnership
                </Link>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  style={{ paddingTop: "25px" }}
                >
                  WhitePaper
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  style={{ paddingTop: "25px" }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* Add Connect Wallet button here */}
          {isConnected ? (
            <div>
              <button
                type="button"
                className="bg-blue-500 text-white rounded-md px-3 py-2 text-sm font-medium ml-4"
                style={{ marginTop: "15px" }}
                onClick={disconnectWallet}
              >
                <span className="text-gray-300 mr-4">{walletAddress}</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="bg-blue-500 text-white rounded-md px-3 py-2 text-sm font-medium ml-4"
              style={{ marginTop: "15px" }}
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
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
            href="#"
            className="text-gray-300 hover-bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover-bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover-bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


