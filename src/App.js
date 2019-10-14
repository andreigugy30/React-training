import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";

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
    }

    const titleStyles = [];

    if (this.state.persons.length <= 2) {
      titleStyles.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      titleStyles.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>My react app!</h1>
        <p className={titleStyles.join(" ")}>It is working</p>
        <button className={classes.Button} onClick={this.toggleContent}>
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
