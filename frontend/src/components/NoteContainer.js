import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search onSearch={this.props.onSearch} />
        <div className="container">
          <Sidebar
            allNotes={this.props.allNotes}
            showNote={this.props.showNote}
            handleCreate={this.props.handleCreate}
            showCreateForm={this.props.showCreateForm}
            cancelCreate={this.props.cancelCreate}
          />
          <Content
            view={this.props.view}
            edit={this.props.edit}
            noteEdit={this.props.noteEdit}
            onEdit={this.props.onEdit}
            cancelEdit={this.props.cancelEdit}
            create={this.props.create}
            cancelCreate={this.props.cancelCreate}
            handleCreate={this.props.handleCreate}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
