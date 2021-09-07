import Description from "../Description/Description";
import Mr from "../../assets/mr.png";

import "./Body.css";

const Body = () => {
  return (
    <section className="bodyContainer">
      <div className="introduce">
        <img src={Mr} alt="mr" className="mr" />
        <div className="card"></div>
        <Description
          heading="INTRODUCE"
          title="Never Ask A Barber If You Need A Haircut"
          footer1="LoganCee - "
          footer2="Boss at Mr.Bara"
        />
      </div>
    </section>
  );
};

export default Body;
