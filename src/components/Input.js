import React from "react";
import "../stylesheets/Input.css";

const Input = (props) => {
  return (
    <div className='input'>
      {props.input}
    </div>
  );
};

export default Input;