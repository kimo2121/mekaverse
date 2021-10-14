import React, { useEffect } from "react";
import "./roadmap.css";
import { BsDiamondFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="roadmap-container">
      <div className="road-intro">
        <h1>Roadmap</h1>
        <p data-aos-duration="700" data-aos="fade-down">
          This roadmap outlines our goals and where we want to take MekaVerse.
          We have a lot of ideas and concepts that we are working on. It may
          evolve over time and hopefully become even better!
        </p>
      </div>
      <div className="unknown-div">
        <div className="vertical-line"></div>
        <div className="roadmap">
          <div>
            <p className="line-line"></p>
            <p className="diamond-raod">
              <BsDiamondFill size="21" color="#c70d4e" />
            </p>
            <div
              data-aos-duration="700"
              data-aos="fade-left"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>.01</span>
              <h3>Launch Roadmap</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              <strong>
                Quality comes first. The goal is to make our first drop as cool
                as possible
              </strong>
              so we can have freedom to develop the universe. We're still
              working on a number of rarity criteria, as well as a lot of new
              Lore concepts.
              <strong>
                The drop release date will be announced as soon as the project's
                quality and technical aspects are fully progressed.
              </strong>
              We also need to work hard with our community to make Discord and
              Twitter even cooler with new additions throughout time.
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div
              data-aos-duration="700"
              data-aos="fade-left"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>.02</span>
              <h3>Physical Part</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              <strong>
                Mekas have a huge potential as physical creations.
              </strong>
              We are passionate about 3D printing and want to bring our concept
              to life with high-quality materials. After several talks with
              famous art toys makers, we are currently working on some concepts
              but wait, let’s keep a little mystery for the moment!
              <strong>
                We also aim to create clothing and merchandise using
                high-quality materials and textiles with eco-friendly fabrics.
              </strong>
              Also, Matt. B would love to explore a new and ambitious 3D Art
              Direction about streetwear and fashion in general. By following
              our design principles, we will do everything possible to create
              something amazing before, during, and after the launch of the
              first Drop!
            </p>
          </div>
          <div>
            <p className="diamond-raod first-diamond">
              <BsDiamondFill size="21" />
            </p>
            <div
              data-aos-duration="700"
              data-aos="fade-left"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>.03</span>
              <h3>MekaVerse x Artists</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              We know a lot of artists in the NFT community and beyond!
              <strong>
                We'd like to develop a series in which each Meka is made in
                collaboration with artists we like and under their artistic
                direction.
              </strong>
              We would create a small collection of 1/1 unique Mekas by artists,
              with all proceeds going to them! This collection is incredibly
              important to us, and we are excited to see what we can accomplish
              together!
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div
              data-aos-duration="700"
              data-aos="fade-left"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>.04</span>
              <h3>Meka Multiverse</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              After presenting our original Mekas, we want to explore
              <strong>
                more abstract subjects in order to present a second, very
                distinct drop.
              </strong>
              Our aim is simply to aesthetically enlarge the universe, and each
              relationship between the Meka Dimensions will be described and
              explained. We truly want to blend artistic disciplines, as well as
              move beyond our graphic style and look outside our comfort zone.
              We also want to see if it would be possible to
              <strong>collaborate with famous mecha licenses</strong>
              on future releases. That would be incredible!
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div
              data-aos-duration="700"
              data-aos="fade-left"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>.05</span>
              <h3>Future of Mekas</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              When all of these stages are completed,
              <strong>we’ll take care of maintaining the Meka Universe.</strong>
              We both come from the design industry, and we are truly passionate
              about Art, Short films, Physical and Digital Exploration, and we
              would like to explore even more, with the desire to always make
              events more impressive and ambitious. We are counting on your
              support! We look forward to seeing what happens in the future!
              Love from Mekas ♥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
