import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import NoteCreator from "./NoteCreator";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    if (this.props.view.title && !this.props.edit.title) {
      return (
        <NoteViewer view={this.props.view} noteEdit={this.props.noteEdit} />
      );
    } else if (this.props.create === true) {
      return (
        <NoteCreator
          // edit={this.props.edit}
          // noteEdit={this.props.noteEdit}
          // view={this.props.view}
          // onEdit={this.props.onEdit}
          // cancelEdit={this.props.cancelEdit}
          // create={this.state.noteCreator}
          cancelCreate={this.props.cancelCreate}
          handleCreate={this.props.handleCreate}
        />
      );
    } else if (this.props.edit.title) {
      return (
        <NoteEditor
          // edit={this.props.edit}
          noteEdit={this.props.noteEdit}
          view={this.props.view}
          onEdit={this.props.onEdit}
          cancelEdit={this.props.cancelEdit}
        />
      );
    } else {
      return <Instructions />;
    }
  };

  render() {
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
