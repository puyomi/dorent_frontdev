import React, { Component } from "react";
import { Navigation, NavAlert } from "components";

class HeaderContainer extends Component {
  render() {
    return [<Navigation key={2} />, <NavAlert key={3} />];
  }
}

export default HeaderContainer;
