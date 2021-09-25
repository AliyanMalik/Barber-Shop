import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import Menu from "../../assets/menu.svg";
import Cart from "../../assets/cart.svg";
import User from "../../assets/user.svg";

import "./Hero.css";

const Hero = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const SidebarData = [
    {
      title: "Home",
      cName: "nav-text",
      id: 1,
    },
    {
      title: "About Us",
      cName: "nav-text",
      id: 2,
    },
    {
      title: "Shop",
      cName: "nav-text",
      id: 3,
    },
    {
      title: "Portfolio",
      cName: "nav-text",
      id: 4,
    },
    {
      title: "Contact Us",
      cName: "nav-text",
      id: 5,
    },
  ];
  const scrollPage = (id) => {
    if (id === 0) {
      window.scrollTo(20, 20);
    }
    if (id === 1) {
      window.scrollTo(0, `${window.innerWidth < 720 ? 560 : 800}`);
    }
    if (id === 2) {
      window.scrollTo(0, `${window.innerWidth < 720 ? 2150 : 2990}`);
    }
    if (id === 3) {
      window.scrollTo(0, `${window.innerWidth < 720 ? 3430 : 4400}`);
    }
    if (id === 4) {
      window.scrollTo(0, `${window.innerWidth < 720 ? 4500 : 5200}`);
    }
  };

  return (
    <section className="hero">
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <div id={item.id} onClick={() => scrollPage(index)}>
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <div className="nav">
        <div to="#" className="menuWrapper" onClick={showSidebar}>
          <img src={Menu} alt="Menu" className="menu" />
          <p className="text">Menu</p>
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
