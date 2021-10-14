import React, { useEffect } from "react";
import "./gif.css";
import gif from "../../assets/images/gif.gif";
import pyramyd from "../../assets/images/pyramyd.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Gif = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="gif-component">
      <div
        data-aos="fade-down"
        data-aos-duration="800"
        className="gif-left-side"
      >
        <h3>8,888 unique Mekas</h3>
        <h2>who need Drivers.</h2>
        <p>
          The MekaVerse is a collection of 8,888 generative Mekas with hundreds
          of elements inspired by the Japan Mecha universes.
        </p>
        <p>
          Each artwork is original, with its own color palette and creation. The
          objective was to make each Meka unique in order to prioritize quality
          above quantity.
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="gif-pyramid"
      >
        <img src={pyramyd} alt="" />
        <img src={gif} alt="" />
      </div>
    </div>
  );
};

export default Gif;
