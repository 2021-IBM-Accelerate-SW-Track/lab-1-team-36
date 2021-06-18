import React, { useState } from "react";

function toDoList() {
  const [list, setList] = useState([]);

  return (
    <div className="list">
      {list.map((entry) => (
        <toDoItem className="listItem"/>
    
        //{entry}</toDoItem>
      ))}
    </div>
  );
}

export default toDoList;
