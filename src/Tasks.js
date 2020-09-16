import React, { Component } from "react";
import axios from "axios";
import "./Tasks.css";
import { Button } from "@material-ui/core";
import Modal from "./Modal";

export default class Tasks extends Component {
  state = {
    data: [],
    show: false,
  };

  componentDidMount = () => {
    axios.get("http://jsonplaceholder.typicode.com/todos").then((response) => {
      let mydata = response.data.slice(0, 3);
      this.setState({
        data: mydata,
      });
    });
  };

  handleChange = () => {
    this.setState({
      show: true,
    });
  };

  handleDelete = (index) => {
    let newdata = [...this.state.data];
    newdata.splice(index, 1);
    this.setState({
      data: newdata,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  ModalData = (id, title, completed) => {
    let myObj = { id: id, title: title, completed: completed };
    let modified_array = [...this.state.data];
    modified_array.push(myObj);
    this.setState({ data: modified_array });
  };

  render() {
    return (
      <div className="tasks">
        {this.state.data.map((element, index) => (
          <div className="container">
            <div className="id">{element.id}</div>
            <div className="title">{element.title}</div>
            <div className="completed">{element.completed.toString()}</div>
            <Button
              onClick={() => this.handleDelete(index)}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          </div>
        ))}

        {this.state.show ? (
          <Modal handleSubmit={this.ModalData} closeModal={this.closeModal} />
        ) : null}
        <br></br>

        <form>
          <Button
            className="primary"
            onClick={this.handleChange}
            variant="contained"
            color="primary"
          >
            Add Task
          </Button>
        </form>
      </div>
    );
  }
}
