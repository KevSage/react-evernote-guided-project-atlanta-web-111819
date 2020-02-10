import React from "react";

const NoteItem = props => {
  return (
    <li onClick={() => props.showNote(props.singleNote)}>
      <h4>{props.singleNote.title}</h4>
      <p>
        {props.singleNote.body.substring(0, 20)}
        ...
      </p>
    </li>
  );
};
export default NoteItem;
