import React from "react";
import "./banner.css";
import mask from "../../assets/images/mask.png";
import Timer from "../Timer/Timer";
import Mint from "../Mint/Mint";
const Banner: React.FC = () => {
  return (
    <div>
      <div className="banner"></div>
      {/* <div className="timer-cont"> */}
      <Mint />
      {/* <Timer mintStartAt={163470000} /> */}
      {/* </div> */}
    </div>
  );
};

export default Banner;
