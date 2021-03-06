import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Tasks from "./Tasks";
import User from "./User";
import Home from "./Home";
import React, { Component } from "react";
import Login from "./Login";

export default class App extends Component {
  state = {
    display: false,
  };

  displayPages = (value) => {
    this.setState({
      display: value,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.display ? (
            <>
              <Header />
              <Switch>
                <Route path="/Tasks">
                  <Tasks />
                </Route>

                <Route path="/User">
                  <User />
                </Route>

                <Route path="/">
                  <Redirect to="/Home" />
                  <Home />
                </Route>
              </Switch>
            </>
          ) : (
            <>
              <Redirect to="/Login" />
              <Login displayPages={this.displayPages} />
            </>
          )}
        </div>
      </Router>
    );
  }
}
