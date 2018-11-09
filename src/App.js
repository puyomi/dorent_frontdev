import React, { Component } from "react";
import "./styles.module.scss";

import { Footer } from "./components";
import { BodyContainer, HeaderContainer } from "./containers";

class App extends Component {
  render() {
    return [
      <HeaderContainer key={2} />,
      <BodyContainer key={4} />,
      // <Footer key={5} />
    ];
  }
}

export default App;
