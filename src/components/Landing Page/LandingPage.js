import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "../Hero Section/Hero";
import Body from "../Body Section/Body";
import "./LandingPage.css";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Hero />
        <Body />
        <Products />
        <Discount />
        <Portfolio />
        <Footer />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/introduction" component={Body} />
          <Route path="/products" component={Products} />
          <Route path="/discount" component={Discount} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/Footer" component={Footer} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default LandingPage;
