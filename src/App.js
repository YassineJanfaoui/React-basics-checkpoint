import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import photo from "./photo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={photo} className="App-logo" alt="logo" />
          <p className="thisisaclass">
          </p>
          <br></br>
          <hr></hr>
          <p className="anotherclass">

          </p>

        </header>
      </div>
    );
  }
}

export default App;
