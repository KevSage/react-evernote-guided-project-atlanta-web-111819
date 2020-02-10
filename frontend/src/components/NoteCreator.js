import React, { Component } from "react";

class NoteCreator extends Component {
  render() {
    return (
      <form
        className="note-creator"
        onSubmit={event => this.props.handleCreate(event)}
      >
        <input type="text" name="title" placeholder="Enter Title" />
        <textarea name="body" placeholder="Enter note" />
        <div className="button-row">
          <input
            className="button"
            type="submit"
            value="Save"
            // onClick={this.props.handleCreate}
          />
          <button type="button" onClick={this.props.cancelCreate}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default NoteCreator;
