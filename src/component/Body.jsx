import React from 'react';
import body from "../Assets/body.png";
import "./Navbar.css";


const Body = () => {
  return (
    
    <>
    <div style={{ color: "white", backgroundcolor: 'black', paddingLeft: '120px', paddingTop: '60px', fontSize: '30px'}}>
        Together, let's create a more sustainable <br/>
        future through inclusive finance and <br/>
        Climate Action.
        
        
      </div>
    <img src={body} alt="najgjh"></img>
    </>
  )
}

export default Body