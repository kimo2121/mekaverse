import React, { useEffect } from "react";
import "./community.css";
import meka_blue from "../../assets/images/meka_blue.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Community = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="community-component">
      <div>
        <h1 data-aos-duration="700" data-aos="fade-down">
          Join the community
        </h1>
        <p data-aos-duration="800" data-aos="fade-down">
          MekaVerse Discord already has over 150,000 members! If you want to
          join the #MEKAGANG it’s here. Join us to get the news as soon as
          possible and follow our latest announcements.
        </p>
        <button
          data-aos-duration="900"
          data-aos="fade-down"
          className="com-btn"
        >
          Join our Discord
        </button>
      </div>
      <img data-aos-duration="1000" data-aos="fade-up" src={meka_blue} alt="" />
    </div>
  );
};

export default Community;
