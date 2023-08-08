/* eslint-disable */
import React, { useState } from "react";
import Image from "next/image";
import { 
  Row, 
  Col, 
  Container, 
  Input, 
  Button,
  Nav, NavItem, NavLink,
  TabContent, TabPane
} from "reactstrap";
import img1 from "../../../assets/images/hp/product-demo.jpg";

const ContentComponent = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div>
      <section className="static-slider3 contact-main-div">
        <Container>
          <Row className="gx-4 gx-lg-5 align-items-center">
            <Col md="6">
              <div className="img-ho">
                <Image
                  className="card-img-top"
                  src={img1}
                  alt="wrappixel kit"
                />
              </div>
            </Col>
            <Col md="6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="fw-bolder">Shop item template</h1>
              <div className="fs-5 mb-3">
                <span className="text-decoration-line-through">$45.00</span>
                <span className="text-dark ml-2">$40.00</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
              <div className="d-flex mt-4">
                <Input
                  id="quantity"
                  name="quantity"
                  placeholder="Quantity"
                  type="number" 
                  className="text-center add-to-cart-quantity"
                  value={1}
                />
                <Button outline className="add-to-cart-btn ml-2">
                  <i className="fa fa-cart-arrow-down mr-2"></i>
                  Add To Cart
                </Button>
              </div>
            </Col>
            <Col md="12" className="product-tabs mt-4">
              <Nav tabs>
                <NavItem>
                  <NavLink className={activeTab == "1" ? 'active' : ''} onClick={() => setActiveTab("1")}>
                    Description
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={activeTab == "2" ? 'active' : ''} onClick={() => setActiveTab("2")}>
                    Specifications
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <h4>
                        Tab 1 Contents
                      </h4>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <h4>
                        Tab 2 Contents
                      </h4>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContentComponent;
