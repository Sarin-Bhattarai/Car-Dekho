import { Row } from "antd";
import React from "react";
import "./care.css";
import Merce from "../../images/merce.webp";
import Maruti from "../../images/maruti.webp";
import End from "../../components/end/End";

const Care = () => {
  return (
    <section className="care">
      <div className="main-container">
        <div className="heading">
          <h1
            style={{
              fontSize: "22px",
            }}
          >
            Cars in India Customer Service and Customer Care Numbers
          </h1>
          <select
            style={{
              width: "25%",
              padding: "10px",
              border: "1px solid #d3d3d3",
              cursor: "pointer",
            }}
          >
            <option>Change Brand</option>
            <option>Ford</option>
          </select>
        </div>

        <div
          className="sponsor-card"
          style={{
            marginTop: "2%",
          }}
        >
          <div className="heading">
            <h1
              style={{
                fontWeight: "600",
              }}
            >
              Customer Care Contacts
            </h1>
          </div>

          <div className="multi-crousel">
            <Row
              style={{
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>Maruti</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
            </Row>
            <Row
              style={{
                justifyContent: "space-between",
              }}
            >
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
              <div className="care-card">
                <img src={Maruti} alt="svg" />
                <h4>CarDekho</h4>
              </div>
            </Row>
          </div>

          <hr
            style={{
              marginTop: "20px",
            }}
            className="hr"
          />

          <h3
            style={{
              color: "#2176AE",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            View All Brands
          </h3>
        </div>

        <div
          className="sponsor-card"
          style={{
            marginTop: "2%",
          }}
        >
          <div className="heading">
            <h1
              style={{
                fontWeight: "600",
              }}
            >
              Quick Tools
            </h1>
          </div>

          <div className="multi-crousel">
            <Row
              style={{
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div className="care-card-2">
                <img src={Merce} alt="svg" />
                <h4>Videos</h4>
              </div>
              <div className="care-card-2">
                <img src={Merce} alt="svg" />
                <h4>User Reviews</h4>
              </div>
              <div className="care-card-2">
                <img src={Merce} alt="svg" />
                <h4>Loan</h4>
              </div>
              <div className="care-card-2">
                <img src={Merce} alt="svg" />
                <h4>Insurance</h4>
              </div>
              <div className="care-card-2">
                <img src={Merce} alt="svg" />
                <h4>Service Centers</h4>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <End />
    </section>
  );
};

export default Care;
