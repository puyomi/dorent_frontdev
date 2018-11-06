import React, { Component }  from "react";
import "./styles.scss";
import Navigation from "components/Navigation";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return [
      <Navigation key={2} />,
      <MainFrame key={4} />
      // <Footer key={5} />
    ];
  }
}

const MainFrame = () => (
  <Switch>
    <Route exact path="/" render={() => "메인화면"} />
    <Route exact path="/products" render={() => "상품화면"} />
    <Route exact path="/upload" render={() => "업로드화면"} />
    <Route exact path="/auth" render={() => "로그인화면"} />
    <Route component={NotFound} />
  </Switch>
);

const NotFound = () => (
  <div>404! Page NOT FOUND</div>
)

export default App;
