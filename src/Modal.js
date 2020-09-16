import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./Modal.css";

class Modal extends Component {
  state = {
    id: "",
    title: "",
    completed: "",
  };

  closeModal = (event) => {
    this.props.closeModal(event) && this.props.closeModal();
  };

  handleInput = (event) => {
    let value = event.target.value;
    switch (event.target.name) {
      case "id":
        this.setState({
          id: value,
        });

      case "title":
        this.setState({
          title: value,
        });

      case "completed":
        this.setState({
          completed: value,
        });
    }
  };

  handleSubmit = () => {
    this.props.handleSubmit(
      this.state.id,
      this.state.title,
      this.state.completed
    );
  };

  render() {
    return (
      <div>
        <div className="box">
          <form>
            <label htmlFor="id">
              {" "}
              <strong>ID</strong>
            </label>
            <input
              className="input__values"
              name="id"
              onChange={this.handleInput}
              type="text"
            />
            <br></br>
            <label htmlFor="title">
              {" "}
              <strong>Title</strong>
            </label>
            <input
              className="input__values"
              name="title"
              onChange={this.handleInput}
              type="text"
            />
            <br></br>
            <label htmlFor="completed">
              {" "}
              <strong>completed</strong>
            </label>
            <input
              className="input__values"
              name="completed"
              onChange={this.handleInput}
              type="text"
            />
            <br></br>
            <Button
              variant="contained"
              color="primary"
              className="modal__button"
              onClick={this.handleSubmit}
            >
              Add
            </Button>
            &nbsp;
            <Button
              variant="contained"
              onClick={this.closeModal}
              color="secondary"
              className="modal__button"
            >
              Close
            </Button>
            <br />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
