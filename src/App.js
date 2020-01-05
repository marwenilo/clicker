import React, { Component } from "react";
import Count from "./compontes/count";

export default class App extends Component {
  state = {
    count: 0
  };
  inc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  dec = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };
  reset = () => {
    this.setState({
      count: 0
    });
  };
  render() {
    return (
      <div className="App">
        <Count
          inc={this.inc}
          dec={this.dec}
          reset={this.reset}
          count={this.state.count}
        />
      </div>
    );
  }
}
