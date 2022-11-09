import "./about.css";
import React from "react";
import { Col, Row } from "antd";
import Logo from "../../images/Logo.webp";
import Logo2 from "../../images/Logo2.png";
import Logo3 from "../../images/Logo3.png";
import End from "../../components/end/End";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="heading">
          <h1
            style={{
              fontWeight: "bold",
            }}
          >
            About Us
          </h1>
          <h3
            style={{
              textAlign: "justify",
            }}
          >
            Since 1926, Car Dekho has been one of the best-known names in the
            auto industry. Today, cardekho.com extends the tradition, with
            trusted values and a reputation for innovation, including resources
            to help you research, price and shop for the car you've been looking
            for.
          </h3>
        </div>

        <Row className="about-row">
          <Col span={8}>
            <img src={Logo} alt="logo" />
          </Col>
          <Col span={16}>
            <h1>Fair Purchase Price</h1>
            <p>
              See what you can expect to pay for a new or used car based on what
              others have paid.
            </p>
            <h6>Learn more</h6>
          </Col>
        </Row>
        <hr className="hr" />
        <Row className="about-row">
          <Col span={8}>
            <img src={Logo2} alt="logo" />
          </Col>
          <Col span={16}>
            <h1>5-Year Cost to Own</h1>
            <p>
              Compare cars by what they really cost to own and operate –
              including fuel, maintenance, depreciation and more.
            </p>
            <h6>Learn more</h6>
          </Col>
        </Row>
        <hr className="hr" />
        <Row className="about-row">
          <Col span={8}>
            <img src={Logo3} alt="logo" />
          </Col>
          <Col span={16}>
            <h1>Expert Reviews</h1>
            <p>
              Compare cars by what they really cost to own and operate –
              including fuel, maintenance, depreciation and more.
            </p>
            <h6>Explore reviews</h6>
          </Col>
        </Row>
        <hr className="hr" />
        <Row className="about-row">
          <Col span={8}></Col>
          <Col span={16}>
            <h1>Your One-Stop Resource</h1>
            <p>
              KBB.com gives you everything you need to research a new or used
              car, compare cars, find cars for sale and make a well-informed
              decision.
            </p>
            <h6>Learn more about the history of Kelley Blue Book</h6>
            <button className="btn-primary">Get Started</button>
          </Col>
        </Row>
      </div>
      <End />
    </section>
  );
};

export default About;
