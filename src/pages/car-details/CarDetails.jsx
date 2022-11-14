import React from "react";
import "./details.css";
import { Col, Row } from "antd";
import Sec1 from "../../images/sec-1.png";
import Sec2 from "../../images/sec-2.png";
import Sec3 from "../../images/row.png";
import Special from "../../images/special.jpg";
import Cardekho from "../../images/cardekho.png";
import {
  MdKeyboardArrowRight,
  MdHome,
  MdFavoriteBorder,
  MdCalendarToday,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import DetailsCars from "./detailsData";
import End from "../../components/end/End";

const CarDetails = () => {
  const images = [
    "https://images10.gaadicdn.com/usedcar_image/original/3b072044d6f5c5e2c5344c5d0b6732fb.jpg?imwidth=930",
    "https://images10.gaadicdn.com/usedcar_image/original/3b072044d6f5c5e2c5344c5d0b6732fb.jpg?imwidth=930",
    "https://images10.gaadicdn.com/usedcar_image/original/3b072044d6f5c5e2c5344c5d0b6732fb.jpg?imwidth=930",
  ];

  return (
    <section className="detail">
      <div className="main-container">
        <Row gutter={52}>
          <Col span={16}>
            <div className="crousel">
              <Slide>
                <div className="each-slide-effect">
                  <div
                    style={{
                      backgroundImage: `url(${images[0]})`,
                    }}
                  ></div>
                </div>
                <div className="each-slide-effect">
                  <div
                    style={{
                      backgroundImage: `url(${images[1]})`,
                    }}
                  ></div>
                </div>
                <div className="each-slide-effect">
                  <div
                    style={{
                      backgroundImage: `url(${images[2]})`,
                    }}
                  ></div>
                </div>
              </Slide>
            </div>

            <div className="listing">
              <Row>
                <div className="separator-card-2">
                  <p>OVERVIEW</p>
                </div>
                <div className="separator-card-2">
                  <p>OVERVIEW</p>
                </div>
                <div className="separator-card-2">
                  <p>OVERVIEW</p>
                </div>
                <div className="separator-card-2">
                  <p>OVERVIEW</p>
                </div>
                <div className="separator-card-2">
                  <p>OVERVIEW</p>
                </div>
              </Row>
            </div>

            <div className="car-overview">
              <h1
                style={{
                  fontWeight: "bold",
                }}
              >
                Car overview
              </h1>

              <Row>
                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Registration Year
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Nov 2017
                    </h4>
                  </Row>
                </Col>

                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Insurance Validity
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Yes
                    </h4>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Registration Year
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Nov 2017
                    </h4>
                  </Row>
                </Col>

                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Insurance Validity
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Yes
                    </h4>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Registration Year
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Nov 2017
                    </h4>
                  </Row>
                </Col>

                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Insurance Validity
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Yes
                    </h4>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Registration Year
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Nov 2017
                    </h4>
                  </Row>
                </Col>

                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Insurance Validity
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Yes
                    </h4>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Registration Year
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Nov 2017
                    </h4>
                  </Row>
                </Col>

                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Insurance Validity
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Yes
                    </h4>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Registration Year
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Nov 2017
                    </h4>
                  </Row>
                </Col>

                <Col span={12}>
                  <Row>
                    <MdCalendarToday
                      style={{
                        marginTop: "4px",
                        opacity: "0.7",
                      }}
                      size={13}
                    />
                    &nbsp;
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Insurance Validity
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      Yes
                    </h4>
                  </Row>
                </Col>
              </Row>

              <Row className="closer">
                <h2>Book FREE Test Drive CTA</h2>
                &nbsp;&nbsp;
                <img
                  src="	https://stimg.cardekho.com/pwa/img/ucrN/redcircleDown.svg"
                  alt="down"
                  style={{
                    marginTop: "-5px",
                  }}
                />
              </Row>
            </div>

            <div className="assured-benefits">
              <img
                src={Sec1}
                alt="sec"
                style={{
                  width: "100%",
                }}
              />
            </div>

            <div className="detail-feature">
              <img
                style={{
                  width: "100%",
                }}
                src={Sec2}
                alt="feature"
              />
            </div>

            <div className="car-overview-2">
              <h1
                style={{
                  fontWeight: "bold",
                }}
              >
                Specifications
              </h1>

              <Row>
                <Col span={12}>
                  <Row>
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Mileage
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      17.1 kmpl
                    </h4>
                  </Row>
                </Col>

                <Col span={12}>
                  <Row>
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Engine
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      1956 CC
                    </h4>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Row>
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Mileage
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      17.1 kmpl
                    </h4>
                  </Row>
                </Col>

                <Col span={12}>
                  <Row>
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Engine
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      1956 CC
                    </h4>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Row>
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Mileage
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      17.1 kmpl
                    </h4>
                  </Row>
                </Col>

                <Col span={12}>
                  <Row>
                    <p
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      Engine
                    </p>
                    <h4
                      style={{
                        marginLeft: "20%",
                      }}
                    >
                      1956 CC
                    </h4>
                  </Row>
                </Col>
              </Row>

              <Row className="closer">
                <h2>View all Specifications</h2>
                &nbsp;&nbsp;
                <img
                  src="	https://stimg.cardekho.com/pwa/img/ucrN/redcircleDown.svg"
                  alt="down"
                  style={{
                    marginTop: "-5px",
                  }}
                />
              </Row>
              <img
                style={{
                  height: "100%",
                  width: "38%",
                }}
                src={Sec3}
                alt="sec3"
              />
            </div>

            <div className="gallery-grid">
              <h1
                style={{
                  fontWeight: "bold",
                }}
              >
                Gallery Experience
              </h1>

              <div className="car-grid">
                <img src={Special} alt="car" />
                <img src={Special} alt="car" />
                <img src={Special} alt="car" />
              </div>
              <div className="car-grid">
                <img src={Special} alt="car" />
                <img src={Special} alt="car" />
                <img src={Special} alt="car" />
              </div>
            </div>

            <div className="carDekho">
              <img
                style={{
                  width: "100%",
                }}
                src={Cardekho}
                alt="cardekho"
              />
            </div>

            <div className="out-section">
              <h1
                style={{
                  fontWeight: "bold",
                }}
              >
                Recommended used cars
              </h1>
              <p
                style={{
                  opacity: 0.8,
                  fontSize: "12px",
                  marginTop: "-10px",
                }}
              >
                Showing 26 more cars you might like
              </p>

              <div className="cars-card">
                {DetailsCars.map((c) => {
                  return (
                    <>
                      <div className="car-card">
                        <img src={c.image} alt="car" />
                        <div className="car-card-details">
                          <Row>
                            <h3
                              style={{
                                fontSize: "19px",
                              }}
                            >
                              {c.title}
                            </h3>
                            <span
                              style={{
                                marginTop: "5px",
                              }}
                            >
                              <MdFavoriteBorder size={20} />
                            </span>
                          </Row>

                          <Row>
                            <p
                              style={{
                                marginLeft: "5px",
                                fontSize: "12.5px",
                              }}
                            >
                              {c.kms}
                            </p>
                            <p
                              style={{
                                marginLeft: "5px",
                                fontSize: "12.5px",
                              }}
                            >
                              {c.petrol}
                            </p>
                            <p
                              style={{
                                marginLeft: "5px",
                                fontSize: "12.5px",
                              }}
                            >
                              {c.automatic}
                            </p>
                          </Row>

                          <Row className="card-assured">
                            <h1>{c.price}</h1>
                            <span
                              style={{
                                marginLeft: "5px",
                              }}
                            >
                              <img src={c.assuredImage} alt="assuredImage" />
                            </span>
                          </Row>

                          <Row>
                            <p
                              style={{
                                marginLeft: "5px",
                                fontSize: "12.5px",
                                textDecoration: "line-through",
                              }}
                            >
                              {c.cutPrice}
                            </p>
                            <div>
                              <p
                                style={{
                                  marginLeft: "8px",
                                  fontSize: "12.5px",
                                  color: "#D61789",
                                }}
                              >
                                {c.off}
                              </p>
                            </div>
                          </Row>

                          <p
                            style={{
                              marginLeft: "5px",
                              fontSize: "12.5px",
                              textDecoration: "underline",
                              opacity: 0.7,
                            }}
                          >
                            {c.EMI}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <h1>More Jeep Cars </h1>
                <MdKeyboardArrowDown size={25} />
              </Row>
              <hr />
              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <h1>More SUV Cars </h1>
                <MdKeyboardArrowDown size={25} />
              </Row>
            </div>
          </Col>

          <Col span={8}>
            <div className="single-card">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h1>2017 Jeep Compass 2.0</h1>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <img
                    src="https://stimg.cardekho.com/pwa/img/ucrN/assuredImg.svg"
                    alt="assured"
                  />
                </span>
              </Row>
              <h1>Longitude Option BSIV</h1>

              <Row>
                <p
                  style={{
                    fontSize: "13.5px",
                    opacity: 0.6,
                  }}
                >
                  86,226 kms
                </p>
                &nbsp;&nbsp;
                <p
                  style={{
                    fontSize: "13.5px",
                    opacity: 0.6,
                  }}
                >
                  Diesel
                </p>
                &nbsp;&nbsp;
                <p
                  style={{
                    fontSize: "13.5px",
                    opacity: 0.6,
                  }}
                >
                  Manual
                </p>
                &nbsp;&nbsp;
                <p
                  style={{
                    fontSize: "13.5px",
                    opacity: 0.6,
                  }}
                >
                  1st Owner
                </p>
              </Row>

              <Row className="special">
                <h1>₹ 10.03 Lakh</h1>
                <h4>View Benefits & Breakup</h4>
                <MdKeyboardArrowRight
                  style={{
                    marginTop: "16px",
                    color: "#027ce5",
                  }}
                />
              </Row>

              <Row>
                <p
                  style={{
                    marginLeft: "5px",
                    fontSize: "12.5px",
                    textDecoration: "line-through",
                  }}
                >
                  ₹ 10.22 Lakh
                </p>
                <div>
                  <p
                    style={{
                      marginLeft: "8px",
                      fontSize: "12.5px",
                      color: "#D61789",
                    }}
                  >
                    ₹19K Regular Off
                  </p>
                </div>
              </Row>

              <Row>
                <h4
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  Fixed Price guarantee
                </h4>
                &nbsp;&nbsp;
                <h4
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  EMI starts @ ₹24,895 /mo
                </h4>
              </Row>

              <hr />

              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <MdHome
                    style={{
                      marginTop: "5px",
                    }}
                  />
                  &nbsp;
                  <p>
                    Home Test Drive{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Available
                    </span>
                  </p>
                </div>

                <p
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  <img
                    src="https://stimg.cardekho.com/pwa/img/UCdetail/StarY.svg"
                    alt="star"
                    style={{
                      marginRight: "3px",
                      marginTop: "-2px",
                    }}
                  />
                  9 Inspection
                </p>
              </Row>

              <Row
                style={{
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#F75D34",
                    color: "#fff",
                    padding: "14px 18px",
                    border: "#F75D34",
                    borderRadius: "7px",
                    width: "40%",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  Book Test Drive
                </button>
                &nbsp; &nbsp; &nbsp;
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "14px 18px",
                    border: "1px solid #F75D34",
                    borderRadius: "7px",
                    width: "40%",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  See Seller Details
                </button>
              </Row>

              <div
                className="icons-grid"
                style={{
                  marginTop: "20px",
                }}
              >
                <Row
                  style={{
                    justifyContent: "space-evenly",
                  }}
                >
                  <div>
                    <img
                      src="https://stimg.cardekho.com/used-cars/common/icons/zero_accident_car.svg"
                      alt="svg"
                    />
                    <div>
                      <h3>Zero</h3>
                      <p>Accident Car</p>
                    </div>
                  </div>

                  <div>
                    <img
                      src="https://stimg.cardekho.com/used-cars/common/icons/6_months_warranty.svg"
                      alt="svg"
                    />
                    <div>
                      <h3>6 Months</h3>
                      <p>Warranty</p>
                    </div>
                  </div>

                  <div>
                    <img
                      src="	https://stimg.cardekho.com/used-cars/common/icons/7dayBackMoney.svg"
                      alt="svg"
                    />
                    <div>
                      <h3>7 Day</h3>
                      <p>Money Back</p>
                    </div>
                  </div>
                </Row>
              </div>
            </div>

            <Row
              style={{
                marginTop: "20px",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <MdFavoriteBorder
                  size={16}
                  style={{
                    marginTop: "2px",
                  }}
                />
                &nbsp;
                <p
                  style={{
                    opacity: 0.8,
                    textDecoration: "underline",
                  }}
                >
                  Shortlist
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                }}
              >
                <img
                  src="https://stimg.cardekho.com/pwa/img/UCdetailNew/whatsappImg.svg"
                  alt="whatsapp"
                  style={{
                    marginTop: "-10px",
                  }}
                />
                &nbsp;
                <p
                  style={{
                    opacity: 0.8,
                  }}
                >
                  Send this car to whatsapp
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
      <End />
    </section>
  );
};

export default CarDetails;
