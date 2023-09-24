import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./carousel-custom-styles.css"
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Delay between slides in milliseconds
  };


  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="bgimage1">
        </div>
        <div className="bgimage2">
        </div>
        <div className="bgimage3">
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
