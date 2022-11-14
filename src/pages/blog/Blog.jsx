import React from "react";
import "./blog.css";
import { Col, Row } from "antd";
import { MdArrowRightAlt } from "react-icons/md";
import Car from "../../images/caru.jpg";
import Car2 from "../../images/caru2.jpg";
import Selling from "../../images/selling.jpg";
import Review from "../../images/review.jpeg";
import Caddliac from "../../images/cadlliac.jpg";
import Cat from "../../images/cat.jpg";
import End from "../../components/end/End";

const Blog = () => {
  return (
    <section className="blog">
      <div className="main-container">
        <div className="heading">
          <h1
            style={{
              fontWeight: "bold",
            }}
          >
            Blog Page
          </h1>
        </div>

        <Row gutter={52} className="blog-row">
          <Col span={12}>
            <Row>
              <h1>Buying a used car</h1>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <p
                style={{
                  color: "#54B2DD",
                  fontSize: "16px",
                  marginTop: "13px",
                }}
              >
                See all articles
              </p>
              &nbsp;
              <MdArrowRightAlt
                style={{
                  color: "#54B2DD",
                  marginTop: "15px",
                }}
                size={25}
              />
            </Row>

            <div className="blog-list">
              <img src={Car} alt="car" />
              <div>
                <h2>The Best Sports Cars Under $30,000 to Buy in 2022</h2>
                <h2
                  style={{
                    opacity: 0.7,
                    fontWeight: "500",
                  }}
                >
                  With less $30,000 to spend you can buy some great sports cars,
                  both new and used.
                </h2>
              </div>
            </div>
            <div className="blog-list">
              <img src={Car} alt="car" />
              <div>
                <h2>The Best Sports Cars Under $30,000 to Buy in 2022</h2>
                <h2
                  style={{
                    opacity: 0.7,
                    fontWeight: "500",
                  }}
                >
                  With less $30,000 to spend you can buy some great sports cars,
                  both new and used.
                </h2>
              </div>
            </div>
            <div className="blog-list">
              <img src={Car} alt="car" />
              <div>
                <h2>The Best Sports Cars Under $30,000 to Buy in 2022</h2>
                <h2
                  style={{
                    opacity: 0.7,
                    fontWeight: "500",
                  }}
                >
                  With less $30,000 to spend you can buy some great sports cars,
                  both new and used.
                </h2>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <Row>
              <h1>Buying a new car</h1>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <p
                style={{
                  color: "#54B2DD",
                  fontSize: "16px",
                  marginTop: "13px",
                }}
              >
                See all articles
              </p>
              &nbsp;
              <MdArrowRightAlt
                style={{
                  color: "#54B2DD",
                  marginTop: "15px",
                }}
                size={25}
              />
            </Row>

            <div className="blog-list">
              <img src={Car2} alt="car" />
              <div>
                <h2>The Best Hybrid SUVs of 2022</h2>
                <h2
                  style={{
                    opacity: 0.7,
                    fontWeight: "500",
                  }}
                >
                  With less $30,000 to spend you can buy some great sports cars,
                  both new and used.
                </h2>
              </div>
            </div>
            <div className="blog-list">
              <img src={Car2} alt="car" />
              <div>
                <h2>The Best Hybrid SUVs of 2022</h2>
                <h2
                  style={{
                    opacity: 0.7,
                    fontWeight: "500",
                  }}
                >
                  With less $30,000 to spend you can buy some great sports cars,
                  both new and used.
                </h2>
              </div>
            </div>
            <div className="blog-list">
              <img src={Car2} alt="car" />
              <div>
                <h2>The Best Hybrid SUVs of 2022</h2>
                <h2
                  style={{
                    opacity: 0.7,
                    fontWeight: "500",
                  }}
                >
                  With less $30,000 to spend you can buy some great sports cars,
                  both new and used.
                </h2>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="blog-row">
          <Col span={24}>
            <Row>
              <h1>Selling your car</h1>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <p
                style={{
                  color: "#54B2DD",
                  fontSize: "16px",
                  marginTop: "13px",
                }}
              >
                See all articles
              </p>
              &nbsp;
              <MdArrowRightAlt
                style={{
                  color: "#54B2DD",
                  marginTop: "15px",
                }}
                size={25}
              />
            </Row>

            <Row className="row-2" gutter={32}>
              <Col span={6}>
                <img src={Selling} alt="selling" />
                <h2>Arrange a safe drive and be safe</h2>
              </Col>
              <Col span={6}>
                <img src={Selling} alt="selling" />
                <h2>Arrange a safe drive and be safe</h2>
              </Col>
              <Col span={6}>
                <img src={Selling} alt="selling" />
                <h2>Arrange a safe drive and be safe</h2>
              </Col>
              <Col span={6}>
                <img src={Selling} alt="selling" />
                <h2>Arrange a safe drive and be safe</h2>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="blog-row">
          <Col span={24}>
            <Row>
              <h1>Latest expert reviews</h1>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <p
                style={{
                  color: "#54B2DD",
                  fontSize: "16px",
                  marginTop: "13px",
                }}
              >
                See all articles
              </p>
              &nbsp;
              <MdArrowRightAlt
                style={{
                  color: "#54B2DD",
                  marginTop: "15px",
                }}
                size={25}
              />
            </Row>

            <Row className="row-2" gutter={32}>
              <Col span={6}>
                <img src={Review} alt="selling" />
                <h2>2023 BMW i7 Test Drive Review</h2>
              </Col>
              <Col span={6}>
                <img src={Review} alt="selling" />
                <h2>2023 BMW i7 Test Drive Review</h2>
              </Col>
              <Col span={6}>
                <img src={Review} alt="selling" />
                <h2>2023 BMW i7 Test Drive Review</h2>
              </Col>
              <Col span={6}>
                <img src={Review} alt="selling" />
                <h2>2023 BMW i7 Test Drive Review</h2>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="blog-row">
          <Col span={24}>
            <Row>
              <h1>Previews</h1>
            </Row>

            <Row className="row-2" gutter={32}>
              <Col span={6}>
                <img src={Caddliac} alt="selling" />
                <h2>2023 Infiniti Q50 Preview</h2>
              </Col>
              <Col span={6}>
                <img src={Caddliac} alt="selling" />
                <h2>2023 Infiniti Q50 Preview</h2>
              </Col>
              <Col span={6}>
                <img src={Caddliac} alt="selling" />
                <h2>2023 Infiniti Q50 Preview</h2>
              </Col>
              <Col span={6}>
                <img src={Caddliac} alt="selling" />
                <h2>2023 Infiniti Q50 Preview</h2>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="blog-row">
          <Col span={24}>
            <Row>
              <h1>Best by category</h1>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <p
                style={{
                  color: "#54B2DD",
                  fontSize: "16px",
                  marginTop: "13px",
                }}
              >
                See all articles
              </p>
              &nbsp;
              <MdArrowRightAlt
                style={{
                  color: "#54B2DD",
                  marginTop: "15px",
                }}
                size={25}
              />
            </Row>

            <Row className="row-2" gutter={32}>
              <Col span={6}>
                <img src={Cat} alt="selling" />
                <h2>The Best Hybrid SUVs of 2022</h2>
              </Col>
              <Col span={6}>
                <img src={Cat} alt="selling" />
                <h2>The Best Hybrid SUVs of 2022</h2>
              </Col>
              <Col span={6}>
                <img src={Cat} alt="selling" />
                <h2>The Best Hybrid SUVs of 2022</h2>
              </Col>
              <Col span={6}>
                <img src={Cat} alt="selling" />
                <h2>The Best Hybrid SUVs of 2022</h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <End />
    </section>
  );
};

export default Blog;
