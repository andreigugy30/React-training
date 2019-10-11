import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I am {props.name}.I have {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default person;
