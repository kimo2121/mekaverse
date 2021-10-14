import React from "react";
import Banner from "../Banner/Banner";
import Gif from "../Gif/Gif";
import Roadmap from "../Roadmap/Roadmap";
import SliderComponent from "../SliderComponent/SliderComponent";
import Team from "../Team/Team";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* <Banner /> */}
      <Gif />
      <SliderComponent />
      <Roadmap />
      <Team />
    </div>
  );
};

export default Home;
