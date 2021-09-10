import React from "react";
import { Link } from "react-router-dom";

import Menu from "../../assets/menu.svg";
import Cart from "../../assets/cart.svg";
import User from "../../assets/user.svg";

import "./Hero.css";

const Hero = (props) => {
  return (
    <section className="hero">
      <div className="nav">
        <div className="menuWrapper navbar">
          <Link to="#" className="menu-bars">
            <img
              src={Menu}
              alt="Menu"
              className="menu"
              onClick={props.onClick}
            />
            <p className="text">Menu</p>
          </Link>
        </div>
        <h1 className="heroTitle">3bershop</h1>
        <div className="cartSection">
          <img src={Cart} alt="Cart" className="cart" />
          <img src={User} alt="User" className="user" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
