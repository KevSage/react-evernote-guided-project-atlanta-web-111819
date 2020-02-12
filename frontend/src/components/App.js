import React, { Component } from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

class App extends Component {
  state = {
    user: {
      id: "",
      name: ""
    },
    myNotes: [],
    noteViewer: {},
    noteEditor: {},
    noteCreator: false,
    search: ""
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:3000//api/v1/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": localStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then(data =>
          this.setState({
            user: {
              id: data.id,
              name: data.name
            },
            myNotes: data.notes
          })
        );
    }
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

  cancelEdit = () => {
    this.setState({
      noteEditor: {}
    });
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

  showCreateForm = () => {
    console.log(this.state);
    this.setState({
      noteViewer: {},
      noteCreator: true,
      noteEditor: {}
    });
  };
  handleCreate = event => {
    event.preventDefault();
    let newNote = {
      title: event.target.title.value,
      body: event.target.body.value,
      user_id: this.state.user.id
    };
    fetch("http://localhost:3000//api/v1/notes", {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(note => {
        let newMyNotes = [...this.state.myNotes, note];
        this.setState({
          myNotes: newMyNotes,
          noteViewer: note,
          noteCreator: false
        });
      });
  };

  cancelCreate = () => {
    this.setState({
      noteCreator: false
    });
  };

  handleLogout = event => {
    event.preventDefault();
    localStorage.clear();
    console.log(this.state);
  };

  handleDelete = () => {
    console.log(this.state.noteViewer.id);
    fetch(
      "http://localhost:3000//api/v1/notes/" + `${this.state.noteViewer.id}`,
      {
        method: "DELETE"
      }
    )
      .then(res => res.text()) // or res.json()
      .then(res => {
        this.setState({
          noteViewer: {}
        });
        console.log(res);
      });
  };

  render() {
    return (
      <div className="app">
        <Header
          userName={this.state.user.name}
          handleLogout={this.handleLogout}
        />
        <NoteContainer
          onSearch={this.handleSearch}
          allNotes={this.filterNotes()}
          showNote={this.showNote}
          view={this.state.noteViewer}
          edit={this.state.noteEditor}
          noteEdit={this.showEditform}
          onEdit={this.handleEditNote}
          cancelEdit={this.cancelEdit}
          handleCreate={this.handleCreate}
          create={this.state.noteCreator}
          showCreateForm={this.showCreateForm}
          cancelCreate={this.cancelCreate}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
