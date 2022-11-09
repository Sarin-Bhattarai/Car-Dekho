import React from "react";
import "./end.css";
import { Row } from "antd";
import { FiAward } from "react-icons/fi";

const End = () => {
  return (
    <section className="end">
      <hr className="hr" />
      <Row
        style={{
          justifyContent: "space-evenly",
          padding: "10px",
          marginTop: "30px",
        }}
      >
        <Row>
          <FiAward
            style={{
              color: "#5D5F63",
              marginTop: "4px",
            }}
            size={50}
          />
          <div>
            <h1>Nepal’s #1</h1>
            <p>Largest Auto portal</p>
          </div>
        </Row>
        <Row>
          <FiAward
            style={{
              color: "#5D5F63",
              marginTop: "4px",
            }}
            size={50}
          />
          <div>
            <h1>Nepal’s #1</h1>
            <p>Largest Auto portal</p>
          </div>
        </Row>
        <Row>
          <FiAward
            style={{
              color: "#5D5F63",
              marginTop: "4px",
            }}
            size={50}
          />
          <div>
            <h1>Nepal’s #1</h1>
            <p>Largest Auto portal</p>
          </div>
        </Row>
        <Row>
          <FiAward
            style={{
              color: "#5D5F63",
              marginTop: "4px",
            }}
            size={50}
          />
          <div>
            <h1>Nepal’s #1</h1>
            <p>Largest Auto portal</p>
          </div>
        </Row>
      </Row>
      <hr className="hr" />
    </section>
  );
};

export default End;
