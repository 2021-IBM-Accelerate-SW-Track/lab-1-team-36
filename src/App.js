import './App.css';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import ToDoList from './component/toDoList/ToDoList.js';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
      <ToDoList 
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;

