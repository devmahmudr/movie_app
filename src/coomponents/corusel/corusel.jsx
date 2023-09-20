import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect, useState } from "react";
import image1 from '../../../public/48e692185290e45ed2458191094aa87a.jpg'
const Carousel = () => {
//     <>
//     //   const [data, setData] = useState(null);
// //   useEffect(() => {
// //     axios.get(`
// //     https://api.themoviedb.org/3/movie/346698/images`, {
// //       params: {
// //         api_key: "932f84b33b3cebc5e96f7f570a44337f",
// //       },
// //     }).then((res)=>{
// //         setData({data:res.data})
// //     })
// //   },[]);
// //   console.log(data);
//     </>
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Delay between slides in milliseconds
  };

  return (
    <div>
      <h2>React Carousel</h2>
      <Slider {...settings}>
        <div className="bgimage">
            <h1>slide1</h1>
            {/* <img src={image1} alt="" style={{width:"100vw",height:"80vh",objectFit:"contain"}} /> */}
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
