import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          email: "frankenstein@email.com"
        },
        {
          name: "Dracula",
          email: "dracula@email.com"
        },
        {
          name: "Zombie",
          email: "zombie@email.com"
        }
      ]
    };
  }
  render() {
    return <div></div>;
  }
}

export default App;
