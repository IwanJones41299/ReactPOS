import React from 'react';
import { isMobile } from 'react-device-detect';
import { Navbar, Nav } from 'react-bootstrap';
import { RiAccountCircleLine } from 'react-icons/ri';

const Header = () => {
  
  if (isMobile) {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/" style={{ color: "#ffffff", fontWeight: "bold" }}>Company Logo</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/login"><RiAccountCircleLine style={{ fontSize: "2em" }} className="mr-2" /></Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="/" style={{ color: "#ffffff", fontWeight: "bold" }}>Company Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/login" style={{ fontSize: "1.3em", textDecorationColor: "transparent" }}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
};

export default Header;