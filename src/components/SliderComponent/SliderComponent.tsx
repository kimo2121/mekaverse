import React, { useEffect } from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import meka_01 from "../../assets/images/meka_01.jpg";
import meka_02 from "../../assets/images/meka_02.jpg";
import meka_03 from "../../assets/images/meka_03.jpg";
import meka_04 from "../../assets/images/meka_04.jpg";
import meka_05 from "../../assets/images/meka_05.jpg";
import meka_06 from "../../assets/images/meka_06.jpg";
import meka_07 from "../../assets/images/meka_07.jpg";
import meka_08 from "../../assets/images/meka_08.jpg";
import meka_09 from "../../assets/images/meka_09.jpg";
// import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
const data1: Array<string> = [
  meka_01,
  meka_02,
  meka_03,
  meka_04,
  meka_05,
  meka_06,
  meka_07,
  meka_08,
  meka_09,
];

const SliderComponent: React.FC = () => {
  // useEffect(() => {
  //   AOS.init({});
  // }, []);
  const settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    // centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="800"
      className="slider-container"
    >
      <Slider className="slider-component" {...settings}>
        {data1?.map((item, index) => (
          <div className="each-slide" key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderComponent;
