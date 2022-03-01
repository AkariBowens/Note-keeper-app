import React from "react";
import "./Note.css";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><p>DELETE</p></button>
      <p>{props.time}</p> {/* time functionality*/}
    </div>
  );
}

export default Note;
