import React from "react";
import Task from "./Task"
import { CATEGORIES, TASKS } from "../data";

function TaskList(props) {
  const lowerTasks = TASKS

  const filteredTasks = lowerTasks.filter(task => {
    if (props.filter === "All") {
      return lowerTasks
    } else {
   return task.category.toLowerCase().includes(props.filter.toLowerCase())
    }
  })

  // console.log(filteredTasks)
  const allTasks = filteredTasks.map((task) => {
    // console.log(task.text)
    return <Task key={task.text} text={task.text} category={task.category}/>
  })

  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;
