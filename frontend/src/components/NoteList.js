import React from "react";
import NoteItem from "./NoteItem";

const NoteList = props => {
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
