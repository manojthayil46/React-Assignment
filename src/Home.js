import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Information from "./Information";

class Home extends Component {
  state = {
    selected: "",
  };

  selectedValue = (value) => {
    this.setState({
      selected: value,
    });
  };

  render() {
    return (
      <div>
        <Dropdown setText={this.selectedValue} />
        <Information value={this.state.selected} />
      </div>
    );
  }
}

export default Home;
