import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const ContactComponent = () => {
  return (
    <div>
      <div className="contact1" id="contact-us">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="12">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Inquiry Now</h4>
                    <Form>
                      <Row>
                        <Col lg="4">
                          <FormGroup className="m-t-15">
                            <Input type="text" name="" placeholder="Name" />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup className="m-t-15">
                            <Input type="email" placeholder="Email" />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup className="m-t-15">
                            <Input type="text" name="phone" placeholder="Phone" />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="message"
                              placeholder="Type your query"
                              height={100}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              Submit <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default ContactComponent;
