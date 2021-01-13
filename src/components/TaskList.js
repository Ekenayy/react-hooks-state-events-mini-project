import React, { useState } from "react";
import Task from "./Task"
// import { CATEGORIES, TASKS } from "../data";

function TaskList( {filter, passedTasks} ) {

  // const [deleted, setDeleted] = useState(false)

  const filteredTasks = passedTasks.filter(task => {
    if (filter === "All") {
      return passedTasks
    } else {
   return task.category.toLowerCase().includes(filter.toLowerCase())
    }
  })

  const handleDelete = (e) => {
    e.target.parentElement.remove() 
  }

  const allTasks = filteredTasks.map((task) => {
    return <Task onDelete={handleDelete} key={task.text} text={task.text} category={task.category}/>
  })

  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;
