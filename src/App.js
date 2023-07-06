import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Partnership from './component/Partnership';
import About from './component/About';
import Mint from './component/Mint';
import Gallery from './component/Gallery';
import React, { useState } from "react";
import {  Route,Routes } from 'react-router-dom';

import Body from "./component/Body";
import Dashboard from "./component/Dashboard";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = () => {
    // Simulate wallet connection logic here (e.g., using a web3 library).
    // For simplicity, we'll just set isConnected to true and a sample wallet address for this example.
    setIsConnected(true);
    setWalletAddress("0x4423...EE55");
  };

  const disconnectWallet = () => {
    // Simulate wallet disconnection logic here.
    setIsConnected(false);
    setWalletAddress("");
  };

  return (
    <>
      <div>
        <Navbar
          isConnected={isConnected}
          walletAddress={walletAddress}
          disconnectWallet={disconnectWallet}
        />
        {isConnected ? <Dashboard /> : null} {/* Replace LandingPage with your landing page component */}
      </div>
     
      <Routes> 
      <Route exact path="/" element={<Body/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Dashboard" element={<Dashboard/>} />
        <Route exact path="/Partnership" element={<Partnership/>} />
        <Route exact path="/Mint" element={<Mint/>} />
        <Route exact path="/Gallery" element={<Gallery/>} />
        </Routes>

      
      
      <Footer/>
    </>
  );
}

export default App;