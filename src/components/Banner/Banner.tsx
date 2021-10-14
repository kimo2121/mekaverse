import React from "react";
import "./banner.css";
import mask from "../../assets/images/mask.png";
const Banner: React.FC = () => {
  return (
    <div>
      <div className="banner"></div>
      <button className="banner-btn">View on Opensea</button>
    </div>
  );
};

export default Banner;
