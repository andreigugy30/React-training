import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Andrei", age: 33 },
      { id: 2, name: "Alex", age: 32 },
      { id: 3, name: "Ana", age: 30 }
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

  changeTextInput = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    //Create a copy of an object
    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex])

    //Updating the array
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  toggleContent = () => {
    const show = this.state.showContent;
    this.setState({
      showContent: !show
    });
  };

  deletePersonHandler = personIndex => {
    //Create a copy of array with spread operator

    // const persons = this.state.persons.slice()
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
      fontWeight: "600",

      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showContent) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                change={event => this.changeTextInput(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style.color = "white";

      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const titleStyles = [];

    if (this.state.persons.length <= 2) {
      titleStyles.push("red");
    }
    if (this.state.persons.length <= 1) {
      titleStyles.push("bold");
    }

    return (
      <div className="App">
        <h1>My react app!</h1>
        <p className={titleStyles.join(" ")}>It is working</p>
        <button style={style} onClick={this.toggleContent}>
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
