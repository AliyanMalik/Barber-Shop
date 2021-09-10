import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product1 from "../../assets/Product4.PNG";
import Product2 from "../../assets/Product2.png";
import Product3 from "../../assets/Product3.PNG";
import Product4 from "../../assets/Product4.PNG";
import "./Carousel.css";

const ProductCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
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
      <div className="firstProduct">
        <img src={Product1} alt="product"></img>
        <div className="details">
          <p className="productDescription">Chrome Shaving Bowl</p>
          <p className="productPrice">$21.57</p>
        </div>
      </div>
      <div className="secondProduct">
        <img src={Product2} alt="product" className="product"></img>
        <p className="productDescription">Nevilla Moustache Wax</p>
        <p className="productPrice">$18.99</p>
      </div>
      <div className="thirdProduct">
        <img src={Product3} alt="product" className="product"></img>
        <p className="productDescription">Men's Beard Grooming Kit</p>
        <p className="productPrice">$26.79</p>
      </div>
      <div className="fourthProduct">
        <img src={Product4} alt="product" className="product"></img>
        <p className="productDescription">Chrome Shaving Bowl</p>
        <p className="productPrice">$21.57</p>
      </div>
      <div className="firstProduct">
        <img src={Product2} alt="product"></img>
        <p className="productDescription">Nevilla Moustache Wax</p>
        <p className="productPrice">$18.99</p>
      </div>
      <div className="secondProduct">
        <img src={Product3} alt="product" className="product"></img>
        <p className="productDescription">Men's Beard Grooming Kit</p>
        <p className="productPrice">$26.79</p>
      </div>
      <div className="thirdProduct">
        <img src={Product4} alt="product" className="product"></img>
        <p className="productDescription">Chrome Shaving Bowl</p>
        <p className="productPrice">$21.57</p>
      </div>
      <div className="fourthProduct">
        <img src={Product1} alt="product" className="product"></img>
        <p className="productDescription">Chrome Shaving Bowl</p>
        <p className="productPrice">$21.57</p>
      </div>
      <div className="firstProduct">
        <img src={Product2} alt="product"></img>
        <p className="productDescription">Nevilla Moustache Wax</p>
        <p className="productPrice">$18.99</p>
      </div>
      <div className="secondProduct">
        <img src={Product1} alt="product" className="product"></img>
        <p className="productDescription">Chrome Shaving Bowl</p>
        <p className="productPrice">$21.57</p>
      </div>
      <div className="thirdProduct">
        <img src={Product3} alt="product" className="product"></img>
        <p className="productDescription">Men's Beard Grooming Kit</p>
        <p className="productPrice">$26.79</p>
      </div>
      <div className="fourthProduct">
        <img src={Product4} alt="product" className="product"></img>
        <p className="productDescription">Chrome Shaving Bowl</p>
        <p className="productPrice">$21.57</p>
      </div>
    </Carousel>
  );
};

export default ProductCarousel;
