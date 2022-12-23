import React from "react";

import Logoipsum from "../../images/svg/Logoipsum";
import ScrollUp from "../../images/svg/ScrollUp";

import "./styles.scss";

function Footer() {
  return (
    <footer>
      <Logoipsum width="149.465" height="30" fill="#004875" />
      <a href="#first" className="back-to-top">
        <ScrollUp />
      </a>
    </footer>
  );
}

export default Footer;
