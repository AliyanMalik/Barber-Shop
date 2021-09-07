import React from "react";
import Menu from "../../assets/menu.svg";
import Cart from "../../assets/cart.svg";
import User from "../../assets/user.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="nav">
        <div className="menuWrapper">
          <img src={Menu} alt="Menu" className="menu" />
          <p className="text">Menu</p>
        </div>
        <h1 className="title">3bershop</h1>
        <div className="cartSection">
          <img src={Cart} alt="Cart" className="cart" />
          <img src={User} alt="User" className="user" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
