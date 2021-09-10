import React from "react";

import Image1 from "../../assets/1.PNG";
import Image2 from "../../assets/2.PNG";
import Image3 from "../../assets/3.PNG";
import Image4 from "../../assets/4.PNG";
import Image5 from "../../assets/5.PNG";
import Image6 from "../../assets/6.PNG";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <h1 className="portfolioTitle">#MrBara</h1>
      <div className="images">
        <img src={Image1} alt="image1" className="image image1" />
        <img src={Image2} alt="image2" className="image image2" />
        <img src={Image3} alt="image3" className="image image3" />
        <img src={Image4} alt="image4" className="image image4" />
        <img src={Image5} alt="image5" className="image image5" />
        <img src={Image6} alt="image6" className="image image6" />
      </div>
    </div>
  );
};

export default Portfolio;
