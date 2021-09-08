import React from "react";

import Hero from "../Hero Section/Hero";
import Body from "../Body Section/Body";
import "./LandingPage.css";
import Products from "../Products/Products";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Body></Body>
      <Products />
    </React.Fragment>
  );
};

export default LandingPage;
