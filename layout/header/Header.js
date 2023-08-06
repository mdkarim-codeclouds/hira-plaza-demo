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
            <NavbarBrand href="/">
              <Image src={logo3} alt="wrapkit" width={140} height={71} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <Link href="/">
                    <a className="text-white hover-grey nav-link" onClick={toggle}>Home</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/#products">
                    <a className="text-white hover-grey nav-link" onClick={toggle}>Products</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/aboutus">
                    <a className="text-white hover-grey nav-link" onClick={toggle}>About Us</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/contactus">
                    <a className="text-white hover-grey nav-link" onClick={toggle}>Contact Us</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/#contact-us">
                    <a className="text-white hover-grey nav-link" onClick={toggle}>Inquiry</a>
                  </Link>
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
