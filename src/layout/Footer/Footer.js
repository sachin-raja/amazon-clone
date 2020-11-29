import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Footer">
      <a onClick={handleClick}>
        <div className="Footer__Back-To-Top">
          <ExpandLessIcon className="Footer__Back-To-Top-Text" />
        </div>
      </a>

      <div className="Footer__Vertical-Row">
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Get to Know Us</div>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Press</li>
            <li>Amazon Clone Care</li>
            <li>Gift a Smile</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Make Money with Us</div>
          <ul>
            <li>Sell on the Amazon Clone</li>
            <li>Sell under Amazon Clone</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Amazon Clone Pay</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>Amazon Clone Information</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Alexa Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="Footer__Line">
        <img
          className="Footer__Line-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <span className="Footer__Line-message">
          Inspired Amazon Clone developed by &copy;{" "}
          <a href="http://stjapps.in" target="_blank">
            Sachin Raja
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
