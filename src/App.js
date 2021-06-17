//import Header from "./component/header"
import './App.css';
//import Button from '@material-ui/core/Button';
//import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

// function addItem() {
//   return (
    
//   );
// }

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <TextField id="outlined-basic" label="To-Do Item" variant="outlined" />
    </div>
  );
}

export default App;

