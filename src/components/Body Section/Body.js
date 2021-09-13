import React from "react";
import Description from "../Description/Description";
import Mr from "../../assets/mr.png";
import Ba from "../../assets/ba.png";
import Brush from "../../assets/Brush.PNG";
import Bara from "../../assets/mr.bara.PNG";
import Next from "../../assets/next.svg";

import "./Body.css";

const Body = () => {
  return (
    <React.Fragment>
      <section className="bodyContainer">
        <div className="introduce">
          <img src={Mr} alt="mr" className="mr" />
          {/* <div className="card"></div> */}
          <img src={Bara} alt="bara" className="card"></img>
          <Description
            heading="INTRODUCE"
            title="Never Ask A Barber If You Need A Haircut"
            footer1="LoganCee - "
            footer2="Boss at Mr.Bara"
            className="hide"
          />
        </div>
        <div className="arrivals">
          <Description
            heading="NEW ARRIVALS"
            title="Mr.Bara Wooden Simple Shaving Brush"
            footer1="SHOP NOW"
            margin="310px"
            width="51%"
            src={Next}
            alt="src"
            className="next"
          />
          <img src={Brush} alt="brush" className="brush" />
          <img src={Ba} alt="barber" className="ba" />
        </div>
      </section>
      <section className="imageContainer"></section>
    </React.Fragment>
  );
};

export default Body;
