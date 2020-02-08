import React, { Component } from "react";

class NoteEditor extends Component {
  render() {
    return (
      <form
        className="note-editor"
        onSubmit={event => this.props.onEdit(event)}
      >
        <input
          type="text"
          name="title"
          defaultValue={this.props.view.title}
          // onClick={event => this.props.onEdit(event)}
        />
        <textarea
          name="body"
          defaultValue={this.props.view.body}
          // onChange={event => this.props.onEdit(event)}
        />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
