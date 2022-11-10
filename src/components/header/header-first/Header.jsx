import React, { useState } from "react";
import classes from "./header.module.css";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { Col, Modal, Row } from "antd";
import LoginBanner from "../../../icons/login-banner.svg";

function Header() {
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
    <div className={classes.navContainerSecond}>
      <p className={classes.text}>Hello and Welcome! to CarDekho.com</p>
      <div className={classes.rightNavDiv}>
        <ul className={classes.rightNavUl}>
          <div className={classes.btnBtn}>
            <button onClick={showModal} className={classes.navBtn}>
              <span
                style={{
                  marginRight: "0.8em",
                  marginTop: "5px",
                }}
              >
                <MdAccountCircle size={20} />
              </span>
              <span> Login / Register</span>
            </button>
            <Modal
              className={classes.modal}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Row>
                <Col span={8}>
                  <img src={LoginBanner} alt="loginBanner" />
                </Col>
                <Col span={16}>
                  <div className={classes.heading2}>
                    <h1>Login or Register</h1>
                    <p>
                      For Better Experience, Order tracking & Regular
                      <br /> updates
                    </p>
                    <input
                      className={classes.headerInput}
                      type="phone"
                      placeholder="Enter phone number"
                    />
                    <button
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                      }}
                      className="btn-primary"
                    >
                      Send OTP
                    </button>
                    <h6
                      style={{
                        textAlign: "center",
                        opacity: 0.7,
                      }}
                    >
                      By continuing I agree with the Privacy Policy, Terms &
                      Conditions
                    </h6>
                  </div>
                </Col>
              </Row>
            </Modal>
          </div>
          <div className={classes.iconList}>
            <GrFacebookOption className={classes.fbIcon} />
            <BsTwitter className={classes.twitterIcon} />
            <AiFillFire className={classes.fireIcon} />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
