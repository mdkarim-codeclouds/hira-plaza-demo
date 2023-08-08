/* eslint-disable */
import React from "react";
import {
  Row,
  Col,
  Container,
} from "reactstrap";

const HeaderComponent = () => {
  return (
    <div id="section">
      <div className="spacer banner-color banner-section">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold text-white">Product / Tap Type 1</h1>
              <h6 className="subtitle text-white">
                HIRA PLAZA INDUSTRIES
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;
