import React from "react";
import "./contact.css";
import { Col, Row, Checkbox } from "antd";
import { MdCall, MdMailOutline } from "react-icons/md";
import End from "../../components/end/End";

const Contact = () => {
  return (
    <section className="contact">
      <div className="main-container">
        <div className="heading">
          <h1
            style={{
              fontWeight: "bold",
            }}
          >
            Contact Us
          </h1>
        </div>

        <div className="contact-card">
          <Row gutter={52}>
            <Col span={8}>
              <Row>
                <MdCall
                  style={{
                    color: "#F75D34",
                  }}
                  size={20}
                />
                &nbsp;&nbsp;
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  CALL US
                </h4>
              </Row>

              <div className="phn">
                <h2>1800 200 3000</h2>
                <p
                  style={{
                    marginTop: "-22px",
                    opacity: 0.8,
                    marginLeft: "17px",
                    fontSize: "14px",
                  }}
                >
                  (Mon to Sat 9:30 AM to 6 PM)
                </p>
              </div>

              <Row className="mailUs">
                <MdMailOutline
                  style={{
                    color: "#F75D34",
                  }}
                  size={20}
                />
                &nbsp;&nbsp;
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  E-MAIL
                </h4>
              </Row>
              <p
                style={{
                  marginLeft: "17px",
                  fontSize: "22px",
                  fontWeight: "200",
                }}
              >
                support@cardekho.com
              </p>
            </Col>
            <Col span={16}>
              <h4>LET US CONTACT YOU</h4>

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

              <div className="contact-submit">
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
                      width: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    Submit
                  </button>
                </Checkbox>
              </div>
            </Col>
          </Row>
        </div>

        <div className="contact-card">
          <div className="heading">
            <h1
              style={{
                fontWeight: "600",
              }}
            >
              Business with CarDekho
            </h1>
          </div>

          <Row
            style={{
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <div>
              <Row>
                <MdCall
                  style={{
                    color: "#F75D34",
                  }}
                  size={20}
                />
                &nbsp;&nbsp;
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  CALL US
                </h4>
              </Row>

              <div className="phn">
                <h2>1800 200 3000</h2>
                <p
                  style={{
                    marginTop: "-22px",
                    opacity: 0.8,
                    marginLeft: "17px",
                    fontSize: "14px",
                  }}
                >
                  (Mon to Sat 9:30 AM to 6 PM)
                </p>
              </div>
            </div>

            <div
              style={{
                borderLeft: "1px solid #e3f0f0",
              }}
            ></div>
            <div>
              {" "}
              <Row className="mailUs">
                <MdMailOutline
                  style={{
                    color: "#F75D34",
                  }}
                  size={20}
                />
                &nbsp;&nbsp;
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  E-MAIL
                </h4>
              </Row>
              <p
                style={{
                  marginLeft: "17px",
                  fontSize: "22px",
                  fontWeight: "200",
                }}
              >
                support@cardekho.com
              </p>
            </div>
            <div
              style={{
                borderLeft: "1px solid #e3f0f0",
              }}
            ></div>
            <div>
              {" "}
              <Row className="mailUs">
                <MdMailOutline
                  style={{
                    color: "#F75D34",
                  }}
                  size={20}
                />
                &nbsp;&nbsp;
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  DELAER SOLUTIONS
                </h4>
              </Row>
              <p
                style={{
                  marginLeft: "17px",
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                DELAER SOLUTIONS
              </p>
            </div>
            <div
              style={{
                borderLeft: "1px solid #e3f0f0",
              }}
            ></div>
            <div>
              {" "}
              <Row className="mailUs">
                <MdMailOutline
                  style={{
                    color: "#F75D34",
                  }}
                  size={20}
                />
                &nbsp;&nbsp;
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  DELAER SOLUTIONS
                </h4>
              </Row>
              <p
                style={{
                  marginLeft: "17px",
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                DELAER SOLUTIONS
              </p>
            </div>
          </Row>
          <hr className="hr" />
          <Row
            style={{
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <div>
              <Row>
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  CALL US
                </h4>
              </Row>

              <div className="phn">
                <h2>1800 200 3000</h2>
                <p
                  style={{
                    marginTop: "-22px",
                    opacity: 0.8,
                    marginLeft: "17px",
                    fontSize: "14px",
                  }}
                >
                  (Mon to Sat 9:30 AM to 6 PM)
                </p>
              </div>
            </div>

            <div
              style={{
                borderLeft: "1px solid #e3f0f0",
              }}
            ></div>
            <div>
              {" "}
              <Row className="mailUs">
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  E-MAIL
                </h4>
              </Row>
              <p
                style={{
                  marginLeft: "17px",
                  fontSize: "22px",
                  fontWeight: "200",
                }}
              >
                support@cardekho.com
              </p>
            </div>
            <div
              style={{
                borderLeft: "1px solid #e3f0f0",
              }}
            ></div>
            <div>
              {" "}
              <Row className="mailUs">
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  DELAER SOLUTIONS
                </h4>
              </Row>
              <p
                style={{
                  marginLeft: "17px",
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                DELAER SOLUTIONS
              </p>
            </div>
            <div
              style={{
                borderLeft: "1px solid #e3f0f0",
              }}
            ></div>
            <div>
              {" "}
              <Row className="mailUs">
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  DELAER SOLUTIONS
                </h4>
              </Row>
              <p
                style={{
                  marginLeft: "17px",
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                DELAER SOLUTIONS
              </p>
            </div>
          </Row>
        </div>
      </div>
      <End />
    </section>
  );
};

export default Contact;
