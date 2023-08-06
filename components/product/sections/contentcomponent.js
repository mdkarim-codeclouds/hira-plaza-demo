/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
const ContentComponent = () => {
  return (
    <div>
      <div className="blank-header"></div>
      <div className="static-slider3 contact-main-div">
        <Container>
          <Row className="justify-content-center">
            <Col md="7">
              <div class="info-wrap w-100">
                <div class="dbox w-100 d-flex align-items-center pb-4">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-map-marker"></span>
                  </div>
                  <div class="text pl-3">
                    <p><span>Address:</span> New Rander Road, Adajan Patiya, Surat-395005, Gujarat, India</p>
                  </div>
                </div>
                <div class="dbox w-100 d-flex align-items-center pb-4">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-phone"></span>
                  </div>
                  <div class="text pl-3">
                    <p><span>Phone:</span> <a href="tel:9088877712">+91 9088877712</a></p>
                  </div>
                </div>
                <div class="dbox w-100 d-flex align-items-center pb-4">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-paper-plane"></span>
                  </div>
                  <div class="text pl-3">
                    <p><span>Email:</span> <a href="mailto:infohiraplaza@gmail.com">infohiraplaza@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContentComponent;
