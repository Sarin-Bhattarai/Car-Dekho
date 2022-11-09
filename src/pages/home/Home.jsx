import React from "react";
import "./home.css";
import { Row, Radio } from "antd";
import { MdArrowRightAlt } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Selling from "../../images/caru.jpg";
import End from "../../components/end/End";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="home">
      <div className="banner">
        <div className="home-search">
          <h1>Find your right car</h1>

          <Row>
            <button
              style={{
                backgroundColor: "#24272C",
                color: "#fff",
                padding: "10px 10px",
                border: "#24272C",
                borderRadius: "5px",
                width: "48%",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              New Car
            </button>
            &nbsp;
            <button
              style={{
                backgroundColor: "#fff",
                color: "black",
                padding: "10px 10px",
                border: "1px solid gray",
                borderRadius: "5px",
                width: "48%",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Used Car
            </button>
          </Row>

          <Row
            style={{
              marginTop: "20px",
            }}
          >
            <Radio>By Budget</Radio>
            <Radio>By Brand</Radio>
          </Row>

          <div className="select">
            <select
              style={{
                width: "100%",
                height: "45px",
                border: "1px solid #d3d3d3",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <option>Select Budget</option>
              <option>Jack</option>
              <option>Lucy</option>
            </select>
            <select
              style={{
                width: "100%",
                height: "45px",
                border: "1px solid #d3d3d3",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <option>All vehicles Type</option>
              <option>Jack</option>
              <option>Lucy</option>
            </select>
          </div>
          <button
            style={{
              backgroundColor: "#F75D34",
              color: "#fff",
              padding: "14px 14px",
              border: "#F75D34",
              borderRadius: "7px",
              width: "100%",
              fontWeight: "bold",
              marginTop: "30px",
              cursor: "pointer",
            }}
          >
            Search
          </button>

          <Row className="arrow">
            <h4>Advanced Search</h4>
            <MdArrowRightAlt
              style={{
                opacity: "0.7",
              }}
              size={25}
            />
          </Row>
        </div>
      </div>

      <div className="container-2">
        <div className="sponsor-card">
          <div className="heading">
            <h1
              style={{
                fontWeight: "600",
              }}
            >
              The most searched cars
            </h1>
          </div>

          <Row>
            <h4
              style={{
                borderBottom: "3px solid #F75D5B",
                color: "#F75D5B",
              }}
            >
              Hatchback
            </h4>
            <h4>Sedan</h4>
            <h4>SUV</h4>
            <h4>MUV</h4>
            <h4>Luxury</h4>
          </Row>
          <hr className="hr" />

          <div className="multi-crousel">
            <Carousel responsive={responsive}>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
            </Carousel>
          </div>

          <hr
            style={{
              marginTop: "20px",
            }}
            className="hr"
          />

          <h3
            style={{
              float: "inline-end",
              color: "#2176AE",
              fontWeight: "600",
            }}
          >
            View All Hatchback Cars
          </h3>
        </div>

        <div
          className="sponsor-card"
          style={{
            marginTop: "8%",
          }}
        >
          <div className="heading">
            <h1
              style={{
                fontWeight: "600",
              }}
            >
              Latest Cars
            </h1>
          </div>

          <div className="multi-crousel">
            <Carousel responsive={responsive}>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
            </Carousel>
          </div>

          <hr
            style={{
              marginTop: "20px",
            }}
            className="hr"
          />

          <h3
            style={{
              float: "inline-end",
              color: "#2176AE",
              fontWeight: "600",
            }}
          >
            View All Latest Cars
          </h3>
        </div>

        <div
          className="sponsor-card"
          style={{
            marginTop: "8%",
          }}
        >
          <div className="heading">
            <h1
              style={{
                fontWeight: "600",
              }}
            >
              Upcoming Cars
            </h1>
          </div>

          <div className="multi-crousel">
            <Carousel responsive={responsive}>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
              <div className="single-card-2">
                <img src={Selling} alt="selling" />
                <h2>Renault KWID</h2>
                <h2>Rs 4.64 - 5.99 Lakh*</h2>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#F75D34",
                    padding: "10px 10px",
                    border: "1px solid #F75D34",
                    borderRadius: "3px",
                    width: "90%",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Check November Offers
                </button>
              </div>
            </Carousel>
          </div>

          <hr
            style={{
              marginTop: "20px",
            }}
            className="hr"
          />

          <h3
            style={{
              float: "inline-end",
              color: "#2176AE",
              fontWeight: "600",
            }}
          >
            View All Upcoming Cars
          </h3>
        </div>
      </div>
      <End />
    </section>
  );
};

export default Home;
