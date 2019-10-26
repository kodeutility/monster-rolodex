import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Go REACT"
    };
  }
  render() {
    return (
      <div>
        <div>Hello World {this.state.name}</div>
        <button
          onClick={() => {
            this.setState({ name: "hurray!!!" });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default App;
