/* eslint-disable */
import Image from "next/image";
import Link from "next/link";
import React from "react"; 
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import img5 from "../../../assets/images/hp/279232246_Waterway 18-4-22 5.png";
import img3 from "../../../assets/images/hp/309922324_Waterway 18-4-22 3.jpg";
import img4 from "../../../assets/images/hp/535775674_Waterway 18-4-22 4.jpg";
import img6 from "../../../assets/images/hp/609205665_Waterway 18-4-22 6.jpg";
import img2 from "../../../assets/images/hp/679699910_Waterway 18-4-22 2.png";
import img1 from "../../../assets/images/hp/787284022_Waterway 18-4-22 1.jpg";

const ProductsComponent = () => {
  return (
    <div>
      <div className="spacer products-home-comp" id="products">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">New Arrivals</h2>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4">
              <Link href="/product/t1">
                <a className="product-card">
                  <Card className="card-shadow cursor-pointer">
                    <div className="img-ho">
                      <Image
                        className="card-img-top"
                        src={img1}
                        alt="wrappixel kit"
                      />
                    </div>
                    <CardBody>
                      <h5 className="font-medium m-b-0">
                        Tap type 1
                      </h5>
                    </CardBody>
                  </Card>
                </a>
              </Link>
            </Col>
            <Col md="4">
              <Link href="/product/t2">
                <a className="product-card">
                  <Card className="card-shadow cursor-pointer">
                    <div className="img-ho">
                      <Image
                        className="card-img-top"
                        src={img2}
                        alt="wrappixel kit"
                      />
                    </div>
                    <CardBody>
                      <h5 className="font-medium m-b-0">Tap type 2</h5>
                    </CardBody>
                  </Card>
                </a>
              </Link>
            </Col>
            <Col md="4">
              <Link href="/product/t3">
                <a className="product-card">
                  <Card className="card-shadow cursor-pointer">
                    <div className="img-ho">
                      <Image
                        className="card-img-top"
                        src={img3}
                        alt="wrappixel kit"
                      />
                    </div>
                    <CardBody>
                      <h5 className="font-medium m-b-0">Tap type 3</h5>
                    </CardBody>
                  </Card>
                </a>
              </Link>
            </Col>
            <Col md="4">
              <Link href="/product/t4">
                <a className="product-card">
                  <Card className="card-shadow cursor-pointer">
                    <div className="img-ho">
                      <Image
                        className="card-img-top"
                        src={img4}
                        alt="wrappixel kit"
                      />
                    </div>
                    <CardBody>
                      <h5 className="font-medium m-b-0">Tap type 4</h5>
                    </CardBody>
                  </Card>
                </a>
              </Link>
            </Col>
            <Col md="4">
              <Link href="/product/t5">
                <a className="product-card">
                  <Card className="card-shadow cursor-pointer">
                    <div className="img-ho">
                      <Image
                        className="card-img-top"
                        src={img5}
                        alt="wrappixel kit"
                      />
                    </div>
                    <CardBody>
                      <h5 className="font-medium m-b-0">Tap type 5</h5>
                    </CardBody>
                  </Card>
                </a>
              </Link>
            </Col>
            <Col md="4">
              <Link href="/product/t6">
                <a className="product-card">
                  <Card className="card-shadow cursor-pointer">
                    <div className="img-ho">
                      <Image
                        className="card-img-top"
                        src={img6}
                        alt="wrappixel kit"
                      />
                    </div>
                    <CardBody>
                      <h5 className="font-medium m-b-0">Tap type 6</h5>
                      {/* <p className="m-b-0 font-14">Book Covers</p> */}
                    </CardBody>
                  </Card>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductsComponent;
