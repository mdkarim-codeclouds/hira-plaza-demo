/* eslint-disable */
import React from "react";
import { 
  Row, 
  Col, 
  Container,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
const ContentComponent = () => {
  return (
    <div>
      <div className="static-slider3 contact-main-div">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card color="light">
                <CardHeader><span class="fa fa-map-marker mr-2"></span> Address</CardHeader>
                <CardBody>
                  <CardTitle tag="h5">
                    New Rander Road, Adajan Patiya, Surat-395005, Gujarat, India
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card color="light">
                <CardHeader><span class="fa fa-phone mr-2"></span> Phone</CardHeader>
                <CardBody>
                  <CardTitle tag="h5">
                    <a href="tel:9088877712">+91 9088877712</a>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="mb-0" color="light">
                <CardHeader><span class="fa fa-paper-plane mr-2"></span> Email</CardHeader>
                <CardBody>
                  <CardTitle tag="h5">
                    <a href="mailto:infohiraplaza@gmail.com">infohiraplaza@gmail.com</a>
                  </CardTitle>
                </CardBody>
              </Card>
              {/* <div class="info-wrap w-100">
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
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContentComponent;
