import React from "react";
import ToDoItem from './ToDoItem.js'

function ToDoList(props) {
  const myList = props.list.map((entry, idx) => {

    return <ToDoItem 
      key={idx}
      idx={idx}
      className="listItem"
      item={entry}
      list={props.list}
      setList={props.setList}
    />
  });

  return (
    <div className="list">
      {myList}
    </div>
  );
}
export default ToDoList;
