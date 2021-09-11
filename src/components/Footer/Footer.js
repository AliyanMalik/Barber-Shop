import React from "react";

import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Wifi from "../../assets/wifi.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="terms">
        <p>TERM & CONDITION</p>
        <p>POLICY</p>
        <p>MAP</p>
      </div>
      <div className="footerTitle">
        <h1>3bershop</h1>
        <p>
          &copy;<strong>Mr.Bara.</strong> All Rights Reserved
        </p>
      </div>
      <div className="socialIcons">
        <p>FOLLOW US ON SOCIAL</p>
        <img src={Twitter} alt="twitter" className="icon twitter" />
        <img src={Facebook} alt="facebook" className="icon facebook" />
        <img src={Wifi} alt="wifi" className="icon wifi" />
      </div>
    </div>
  );
};

export default Footer;
