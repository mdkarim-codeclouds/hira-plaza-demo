import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from "reactstrap";
import logo3 from "../../assets/images/hp/logo.png";
import logo from "../../assets/images/logos/white-text.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <Image src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Custom Components
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/basic">
                    <a
                      className={
                        router.pathname == "/basic"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Basic-Components
                    </a>
                  </Link>
                </NavItem>
              </Nav>
              <div className="act-buttons">
                <NavLink
                  href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
                  className="btn btn-light font-14"
                  target="_blank"
                >
                  Download Free
                </NavLink>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

const HeaderModified = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="topbar" id="top">
      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h2-nav">
            <NavbarBrand href="#">
              <Image src={logo3} alt="wrapkit" width={140} height={71} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink className="hover-grey" href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="hover-grey" href="#products">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="hover-grey" href="#about-us">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="hover-grey" href="#contact-us">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="hover-grey" href="#contact-us">Inquiry</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderModified;
