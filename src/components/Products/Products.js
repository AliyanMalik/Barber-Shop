import React from "react";

import ProductCarousel from "./Carousel";
import "./Products.css";

const Products = () => {
  return (
    <React.Fragment>
      <div className="productContainer">
        <div className="productHead">
          <p className="productHeading">OUR PRODUCTS</p>
          <h1 className="productTitle">Most Popular Products</h1>
        </div>
        <div className="carouselWrapper">
          <ProductCarousel />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
