import React from "react";
import { isMobile } from "react-device-detect";

const Footer = () => {
  if (isMobile) {
    return (
      <>
        <header>
          <h1>Mobile Header</h1>
        </header>
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

export default Footer;