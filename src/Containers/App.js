import React, { Component, Fragment } from "react";
import Form from "./Form";
import Card from "../Components/UserCard/Card";

class App extends Component {
  state = {
    card: {},
    display: false
  };
  addUserHandler = (userData, display) => {
    this.setState({
      card: { ...userData },
      display: display
    });
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.addUserHandler} />
        <Card response={this.state.card} display={this.state.display} />
      </Fragment>
    );
  }
}

export default App;
