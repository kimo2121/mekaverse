import React, { useEffect } from "react";
import "./team.css";
import Slider from "react-slick";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import AOS from "aos";
import "aos/dist/aos.css";

interface ImgType {
  data?: Array<string>;
  memberImg?: string;
  memberName?: string;
  instagram?: string;
  twitter?: string;
}

const Member: React.FC<ImgType> = ({
  memberImg,
  memberName,
  data,
  twitter,
  instagram,
}) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const settings = {
    // fade: true,
    infinite: false,
    // rows: 2,
    slidesToScroll: 2,
    slidesToShow: 2,
    dots: true,
    arrows: false,
  };
  return (
    <div className="team-member">
      <div
        data-aos-duration="700"
        data-aos="fade-right"
        className="member-clone"
      >
        <div className="member-details">
          <h3>{memberName}</h3>
          <div>
            <a href={twitter}>
              <Twitter />
            </a>
            <a href={instagram}>
              <Instagram />
            </a>
          </div>
        </div>
        <img src={memberImg} alt="" />
      </div>
      <div data-aos-duration="800" data-aos="fade-left" className="team-slider">
        <h3>NFT Artworks</h3>
        <Slider className="team-slider-component" {...settings}>
          {data?.map((item, index) => (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Member;
