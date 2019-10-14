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
    otherState: "some other state",
    showContent: false
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

  toggleContent = () => {
    const show = this.state.showContent;
    this.setState({
      showContent: !show
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

    let persons = null;

    if (this.state.showContent) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>My react app!</h1>
        <button style={style} onClick={this.toggleContent}>
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
