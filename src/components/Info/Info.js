import React from "react";
import classes from "./Info.module.css";

const info = props => {
  const titleStyles = [];

  if (props.persons.length <= 2) {
    titleStyles.push(classes.red);
  }
  if (props.persons.length <= 1) {
    titleStyles.push(classes.bold);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={titleStyles.join(" ")}>It is working</p>
      <button className={classes.Button} onClick={props.clicked}>
        Switch name
      </button>
    </div>
  );
};

export default info;
