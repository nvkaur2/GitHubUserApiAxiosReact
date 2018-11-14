import React, { Component, Fragment } from "react";
import Input from "../Components/Input/Input";
import Label from "../Components/Label/Label";
import axios from "axios";
import Button from "../Components/Button/Button";
class Form extends Component {
  state = {
    username: "",
    error: "",
    display: false
  };
  changeInputHandler = e => {
    const username = e.target.value;
    this.setState({
      username: username,
      error: "",
      display: false
    });
  };

  submitFormHandler = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(response => {
        this.setState({ username: "", error: "", display: true });
        this.props.onSubmit(response.data, this.state.display);
      })
      .catch(err => {
        if (this.state.username.length === 0) {
          this.setState({
            username: "",
            error: "Error: Please provide username name",
            display: false
          });
        } else {
          this.setState({
            username: "",
            error: "Error: username not found",
            display: false
          });
        }
        this.props.onSubmit(null, this.state.display);
      });
  };

  render() {
    return (
      <form onSubmit={this.submitFormHandler}>
        <Label value="Enter username " />
        <br />
        <Input
          type="text"
          onChange={this.changeInputHandler}
          value={this.state.username}
        />
        <br />
        <Button type="submit" value="Submit" />
        <br />
        <br />
        <p style={{ color: "red", marginLeft: 10 }}>{this.state.error}</p>
      </form>
    );
  }
}

export default Form;
