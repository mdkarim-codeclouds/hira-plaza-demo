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
  TabContent, TabPane,
  Carousel, CarouselIndicators, CarouselItem
} from "reactstrap";
import img3 from "../../../assets/images/hp/309922324_Waterway 18-4-22 3.jpg";
import img2 from "../../../assets/images/hp/679699910_Waterway 18-4-22 2.png";
import img1 from "../../../assets/images/hp/787284022_Waterway 18-4-22 1.jpg";

const items = [
  {
    key: 0,
    src: img1
  },
  {
    key: 1,
    src: img2
  },
  {
    key: 2,
    src: img3
  }
];

const ContentComponent = () => {
  const [quantityInput, setQuantityInput] = useState(1);
  const [activeTab, setActiveTab] = useState("1");

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item, i) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={i}
    >
      <Image src={item.src} alt={item.altText} />
    </CarouselItem>
  ));

  const handleQuantityChange = (event) => {
    let val = 1;
    if (event.target.value > 0 && event.target.value < 101){
      val = event.target.value
    }
    setQuantityInput(val);
  }
  return (
    <div>
      <section className="static-slider3 single-product-main-div">
        <Container>
          <Row className="gx-4 gx-lg-5 align-items-center">
            <Col md="6">
              <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
              </Carousel>
            </Col>
            <Col md="6">
              <div className="small mb-1">SKU: TAP-TYPE-1</div>
              <h1 className="fw-bolder">Tap type 1</h1>
              <div className="fs-5 mb-3">
                <span className="text-decoration-line-through">&#8377;110.00</span>
                <span className="text-dark ml-2">&#8377;99.00</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
              <div className="d-flex mt-4">
                <Input
                  id="quantity"
                  name="quantity"
                  placeholder="Quantity"
                  type="number" 
                  className="text-center add-to-cart-quantity"
                  value={quantityInput}
                  onChange={handleQuantityChange}
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
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?
                      </p>
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
