import React, { useState } from "react";
import "./footer.css";
import { Row, Modal, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Apple from "../../images/AppleLogo.png";
import Play from "../../images/GooglePlay.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
              <li>
                <Link onClick={showModal} className="footer-link">
                  Feedback
                </Link>
              </li>
            </ul>
            <Modal
              title="Feedback"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div className="contact-form">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div className="inputBox">
                    <input type="text" name="" required />
                    <span>Enter Name</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="inputBox">
                    <input type="text" name="" required />
                    <span>Enter Email</span>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div className="inputBox">
                    <input type="phone" name="" required />
                    <span>Enter Mobile Number</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="inputBox">
                    <input type="text" name="" required />
                    <span>Enter City</span>
                  </div>
                </div>
                <div className="inputBox">
                  <textarea />
                  <span>Please share your feed what can we improve?</span>
                </div>
              </div>

              <div className="mt-20">
                <input type="file" name="" required />
                <p
                  style={{
                    opacity: 0.8,
                    fontSize: "13px",
                  }}
                >
                  Upload .jpg, .png files only
                </p>
              </div>

              <div
                className="contact-submit"
                style={{
                  marginLeft: "25%",
                }}
              >
                <Checkbox>
                  <p
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    I agree to{" "}
                    <span
                      style={{
                        color: "#5496C1",
                        fontWeight: "600",
                      }}
                    >
                      Terms & Conditions
                    </span>{" "}
                    <br />
                    Please agree to terms and
                  </p>
                  <button
                    style={{
                      backgroundColor: "#F75D34",
                      color: "#fff",
                      padding: "14px 14px",
                      border: "#F75D34",
                      borderRadius: "7px",
                      width: "70%",
                      fontWeight: "bold",
                      marginLeft: "10%",
                    }}
                  >
                    Submit
                  </button>
                </Checkbox>
              </div>
            </Modal>
          </div>
          <div className="connect-with-us">
            <h1>CONNECT WITH US</h1>
            <p>1800 200 3000 (Toll-Free)</p>
            <p>support@cardekho.com</p>
            <p>Dealer solutions</p>
            <p>Used Cars Business</p>
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
