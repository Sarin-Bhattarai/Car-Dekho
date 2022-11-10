import "./career.css";
import React from "react";
import { Row, Select } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import firstImage from "../../images/firstImage.webp";
import secondImage from "../../images/secondImage.webp";
import thirdImage from "../../images/thirdImage.jfif";
import End from "../../components/end/End";

const Career = () => {
  return (
    <section className="career">
      <div className="support-heading">
        <h1>
          Let’s start something
          <br /> big together!
        </h1>
        <button
          style={{
            width: "15%",
            borderRadius: "10px",
          }}
          className="btn-primary"
        >
          <Row
            style={{
              marginTop: "8px",
              marginLeft: "45px",
            }}
          >
            <span>Join Our Team</span>
            <span>
              <MdKeyboardArrowDown size={20} />
            </span>
          </Row>
        </button>
      </div>

      <div className="image-grid">
        <div className="first-image">
          <img src={firstImage} alt="grid-img" />
        </div>
        <div className="second-image">
          <img src={secondImage} alt="grid-img" />
        </div>
        <div className="third-image">
          <img src={thirdImage} alt="grid-img" />
        </div>
      </div>

      <div
        style={{
          marginTop: "10%",
        }}
        className="support-heading"
      >
        <h1>Current Openings</h1>
        <p>
          We're always looking for great folks to join us on our mission. If you
          want to be
          <br /> a part of our story, apply today.
        </p>
      </div>

      <div
        style={{
          marginTop: "5%",
        }}
        className="container"
      >
        <Row>
          <select
            style={{
              width: "20%",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #d3d3d3",
              cursor: "pointer",
            }}
          >
            <option>Filter by City(s)</option>
            <option>Agra</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            style={{
              width: "20%",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #d3d3d3",
              cursor: "pointer",
            }}
          >
            <option>Filter by Department(s)</option>
            <option>Agra</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            style={{
              width: "20%",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #d3d3d3",
              cursor: "pointer",
            }}
          >
            <option>Filter by Role(s)</option>
            <option>Agra</option>
          </select>
        </Row>
      </div>

      <div className="container">
        <div className="emp-card">
          <Row
            style={{
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1>Business Manager</h1>
              <h6>On Roll&nbsp; | &nbsp;1-2 years</h6>
            </div>
            <div>
              <p>Business Manager</p>
            </div>
            <div>
              <p>Hisar</p>
            </div>
            <div>
              <h5>Apply Now</h5>
            </div>
          </Row>
        </div>
        <div className="emp-card">
          <Row
            style={{
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1>Business Manager</h1>
              <h6>On Roll&nbsp; | &nbsp;1-2 years</h6>
            </div>
            <div>
              <p>Business Manager</p>
            </div>
            <div>
              <p>Hisar</p>
            </div>
            <div>
              <h5>Apply Now</h5>
            </div>
          </Row>
        </div>
        <div className="emp-card">
          <Row
            style={{
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1>Business Manager</h1>
              <h6>On Roll&nbsp; | &nbsp;1-2 years</h6>
            </div>
            <div>
              <p>Business Manager</p>
            </div>
            <div>
              <p>Hisar</p>
            </div>
            <div>
              <h5>Apply Now</h5>
            </div>
          </Row>
        </div>
        <div className="emp-card">
          <Row
            style={{
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1>Business Manager</h1>
              <h6>On Roll&nbsp; | &nbsp;1-2 years</h6>
            </div>
            <div>
              <p>Business Manager</p>
            </div>
            <div>
              <p>Hisar</p>
            </div>
            <div>
              <h5>Apply Now</h5>
            </div>
          </Row>
        </div>
        <div className="emp-card">
          <Row
            style={{
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1>Business Manager</h1>
              <h6>On Roll&nbsp; | &nbsp;1-2 years</h6>
            </div>
            <div>
              <p>Business Manager</p>
            </div>
            <div>
              <p>Hisar</p>
            </div>
            <div>
              <h5>Apply Now</h5>
            </div>
          </Row>
        </div>
      </div>
      <End />
    </section>
  );
};

export default Career;
