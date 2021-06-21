import './App.css';
//import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar'
import ToDoList from './component/toDoList/ToDoList.js';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import chores2 from './component/toDoList/choresArray';

function App() {
  const [list, setList] = useState([""]);

  function handleAdd(){
    const values = [...list];
    values.push("");
    setList(values);
  }
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            To-Do List
          </Typography>
          <IconButton onClick={() => handleAdd()}>
             <AddCircleIcon className="addButton" fontSize='default' />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <TextField id="outlined-basic" label="To-Do Item" variant="outlined" /> */}
      <ToDoList 
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;

