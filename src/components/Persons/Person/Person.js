import React from "react";
import classes from "./Person.module.css";

const person = props => {
  console.log("[Person.js] rendering....");
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am {props.name}.I have {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default person;
