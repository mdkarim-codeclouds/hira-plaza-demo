/* eslint-disable */
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer bg-dark text-white">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20 text-white">Address</h5>
            <p>New Rander Road, Adajan Patiya, Surat-395005, Gujarat, India</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20 text-white">Phone</h5>
            <p>
              Office : +91 9088877712
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20 text-white">Email</h5>
            <p>
              Office : <a className="link text-white" href="mailto:infohiraplaza@gmail.com">infohiraplaza@gmail.com</a>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20 text-white">Social</h5>
            <div className="round-social light">
              <Link href="#">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-google-plus"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by{" "}
                  <Link href="/">
                    <a className="link text-white">HIRA PLAZA INDUSTRIES</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Privacy Policy</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
