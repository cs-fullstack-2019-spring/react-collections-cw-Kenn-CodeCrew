import React, { Component } from 'react';
import './App.css';
import UserCollection from "./UserCollection";
const userCollectionArray = require('./rawData');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>User Collection App</h1>
        <UserCollection allEntries={userCollectionArray}/>
      </div>
    );
  }
}

export default App;
