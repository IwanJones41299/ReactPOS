import React from 'react';
import { isMobile } from 'react-device-detect';
import { Nav } from 'react-bootstrap';

const Footer = () => {
  if (isMobile) {
    return (
        <footer style={{ backgroundColor: "#2C3E50", height: "6vh" }}>
          <h5 className="text-center" style={{ paddingTop: "0.9rem", color: "#ffffff", fontSize: "1em" }}>Software created by : <Nav.Link style={{display: "inline", padding: "0"}} href='#portfilioSite'>Iwan Jones</Nav.Link></h5>
        </footer>
    );
  } else {
    return (
        <footer style={{ backgroundColor: "#2C3E50", height: "5vh" }}>
          <h5 className="text-center" style={{ paddingTop: "0.9rem", color: "#ffffff", fontSize: "1em" }}>Software created by : <Nav.Link style={{display: "inline", padding: "0"}} href='#portfilioSite'>Iwan Jones</Nav.Link></h5>
        </footer>
    );
  }
};

export default Footer;