import React, { Component } from "react";

class StateInAction extends Component {
  constructor() {
    super();

    this.state = {
      text: "State In Action",
    };
    setTimeout(() => {
      // THIS IS BAD!!! DON'T DO THIS!
      // this.state.text = "State Changed!!";
      // setState is a setter -my bartender

      this.setState({
        text: "State Changed!!",
      });
    }, 2000);
  }

  render() {
    return (
      <h1>
        {/* info from stare; info from props */}
        {this.state.text} - {this.props.name}
      </h1>
    );
  }
}

export default StateInAction;
