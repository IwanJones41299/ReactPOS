import React from "react";
import { isMobile } from "react-device-detect";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  if (isMobile) {
    return (
      <>
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand href="#home">Company Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <header>
          <h1>Mobile Header</h1>
        </header>
      </>
    );
  }
};

export default Header;
