import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class User extends Component {
  state = {
    changeDiv: false,
    navigate: false,
  };

  changeDiv = () => {
    this.setState({
      changeDiv: true,
    });
  };

  logout = () => {
    this.setState({
      navigate: true,
    });
  };

  render() {
    if (this.state.navigate) return <Redirect to="/Login" />;
    return (
      <>
        {this.state.changeDiv ? (
          <div className="authentication">
            <div>
              <label htmlFor="id">
                <strong>Username</strong>
              </label>
              <input className="input__values" type="text" />
            </div>
            <div>
              <label htmlFor="id">
                <strong>New Password</strong>
              </label>
              <input className="input__values" type="password" />
            </div>
            <Button
              variant="contained"
              color="primary"
              className="modal__button"
              onClick={this.changeDiv}
            >
              Save
            </Button>
            &nbsp;
            <Button
              variant="contained"
              onClick={this.logout}
              color="secondary"
              className="modal__button"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="authentication">
            <div>
              <label htmlFor="id">
                <strong>Username</strong>
              </label>
              <input className="input__values" type="text" value="Manoj" />
            </div>
            <div>
              <label htmlFor="id">
                <strong>Password</strong>
              </label>
              <input className="input__values" type="password" value="Manoj" />
            </div>
            <Button
              variant="contained"
              color="primary"
              className="modal__button"
              onClick={this.changeDiv}
            >
              Change Password
            </Button>
            &nbsp;
            <Button
              variant="contained"
              onClick={this.closeModal}
              color="secondary"
              className="modal__button"
            >
              Save
            </Button>
          </div>
        )}
      </>
    );
  }
}
