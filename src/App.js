import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
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
        <input type="search" placeholder="Search monsters" />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
