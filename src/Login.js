import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  handleLogin = () => {
    this.props.displayPages();
  };
  render() {
    return (
      <div className="Login">
        <FormControl>
          <InputLabel htmlFor="my-input" required>
            Email address
          </InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />

          <InputLabel htmlFor="my-input" required>
            Email address
          </InputLabel>
          <Input
            type="password"
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            We'll never share your password
          </FormHelperText>

          <Button
            onClick={this.handleLogin}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </FormControl>
      </div>
    );
  }
}
