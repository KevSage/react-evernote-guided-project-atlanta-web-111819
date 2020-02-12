import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    return (
      <div className="master-detail-element sidebar">
        <button onClick={this.props.showCreateForm}>New</button>

        <NoteList
          allNotes={this.props.allNotes}
          showNote={this.props.showNote}
        />
      </div>
    );
  }
}

export default Sidebar;
