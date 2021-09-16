import React from "react";

import Hero from "../Hero Section/Hero";
import Body from "../Body Section/Body";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        {/* <Hero /> */}
        <Body />
        {/* <Products />
        <Discount />
        <Portfolio />
        <Footer /> */}
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
