import React, { Component } from "react";
import { Navigation, NavAlert } from "../../components";

class HeaderContainer extends Component {
  render() {
    return [<Navigation />, <NavAlert />];
  }
}

export default HeaderContainer;
