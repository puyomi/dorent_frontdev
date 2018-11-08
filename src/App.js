import React, { Component } from "react";
import "./styles.module.scss";

import { Navigation, Footer } from "./components";
import { BodyContainer } from "./containers";

class App extends Component {
  render() {
    return [
      <Navigation key={2} />,
      <BodyContainer key={4} />,
      // <Footer key={5} />
    ];
  }
}

export default App;
