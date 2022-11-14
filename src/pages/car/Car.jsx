import React from "react";
import "./car.css";
import { Col, Row, Switch, Slider, Checkbox, Input, Card } from "antd";
import {
  MdSyncAlt,
  MdFavoriteBorder,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import List from "../../images/Akshay-1.png";
import List2 from "../../images/Akshay-2.png";
import List3 from "../../images/Akshay-3.png";
import Cars from "./carData";
import { useNavigate } from "react-router-dom";
import Currated from "../../images/currated.png";
import End from "../../components/end/End";

const Car = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const { Search } = Input;

  const marks = {
    0: {
      style: {
        color: "#f50",
        fontSize: "11px",
      },
      label: <strong>₹ 0</strong>,
    },
    100: {
      style: {
        color: "#f50",
        fontSize: "11px",
      },
      label: <strong>₹ 500000</strong>,
    },
  };

  const marks2 = {
    1: {
      style: {
        color: "#f50",
        fontSize: "11px",
      },
      label: <strong>1</strong>,
    },
    100: {
      style: {
        color: "#f50",
        fontSize: "11px",
      },
      label: <strong>100</strong>,
    },
  };
  const navigate = useNavigate();
  return (
    <section className="car">
      <div className="main-container">
        <Row gutter={52}>
          <Col span={6}>
            <div className="collapse">
              <Row
                style={{
                  marginLeft: "10px",
                }}
              >
                <span
                  style={{
                    marginTop: "2px",
                  }}
                >
                  <MdSyncAlt size={16} />
                </span>
                &nbsp;
                <h1>COLLAPSE ALL FILTERS</h1>
              </Row>
            </div>
            <div className="assured">
              <Row
                style={{
                  marginLeft: "10px",
                }}
              >
                <h1>CarDekho</h1>
                <span
                  style={{
                    marginTop: "-1px",
                    marginLeft: "5px",
                  }}
                >
                  <img
                    src="https://stimg.cardekho.com/pwa/img/ucrN/assuredUc.svg"
                    alt="assured"
                  />
                </span>
              </Row>

              <div className="icons-grid">
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

              <div className="switch">
                <Row
                  style={{
                    marginLeft: "15px",
                    marginTop: "10px",
                  }}
                >
                  <Switch size="small" defaultChecked onChange={onChange} />
                  <span
                    style={{
                      marginLeft: "17px",
                      marginTop: "-3px",
                    }}
                  >
                    <h3>View All Assured Cars</h3>
                  </span>
                </Row>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Budget</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="slider">
                <Slider
                  style={{
                    width: "90%",
                    marginLeft: "10px",
                  }}
                  marks={marks}
                />
              </div>
              <h3
                style={{
                  marginLeft: "5px",
                  marginTop: "5px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                What is your price range?
              </h3>

              <div className="checkbox">
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>0-2 Lakh</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>2-3 Lakh</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>3-5 Lakh</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>5-8 Lakh</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>8-10 Lakh</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Above 10 Lakh</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Brand + Model</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="search">
                <Search placeholder="Search brand or model" />
              </div>

              <div className="car-category">
                <p>POPULAR</p>
                <div className="car-checkbox">
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                </div>
              </div>

              <div className="car-category">
                <p>Others</p>
                <div className="car-checkbox">
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox>Hyundai</Checkbox>
                    <Row>
                      <h4
                        style={{
                          marginRight: "50px",
                        }}
                      >
                        223
                      </h4>
                      <span>
                        <MdKeyboardArrowDown size={25} />
                      </span>
                    </Row>
                  </Row>
                </div>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Discount</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="checkbox">
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Upto ₹ 20,000</Checkbox>
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Upto ₹ 20,000</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Upto ₹ 20,000</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Upto ₹ 20,000</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Upto ₹ 20,000</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Upto ₹ 20,000</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Fuel Type</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="checkbox">
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Petrol</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Diesel</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>CNG</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Seats</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="checkbox">
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>4 Seater</Checkbox>
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>5 Seater</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>6 Seater</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>7 Seater</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>8 Seater</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>9 Seater</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Body Type</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="checkbox">
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>SUV</Checkbox>
                    <img
                      src="https://stimg.cardekho.com/pwa/img/ucrN/suv.png"
                      alt="car"
                    />
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>SUV</Checkbox>
                    <img
                      src="https://stimg.cardekho.com/pwa/img/ucrN/suv.png"
                      alt="car"
                    />
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>SUV</Checkbox>
                    <img
                      src="https://stimg.cardekho.com/pwa/img/ucrN/suv.png"
                      alt="car"
                    />
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>SUV</Checkbox>
                    <img
                      src="https://stimg.cardekho.com/pwa/img/ucrN/suv.png"
                      alt="car"
                    />
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>SUV</Checkbox>
                    <img
                      src="https://stimg.cardekho.com/pwa/img/ucrN/suv.png"
                      alt="car"
                    />
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>SUV</Checkbox>
                    <img
                      src="https://stimg.cardekho.com/pwa/img/ucrN/suv.png"
                      alt="car"
                    />
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>SUV</Checkbox>
                    <img
                      src="https://stimg.cardekho.com/pwa/img/ucrN/suv.png"
                      alt="car"
                    />
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Transmission</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="checkbox">
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Manual</Checkbox>
                  </div>
                  <div>
                    <p>755</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Automatic</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Model Year</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="slider">
                <Slider
                  style={{
                    width: "90%",
                    marginLeft: "10px",
                  }}
                  marks={marks2}
                />
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Ownership</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="checkbox">
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>First Owner</Checkbox>
                  </div>
                  <div>
                    <p>755</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Second Owner</Checkbox>
                  </div>
                  <div>
                    <p>261</p>
                  </div>
                </Row>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>RTO</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="checkbox">
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Gujarat</Checkbox>
                  </div>
                  <div>
                    <p>23</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Gujarat</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Gujarat</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Gujarat</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Gujarat</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Checkbox>Gujarat</Checkbox>
                  </div>
                  <div>
                    <p>80</p>
                  </div>
                </Row>
              </div>
            </div>

            <div className="budget">
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <h2>Kilometer Driven</h2>
                <span
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      height: "20px",
                    }}
                    size={18}
                  />
                </span>
              </Row>

              <div className="slider">
                <Slider
                  style={{
                    width: "90%",
                    marginLeft: "10px",
                  }}
                  marks={marks2}
                />
              </div>
            </div>
          </Col>
          <Col span={18}>
            <div className="heading">
              <h1>903 Second Hand Cars in Ahmedabad</h1>
              <p>
                There are 65 certified second-hand cars in Ahmedabad currently
                available for sale of brands like Maruti, Hyundai, Honda,
                Toyota, Mahindra. Used/Old cars price start from Rs 48,000 in
                Ahmedabad.The most popular used cars are in Ahmedabad Hyundai
                Verna (Rs. 1.50 Lakh - 13.50 Lakh), Honda City (Rs. 1.40 Lakh -
                12.99) <a href=" ">...Read more</a>
              </p>
            </div>

            <div className="image-cards">
              <div>
                <img src={List} alt="List" />
              </div>
              <div>
                <img src={List2} alt="List" />
              </div>
              <div>
                <img src={List3} alt="List" />
              </div>
            </div>

            <div className="list-category">
              <Row
                style={{
                  justifyContent: "space-evenly",
                }}
              >
                <h1>Assured Cars</h1>
                <h1>Budget Cars</h1>
                <h1>Popular Cars</h1>
                <h1>Luxury Cars</h1>
                <h1>Partner Cars</h1>
              </Row>
            </div>

            <div className="cars-card" onClick={() => navigate(`/cars/detail`)}>
              {Cars.map((c) => {
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

            <div className="separator">
              <h1>Choose your budget</h1>
              <Row>
                <div className="separator-card">
                  <p>0-2 Lakh</p>
                </div>
                <div className="separator-card">
                  <p>2-3 Lakh</p>
                </div>
                <div className="separator-card">
                  <p>3-5 Lakh</p>
                </div>
                <div className="separator-card">
                  <p>5-8 Lakh</p>
                </div>
                <div className="separator-card">
                  <p>8-10 Lakh</p>
                </div>
                <div className="separator-card">
                  <p>10+ Lakh</p>
                </div>
              </Row>
            </div>

            <div className="cars-card" onClick={() => navigate(`/cars/detail`)}>
              {Cars.map((c) => {
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

            <div className="separator">
              <h1>Nearby Location</h1>
              <Row>
                <div className="separator-card">
                  <p>Mumbai</p>
                </div>
                <div className="separator-card">
                  <p>Thane</p>
                </div>
                <div className="separator-card">
                  <p>Surat</p>
                </div>
                <div className="separator-card">
                  <p>Vadodara</p>
                </div>
                <div className="separator-card">
                  <p>Mira Road</p>
                </div>
                <div className="separator-card">
                  <p>Udaipur</p>
                </div>
                <div className="separator-card">
                  <p>Panvel</p>
                </div>
              </Row>
            </div>

            <div className="cars-card" onClick={() => navigate(`/cars/detail`)}>
              {Cars.map((c) => {
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

            <div className="seprator">
              <img
                style={{
                  width: "100%",
                }}
                src={Currated}
                alt="separator"
              />
            </div>

            <div className="cars-card" onClick={() => navigate(`/cars/detail`)}>
              {Cars.map((c) => {
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
          </Col>
        </Row>
      </div>
      <End />
    </section>
  );
};

export default Car;
