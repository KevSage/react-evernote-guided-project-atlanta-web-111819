import React from "react";
import NoteItem from "./NoteItem";

const NoteList = props => {
  console.log(props.allNotes);
  return (
    <ul>
      {props.allNotes.map(note => (
        <NoteItem singleNote={note} showNote={props.showNote} />
      ))}
      {/* <NoteItem /> */}
    </ul>
  );
};

export default NoteList;
