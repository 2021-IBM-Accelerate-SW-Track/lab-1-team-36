import React, { useState } from "react";
import ToDoItem from './ToDoItem.js'
// import chores from "./choresArray.js"

function ToDoList() {
  //Array testing
  const chores2 = ["wash car", "do laundry", "test"]

  const [list, setList] = useState(chores2);

  return (
    <div className="list">
      {list.map((entry, idx) => (
        <ToDoItem 
          key={idx}
          idx={idx}
          className="listItem"
          item={entry}
          list={list}
          setList={setList}
        />
      ))}
    </div>
  );
}
export default ToDoList;
