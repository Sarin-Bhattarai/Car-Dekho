import React from "react";
import "./advertise.css";
import { Col, Row } from "antd";
import svg1 from "../../icons/1.svg";
import svg1d2 from "../../icons/1-2.svg";
import svg1d3 from "../../icons/1-3.svg";
import svg1d4 from "../../icons/1-4.svg";
import svg1d5 from "../../icons/1-5.svg";
import svg1d7 from "../../icons/1-7.svg";
import svg2 from "../../icons/2.svg";
import svg3 from "../../icons/3.svg";
import svg4 from "../../icons/4.svg";
import svg5 from "../../icons/5.svg";
import Loop from "../../icons/theLoop.svg";
import LoopBanner from "../../icons/loopBanner.svg";
import Compact from "../../icons/compact-suv.svg";
import Tips from "../../icons/tips.svg";
import Articles from "../../icons/articles.svg";
import Visuals from "../../icons/visuals.svg";
import Video from "../../icons/video.svg";
import Ampli from "../../icons/amp.svg";
import LoopC from "../../icons/loopC.svg";
import LoopC2 from "../../icons/loopC-2.svg";
import LoopC3 from "../../icons/loopC-3.svg";
import Mobile from "../../icons/mbl.svg";
import Next from "../../icons/next.png";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Bmw from "../../images/bmw.webp";
import Ford from "../../images/ford.webp";
import Good from "../../images/good.png";
import List from "../../images/list.png";
import End from "../../components/end/End";
import Outreach from "../../images/outreach.svg";
import Counting from "../../components/counting/Counting";

const Advertise = () => {
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
    <section className="advertise">
      <div className="container">
        <Row className="first-section" gutter={55}>
          <Col span={10}>
            <Fade left>
              <h1>Grow Your Business with us</h1>
              <p>
                As the foremost auto-tech company in India, we host 35 Million+
                in-market audiences on monthly basis
              </p>
              <button className="btn-primary">Know More</button>
            </Fade>
          </Col>

          <Col span={14}>
            <Fade right>
              <Row className="adv-card-row">
                <div className="adv-card">
                  <img src={svg1} alt="svg" />
                  <h4>CarDekho</h4>
                </div>
                <div className="adv-card">
                  <img src={svg1} alt="svg" />
                  <h4>Gaadi</h4>
                </div>
                <div className="adv-card">
                  <img src={svg1d2} alt="svg" />
                  <h4>Zigwheels</h4>
                </div>
                <div className="adv-card">
                  <img src={svg1d3} alt="svg" />
                  <h4>BikeDekho</h4>
                </div>
              </Row>
              <Row className="adv-card-row">
                <div className="adv-card">
                  <img src={svg1} alt="svg" />
                  <h4>OTO</h4>
                </div>
                <div className="adv-card">
                  <img src={svg1d4} alt="svg" />
                  <h4>PriceDekho</h4>
                </div>
                <div className="adv-card">
                  <img src={svg1d5} alt="svg" />
                  <h4>TyreDekho</h4>
                </div>
                <div className="adv-card">
                  <img src={svg1d7} alt="svg" />
                  <h4>Power Drift</h4>
                </div>
              </Row>
            </Fade>
          </Col>
        </Row>

        <div className="second-section">
          <h1>Growth facts</h1>
          <Row
            style={{
              justifyContent: "space-between",
              marginTop: "7%",
            }}
          >
            <Counting icon={<img src={svg2} alt="svg" />} number={2330}>
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "-20px",
                  fontWeight: "400",
                }}
              >
                Monthly Unique Users
              </h2>
              <p
                style={{
                  textAlign: "center",
                  opacity: 0.6,
                }}
              >
                (Data Source - Comscore)
              </p>
            </Counting>
            <Counting icon={<img src={svg3} alt="svg" />} number={4200}>
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "-20px",
                  fontWeight: "400",
                }}
              >
                Monthly Used Car Sales
              </h2>
            </Counting>
            <Counting icon={<img src={svg4} alt="svg" />} number={3230}>
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "-20px",
                  fontWeight: "400",
                }}
              >
                Leads generated Monthly
              </h2>
            </Counting>
            <Counting icon={<img src={svg5} alt="svg" />} number={2100}>
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "-20px",
                  fontWeight: "400",
                }}
              >
                New Car sold Monthly
              </h2>
            </Counting>
          </Row>
        </div>

        <Row className="third-section" gutter={55}>
          <Col span={12}>
            <Fade left>
              <h1>Digital Presence & Market Outreach</h1>
              <p>
                We work with some of the largest Auto-OEM's in the country to
                promote brands, enable sales, and assist with customer
                intelligence. Our work with media agencies enable brand
                awareness campaigns, digital launches, and transaction focussed
                booking engines. We also work with dealerships across the
                country to enable bookings, lead qualification, and customer
                support.
              </p>

              <ul>
                <li>Media Formats & Roadblocks</li>
                <li>Content</li>
                <li>Girnar Premium Audience</li>
                <li>Online Booking</li>
                <li>Technology Solutions</li>
              </ul>

              <button className="btn-primary">Know More</button>
            </Fade>
          </Col>

          <Col span={12}>
            <Fade right>
              <img src={Outreach} alt="outreach" />
            </Fade>
          </Col>
        </Row>

        <div className="fourth-section">
          <h1>Brands we've worked with</h1>
          <div className="multi-crousel-2">
            <Rotate top left>
              <Carousel responsive={responsive}>
                <div className="single-card-3">
                  <img src={Ford} alt="selling" />
                </div>
                <div className="single-card-3">
                  <img src={Bmw} alt="selling" />
                </div>
                <div className="single-card-3">
                  <img src={Ford} alt="selling" />
                </div>
                <div className="single-card-3">
                  <img src={Bmw} alt="selling" />
                </div>
                <div className="single-card-3">
                  <img src={Ford} alt="selling" />
                </div>
                <div className="single-card-3">
                  <img src={Bmw} alt="selling" />
                </div>
              </Carousel>
            </Rotate>
          </div>
        </div>

        <div className="fifth-section">
          <h1>Analytics and Market Research</h1>
          <div className="goodNews">
            <img
              style={{
                width: "48%",
                height: "60%",
              }}
              src={Good}
              alt="goodNews"
            />
          </div>
          <div className="multi-crousel-3">
            <Fade top>
              <Carousel responsive={responsive}>
                <div className="single-card-3">
                  <h2>SUV-COMPACT SUV</h2>
                  <img src={Compact} alt="compact-suv" />
                </div>
                <div className="single-card-3">
                  <h2>SUV-COMPACT SUV</h2>
                  <img src={Compact} alt="compact-suv" />
                </div>
                <div className="single-card-3">
                  <h2>SUV-COMPACT SUV</h2>
                  <img src={Compact} alt="compact-suv" />
                </div>
                <div className="single-card-3">
                  <h2>SUV-COMPACT SUV</h2>
                  <img src={Compact} alt="compact-suv" />
                </div>
                <div className="single-card-3">
                  <h2>SUV-COMPACT SUV</h2>
                  <img src={Compact} alt="compact-suv" />
                </div>
                <div className="single-card-3">
                  <h2>SUV-COMPACT SUV</h2>
                  <img src={Compact} alt="compact-suv" />
                </div>
              </Carousel>
            </Fade>
          </div>
        </div>

        <div className="gap-card">
          <Row>
            <Col span={6}>
              <img src={Tips} alt="tips" />
            </Col>
            <Col span={18}>
              <div>
                <h1>Key Findings Of The Survey</h1>
                <p>
                  Consumers are predicted to alter their ways of buying a car.
                  They will be attracted by heavy discounts, cashbacks &
                  intriguing finance schemes to shift their attention towards
                  online buying channels. Online used car evaluations are
                  becoming more normal.
                </p>
                <button className="btn-primary">Check Research Insights</button>
              </div>
            </Col>
          </Row>
        </div>

        <Row className="sixth-section" gutter={55}>
          <Col span={12}>
            <img src={Loop} alt="loop" />
            <p>
              The Loop helps brands synchronize their creative workflow by
              devising strategies, creating assets and amplifying their presence
              to make them noticed.
            </p>
            <button className="btn-primary">Contact Us</button>
          </Col>

          <Col span={12}>
            <Fade right>
              <img src={LoopBanner} alt="loopBanner" />
            </Fade>
          </Col>
        </Row>

        <div className="imp-msg">
          <Fade top>
            <Row gutter={52}>
              <Col span={6}>
                <img src={Articles} alt="svg" />
                <h4>Contextual Articles</h4>
                <p>
                  Through engaging literature and immersive articles, we enlist
                  our experienced team to magnify the brand.
                </p>
              </Col>
              <Col span={6}>
                <img src={Visuals} alt="svg" />
                <h4>Contextual Articles</h4>
                <p>
                  Through engaging literature and immersive articles, we enlist
                  our experienced team to magnify the brand.
                </p>
              </Col>
              <Col span={6}>
                <img src={Video} alt="svg" />
                <h4>Contextual Articles</h4>
                <p>
                  Through engaging literature and immersive articles, we enlist
                  our experienced team to magnify the brand.
                </p>
              </Col>
              <Col span={6}>
                <img src={Ampli} alt="svg" />
                <h4>Contextual Articles</h4>
                <p>
                  Through engaging literature and immersive articles, we enlist
                  our experienced team to magnify the brand.
                </p>
              </Col>
            </Row>
          </Fade>
        </div>

        <div className="seventh-section">
          <h1>The Loop & 3C’s Approach</h1>
          <p>The Loop helps brands synchronize their creative workflow</p>

          <div className="close-image">
            <div className="loop-grid">
              <div>
                <img src={LoopC} alt="loop-c" />
                <h2>Conceptualize</h2>
                <p>
                  Lorem ipsum dolor, sit amet con asp elit. Lorem ipsum dolor,
                  sit amet con asp elit. Lorem ipsum dolor, sit amet con asp
                  elit.
                </p>
              </div>

              <div>
                <img src={Next} alt="next" />
              </div>

              <div>
                <img src={LoopC2} alt="loop-c" />
                <h2>Conceptualize</h2>
                <p>
                  Lorem ipsum dolor, sit amet con asp elit. Lorem ipsum dolor,
                  sit amet con asp elit. Lorem ipsum dolor, sit amet con asp
                  elit.
                </p>
              </div>
              <div>
                <img src={Next} alt="next" />
              </div>
              <div>
                <img src={LoopC3} alt="loop-c" />
                <h2>Conceptualize</h2>
                <p>
                  Lorem ipsum dolor, sit amet con asp elit. Lorem ipsum dolor,
                  sit amet con asp elit. Lorem ipsum dolor, sit amet con asp
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Row className="eighth-section" gutter={55}>
          <Col span={12}>
            <Fade top>
              <h1>Batteries & Lubricants Services</h1>
              <p>
                To help search for the right battery for its users,
                BatteryDekho.com has linked itself with 10K dealers in 200
                cities for a greater reach and so on.
              </p>

              <div className="img-list">
                <img
                  style={{
                    width: "80%",
                    height: "450px",
                  }}
                  src={List}
                  alt="list"
                />
              </div>
            </Fade>
          </Col>

          <Col span={12}>
            <Fade right>
              <img src={Mobile} alt="mbl" />
            </Fade>
          </Col>
        </Row>

        <div className="wrapper">
          <h1>Interested? Grow your Business with us now</h1>
          <p>
            A one stop solution for all support channels, run by an expert &
            skilled team from the industry
          </p>
          <button className="btn-primary">Contact Us</button>
        </div>
      </div>
      <End />
    </section>
  );
};

export default Advertise;
