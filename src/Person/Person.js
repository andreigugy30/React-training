import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p>
        I am {props.name}.I have {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default person;
