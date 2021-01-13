import React from "react";
// import TaskList from './TaskList'

function Task( {text, category, onDelete} ) {
  // console.log(onDelete)
  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button onClick={onDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
