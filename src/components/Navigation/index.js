import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <nav>
      <Link to="/digital">
        <span>디지털/가전</span>
      </Link>
      <Link to="/clothes">
        <span>의류/패션</span>
      </Link>
      <Link to="/hobby">
        <span>생활/취미</span>
      </Link>
      <Link to="/etc">
        <span>기타/잡화</span>
      </Link>
    </nav>
  );
};

export default Navigation;
