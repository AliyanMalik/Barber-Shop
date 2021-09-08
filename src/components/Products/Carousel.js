import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "../../assets/Product.jpg";
import "./Carousel.css";

const ProductCarousel = () => {
  const imageStyle = {
    margin: "0 50px",
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div style={imageStyle}>
        <img src={Product} alt="product"></img>
        <p className="productDescription">Kent Grooming Brush</p>
        <p className="productPrice">$35.99</p>
      </div>
      <div style={imageStyle}>
        <img src={Product} alt="product" className="product"></img>
      </div>
      <div style={imageStyle}>
        <img src={Product} alt="product" className="product"></img>
      </div>
      <div style={imageStyle}>
        <img src={Product} alt="product" className="product"></img>
      </div>
      <div style={imageStyle}>
        <img src={Product} alt="product" className="product"></img>
      </div>
      <div style={imageStyle}>
        <img src={Product} alt="product" className="product"></img>
      </div>
      <div style={imageStyle}>
        <img src={Product} alt="product" className="product"></img>
      </div>
      <div style={imageStyle}>
        <img src={Product} alt="product" className="product"></img>
      </div>
    </Carousel>
  );
};

export default ProductCarousel;
