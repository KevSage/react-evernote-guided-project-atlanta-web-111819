import React, { Fragment } from "react";

const NoteViewer = props => {
  return (
    <Fragment>
      <h2>{props.view.title}</h2>
      <p>{props.view.body}</p>
      <button onClick={() => props.noteEdit(props.view)}>Edit</button>
    </Fragment>
  );
};

export default NoteViewer;
