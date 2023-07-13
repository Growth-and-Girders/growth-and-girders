import body from "../Assets/body.png";
import "./Navbar.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Body = () => {
  let navigate = useNavigate() ;
  return (
    <>
      <div
        style={{
          color: "white",
          backgroundcolor: "black",
          paddingLeft: "120px",
          paddingTop: "60px",
          fontSize: "30px",
        }}
      >
        Together, let's create a more sustainable <br />
        future through inclusive finance and <br />
        Climate Action.
      </div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-900 text-white rounded-md px-6 py-2 text-sm font-medium ml-40"
        style={{ marginTop: "40px" }}
        onClick={() => {
          navigate("/Dashboard");
        }}> Launchpad
      </button>

      <img src={body} alt="najgjh" />
    </>
  );
};

export default Body;
