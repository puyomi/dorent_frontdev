import { connect } from "react-redux";
import React, { Component } from "react";
import { LoginForm, SignupForm } from "components";
import { actionCreators as userActions } from "store/modules/user";

class AuthContainer extends Component {
  state = {
    username: "",
    password: "",
    action: "login"
  };

  render() {
    const { username, password, action } = this.state;
    return (
      <div>
        {action === "login" && (
          <LoginForm
            usernameValue={username}
            passwordValue={password}
            handleInputChange={this._handleLoginInputChange}
            handleSubmit={this._handleLoginSubmit}
          />
        )}
      </div>
    );
  }

  _handleLoginInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(event.target);
  };

  _handleLoginSubmit = event => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    event.preventDefault();
    usernameLogin(username, password);
  };
}

const mapDispatchToProps = dispatch => {
  return {
    usernameLogin: (username, password) => {
      dispatch(userActions.usernameLogin(username, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthContainer);
