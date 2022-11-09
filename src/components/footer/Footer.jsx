import React from "react";
import "./footer.css";
import { Row } from "antd";
import { Link } from "react-router-dom";
import Apple from "../../images/AppleLogo.png";
import Play from "../../images/GooglePlay.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container-2">
        <div className="footer-grid">
          <div>
            <h1>OVERVIEW</h1>
            <ul className="footer-ul">
              <li>
                <Link className="footer-link" to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className="footer-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/faq">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/terms">
                  Terms & condition
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/privacy">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1>OTHERS</h1>
            <ul className="footer-ul">
              <li>
                <Link className="footer-link" to="/advertise">
                  Advertise with us
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/care">
                  Customer care
                </Link>
              </li>
            </ul>
          </div>
          <div className="connect-with-us">
            <h1>CONNECT WITH US</h1>
            <p>1800 200 3000 (Toll-Free)</p>
            <p>support@cardekho.com</p>
            <p>Dealer solutions</p>
            <p>Used Cars Business</p>
            <p>Contact Us</p>
            <p>Feedback</p>
          </div>
          <div>
            <h1>EXPERIENCE CARDEKHO APP</h1>
            <div className="links">
              <button className="appStore">
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                  src={Apple}
                  alt="apple"
                />

                <div className="linkText">
                  <span>Download on the</span>
                  <span>App Store</span>
                </div>
              </button>
              <button className="googlePlay">
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                  src={Play}
                  alt="..."
                />
                <div className="linkText">
                  <span>GET IT ON</span>
                  <span>Google Play</span>
                </div>
              </button>
            </div>
            <div className="follow-us">
              <h6>Follow us</h6>
              <Row>
                <FaFacebookF
                  size={16}
                  style={{
                    marginRight: "10px",
                    opacity: 0.6,
                    cursor: "pointer",
                  }}
                />
                <FaTwitter
                  size={16}
                  style={{
                    marginRight: "10px",
                    opacity: 0.6,
                    cursor: "pointer",
                  }}
                />
                <FaYoutube
                  size={16}
                  style={{
                    marginRight: "10px",
                    opacity: 0.6,
                    cursor: "pointer",
                  }}
                />
                <FaInstagram
                  size={16}
                  style={{
                    marginRight: "10px",
                    opacity: 0.6,
                    cursor: "pointer",
                  }}
                />
              </Row>
            </div>
          </div>
        </div>

        <div className="legal container-2">
          <p>Copyright @2022. All rights reserved.</p>
          <label>
            Design & Developed by <span>App Technologies</span>
          </label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
