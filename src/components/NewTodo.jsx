import React from "react";
import { useState } from "react";

export default function NewTodo(props) {
  const [value, setValue] = useState("");

  const onsubmit = (event) => {
    event.preventDefault();
    props.addtodo(value);
    setValue("");
  };
  const onchange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="container">
      <form onSubmit={onsubmit}>
        <div className="row">
          
          <div className="col-md-7" id="field">
            <input
              type="text"
              className="form-control"
              onChange={onchange}
              value={value}
            />
          </div>
          
          <div className="col-md-2">
            <button type="submit" id="btn" className="btn">
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
