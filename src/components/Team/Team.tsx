import React, { useEffect } from "react";
import "./team.css";
import golden_pyramyd from "../../assets/images/golden_pyramyd.png";
import mattey from "../../assets/images/mattey.jpg";
import bracco from "../../assets/images/bracco.jpg";
import mattey_work_01 from "../../assets/images/mattey_work_01.jpg";
import mattey_work_02 from "../../assets/images/mattey_work_02.jpg";
import mattey_work_03 from "../../assets/images/mattey_work_03.jpg";
import mattey_work_04 from "../../assets/images/mattey_work_04.jpg";
import bracco_work_01 from "../../assets/images/bracco_work_01.jpg";
import bracco_work_02 from "../../assets/images/bracco_work_02.jpg";
import bracco_work_03 from "../../assets/images/bracco_work_03.jpg";
import bracco_work_04 from "../../assets/images/bracco_work_04.jpg";
import Member from "./Member";
import AOS from "aos";
import "aos/dist/aos.css";

const imgsArr1: Array<string> = [
  mattey_work_01,
  mattey_work_02,
  mattey_work_03,
  mattey_work_04,
];
const imgsArr2: Array<string> = [
  bracco_work_01,
  bracco_work_02,
  bracco_work_03,
  bracco_work_04,
];

const Team: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="team">
      <div className="team-1st">
        <div>
          <img src={golden_pyramyd} alt="" />
          <h3 data-aos-duration="700" data-aos="fade-down">
            Who are we?
          </h3>
          <h2 data-aos-duration="900" data-aos="fade-down">
            Creative teams
          </h2>
        </div>
        <p data-aos-duration="1300" data-aos="fade-left">
          Hi! Mattey & Matt. B are two friends currently focusing on 3D & Art
          direction. We have been working hard to establish our own style, and
          we're continuously looking for new ways to push ourselves. We also
          worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!
        </p>
      </div>
      <Member memberName="Mattey" memberImg={mattey} data={imgsArr1} />
      <br />
      <br />
      <br />
      <Member memberName="Matt.B" memberImg={bracco} data={imgsArr2} />
    </div>
  );
};

export default Team;
