import React, { useState } from 'react';
import { FormControlLabel, Checkbox, TextField } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';


function ToDoItem(props) {
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState(props.item);

  // const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  //   const [edit, setEdit] = useState({
  //     id: null,
  //     value: ''
  //   });

  // const removeTodo = id => {
  //   const removedArr = [...todos].filter(todo => todo.id !== id);

  //   setTodos(removedArr);
  // };

  const handleDelete = () => {
    const list = [...props.list].filter(todo =>  todo !== props.item);
    // console.log(list);
    // console.log({ idx: props.idx, item: text});
    // list.splice(props.idx, 1);
    props.setList(list);
  }


  const date = new Intl.DateTimeFormat('en-US',
    {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(Date.now())

  if (display) {
    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
            />
          }
          label={text}
          // onClick={() => setDisplay(false)}
        />
        {date}
        <EditIcon onClick={() => setDisplay(false)} />
        <DeleteForeverIcon onClick={() => handleDelete()} />
      </div>
    );
  } else {
    return (
      <div>
        <TextField
          placeholder="To-do item"
          data-testid="new-item-input"
          value={text}
          onChange={e => {setText(e.target.value)}}
        />
        <Button 
          data-testid="new-item-button"
          onClick={() => setDisplay(true)}>
            Add
        </Button>
      </div>
  )}
}

export default ToDoItem;