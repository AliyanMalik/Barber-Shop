import React from "react";

import "./Discount.css";

const Discount = () => {
  return (
    <div className="discountContainer">
      <h1 className="discountTitle">Get Discount Info</h1>
      <p className="discountText">
        Subscribe our newsletter for get notification about new
        updates,information discount, etc.
      </p>
      <input
        type="text"
        placeholder="Enter you email address here"
        className="discountInput"
      />
      <button className="discountButton">SUBSCRIBE</button>
    </div>
  );
};

export default Discount;
