import React, { useEffect, useState } from 'react';
import { FormControlLabel, Checkbox, TextField } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';


function ToDoItem(props) {
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState(props.item);

  useEffect(() => setText(props.item), [props.item]);

  const handleAdd = () => {
    let dups = false;
    const list = [...props.list];
    for (let i = 1; i < list.length; i++) {
      if (list[i] === text) {
        alert('There can be no duplicates');
        dups = true;
      }
    }
    if (!dups) {
      list[props.idx] = text;
      props.setList(list);
      setDisplay(true);
    }
  }

  const handleDelete = () => {
    const list = [...props.list].filter(todo => todo !== text);
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
          onChange={e => setText(e.target.value)}
        />
        <Button 
          data-testid="new-item-button"
          onClick={() => handleAdd()}
        >
            Add
        </Button>
      </div>
  )}
}

export default ToDoItem;