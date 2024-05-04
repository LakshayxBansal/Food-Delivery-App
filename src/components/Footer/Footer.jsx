import React from "react";
import { SocialIcon } from 'react-social-icons'
import assert from 'assert'
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, neque delectus molestiae ipsam nesciunt molestias
              ipsum? Modi inventore nobis quisquam, perspiciatis iusto nisi
              voluptatibus ullam nihil? Perspiciatis enim quisquam eum?
            </p>
            <div className="footer-social-icon ">
              <SocialIcon  network="linkedin" url="https://www.linkedin.com/in/lakshay-bansal-2b5926250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
              <SocialIcon  network="instagram" url="" />
              <SocialIcon  network="x" url="https://twitter.com/LBansal_123" />
              <SocialIcon  network="github" url="https://github.com/LakshayxBansal" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>(+91) 9013358970</li>
                <li>lakshay012003@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="footer-copyright"> Lakshay Bansal 2024 &copy; Tomato.com</p>
      </div>
    </>
  );
};

export default Footer;
