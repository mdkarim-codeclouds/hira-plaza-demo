/* eslint-disable */
import React from "react";
import { Col, Container, Row } from "reactstrap";
const BannerComponent = () => {
  return (
    <div>
      <div className="static-slider10 static-banner-home">
        <Container>
          <Row className="">
            <Col md="7" className="align-self-center ">
              <span className="label label-rounded label-inverse">
                Creating Brands
              </span>
              <h1 className="title">ONE BILLON People Trust Hira Plaza</h1>
              <h6 className="subtitle op-8">
                Pellentesque vehicula eros a dui pretium ornare. Phasellus
                congue vel quam nec luctus.In accumsan at eros in dignissim.
                Cras sodales nisi nonn accumsan.
              </h6>
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href="#contact-us"
              >
                <span>Inquiry Now</span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
