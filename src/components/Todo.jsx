import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function Todo(props) {
  const [show, setShow] = useState(false);
  const [evalue, setevalue] = useState(props.todo.value);
  const onchange = (event) => {
    setevalue(event.target.value);
  };

  const ondone = () => {
    props.handeledit(evalue, props.todo.id);
    setShow(false);
  };
  return (
    <div>
      <div className="container ">
        <div className="row m-3">
          <div className="col-md-1">{props.index}</div>
          <div className="col-md-1">
            <input
              type="checkbox"
              checked={props.todo.isdone}
              onChange={() => props.handeldone(props.todo.id)}
            />
          </div>
          <div
            className="col-md-6"
            style={{ textDecoration: props.todo.isdone ? "line-through" : "" }}
          >
            {props.todo.value}
          </div>
          <div className="col-md-2">
            <button className="btn" id="edit" onClick={() => setShow(true)}>
              edit
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-danger"
              onClick={() => props.delete(props.todo.id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>Edit Your Todo</Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            type="text"
            placeholder={props.todo.value}
            onChange={onchange}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShow(false)}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={ondone}>
            Done
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
