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
    return (
      <div>
        {this.state.monsters.map(monster => (
          <h1 key={monster.email}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
