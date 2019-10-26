import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        //console.log(users);
        this.setState({ monsters: users });
      });
  }

  render() {
    return (
      <div className="App">
        <CardList />
        {this.state.monsters.map(monster => (
          <h1 key={monster.email}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
