import React, { useState } from "react";
import ToDoItem from './ToDoItem.js'
import chores2 from "./choresArray.js"

function ToDoList(props) {
  //Array testing
  // const chores2 = ["wash car", "do laundry", "test"]

  // const [list, setList] = useState(chores2);

// deleteTask(item){
//   return <li onClick={() => this.delete(item.key)} 
//               key={item.key}>{item.text}</li>
// }

  return (
    <div className="list">
      {props.list.map((entry, idx) => (
        <ToDoItem 
          key={idx}
          idx={idx}
          className="listItem"
          item={entry}
          list={props.list}
          setList={props.setList}
        />
      ))}
    </div>
  );
}
export default ToDoList;
