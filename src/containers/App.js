import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Info from "../components/Info/Info";

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
    let persons = null;

    if (this.state.showContent) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeTextInput}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Info
          showContent={this.state.showContent}
          persons={this.state.persons}
          clicked={this.toggleContent}
        />
        {persons}
      </div>
    );
  }
}

export default App;
