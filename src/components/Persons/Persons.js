import React from "react";
import Person from "../Persons/Person/Person";

const persons = props => {
  console.log("[Persons.js] rendering....");
  return props.persons.map((person, index) => {
    return (
      <Person
        key={index}
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        change={event => props.changed(event, person.id)}
      />
    );
  });
};

export default persons;
