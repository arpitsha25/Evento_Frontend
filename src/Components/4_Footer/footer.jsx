import React from "react";
import "../../Components/4_Footer/footer.css";
import logo from "../../assets/evento_c.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
const footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot footer-1">
          <div className="f-1-1">
            <h2>MENU</h2>
          </div>
          <div className="menu-content f-1-2">
            <a href=" "><h1>Testimonials</h1></a>
          </div>
          <div className="menu-content f-1-3">
          <a href=" "><h1>About us</h1></a>
          </div>
          <div className="menu-content f-1-4">
          <a href=" "><h1>Services</h1></a>
          </div>
          <div className="menu-content f-1-4">
          <a href=" "><h1>Contact us</h1></a>
          </div>
        </div>
        <div className="foot footer-2">
          <div>
            <h2>CONNECT US</h2>
          </div>
          <div className="icc">
            <div className="icc-con">
              <AiFillInstagram className="icn" />
              <AiFillFacebook className="icn" />
              <AiFillYoutube className="icn" />
              <AiFillLinkedin className="icn" />
            </div>
          </div>
        </div>
        <div className="foot footer-3">
          <img src={logo} alt="logo" />
          <div className="f3-2">
            <div>
              <h1>Reowned brand to incoperate </h1>
            </div>
            <div className="f3-2-1">
              <h1>happiness to your life</h1>
            </div>
            <div className="f3-2-2">
              <h1>copyright@2022 | All rights reserved</h1>
            </div>
            <div className="f3-2-3">
              <h1>Designed and Developed by Arpit Sharma</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
