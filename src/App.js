import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Andrei",
        age: 33
      },
      {
        name: "Alex",
        age: 32
      },
      {
        name: "Ana",
        age: 30
      }
    ],
    otherState: "some other state"
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "Andreieeeee",
          age: 33
        },
        {
          name: "Alex",
          age: 32
        },
        {
          name: "Ana",
          age: 28
        }
      ]
    });
  };

  changeTextInput = event => {
    this.setState({
      persons: [
        {
          name: "Andreieeeee",
          age: 33
        },
        {
          name: event.target.value,
          age: 32
        },
        {
          name: "Ana",
          age: 28
        }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "#57f7ff",
      border: "1px solid #00a5ad",
      borderRadius: "10px",
      color: "#ad0000",
      padding: "10px",
      outline: "none",
      cursor: "pointer",
      fontSize: "20px",
      fontWeight: "600"
    };

    return (
      <div className="App">
        <h1>My react app!</h1>
        <button style={style} onClick={this.switchNameHandler}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.changeTextInput}
        >
          My hobbies are:{" "}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
