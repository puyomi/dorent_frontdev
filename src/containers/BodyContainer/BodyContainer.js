import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

class BodyContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => "메인화면"} />
        <Route exact path="/products" render={() => "상품화면"} />
        <Route exact path="/upload" render={() => "업로드화면"} />
        <Route exact path="/auth" render={() => "로그인화면"} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

const NotFound = () => <div>404! Page NOT FOUND</div>;

export default BodyContainer;
