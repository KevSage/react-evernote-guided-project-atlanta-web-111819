import React, { Component } from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

class App extends Component {
  state = {
    myNotes: [],
    noteViewer: {},
    noteEditor: {},
    search: " "
  };

  componentDidMount() {
    fetch("http://localhost:3000//api/v1/notes")
      .then(res => res.json())
      .then(notes => {
        this.setState({
          myNotes: notes
        });
      });
  }

  showNote = note => {
    this.setState({
      noteViewer: note,
      noteEditor: false
    });
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  };

  showEditform = note => {
    // event.preventDefault();
    this.setState({
      noteEditor: note
    });
  };

  handleEditNote = event => {
    event.preventDefault();

    //Create new note
    let title = event.target.title;
    title = title.value;
    let body = event.target.body;
    body = body.value;
    let newNote = {
      ...this.state.noteEditor,
      title: title,
      body: body
    };
    //Fetch Patch Request
    fetch("http://localhost:3000//api/v1/notes/" + newNote.id, {
      method: "PATCH",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(updatedNote => {
        //Add updatedNote to myNotes array
        const myNotes = [...this.state.myNotes];
        let index = myNotes.findIndex(note => note.id === updatedNote.id);
        myNotes[index] = updatedNote;

        this.setState({
          myNotes: myNotes,
          noteViewer: updatedNote,
          noteEditor: {}
        });
      });

    console.log(this.state);
  };

  filterNotes = () => {
    let newFilter = [...this.state.myNotes];
    return newFilter.filter(note => {
      return (
        note.title.toLowerCase().includes(this.state.search) ||
        note.body.toLowerCase().includes(this.state.search)
      );
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer
          onSearch={this.handleSearch}
          allNotes={this.filterNotes()}
          showNote={this.showNote}
          view={this.state.noteViewer}
          edit={this.state.noteEditor}
          noteEdit={this.showEditform}
          onEdit={this.handleEditNote}
        />
      </div>
    );
  }
}

export default App;
