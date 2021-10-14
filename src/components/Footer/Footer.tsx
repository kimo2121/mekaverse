import React, { useEffect } from "react";
import "./footer.css";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Opensea } from "../../assets/icons/opensea.svg";
import footerLogo from "../../assets/images/footer-logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="footer">
      <div data-aos-duration="700" data-aos="fade-down" className="footer-left">
        <div className="footer-logo">
          <img src={footerLogo} alt="" />
          <h2>MekaVerse</h2>
        </div>
        <p>8,888 unique mekas who need drivers.</p>
        <span>©2021 MekaVerse. All rights reserved.</span>
      </div>
      <div
        data-aos-duration="1000"
        data-aos="fade-down"
        className="footer-right"
      >
        <a className="footer-home" href="/">
          Home
        </a>
        <a className="footer-right-a" href="/">
          Terms & Conditions
        </a>
        <a className="footer-right-a" href="/">
          Smart Contract
        </a>
        <div className="ext-icons footer-icons">
          <a href="">
            <Twitter />
          </a>
          <a href="">
            <Opensea />
          </a>
          <a href="">
            <Discord />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
