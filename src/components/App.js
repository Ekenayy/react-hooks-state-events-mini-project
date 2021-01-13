import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [childClass, setChildClass] = useState("")
  const [filterCat, setFilterCat] = useState("All")
  const [tasks, setTasks] = useState(TASKS)
  
  // console.log(tasks)
  function handleClick(category) {
   let clickedCat = category
    setFilterCat((filterCat) => filterCat = clickedCat)
  }

  function addProject(newTask) {

    const newTaskArray = [newTask, ...tasks]
    // console.log(newTaskArray)
    setTasks(newTaskArray)
  }

  console.log(tasks)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter chosenCat={filterCat} categories={CATEGORIES} class={childClass} onChangeClass={handleClick}/>
      <NewTaskForm categories={CATEGORIES} onAddProject={addProject} />
      <TaskList filter={filterCat} passedTasks={tasks} />
    </div>
  );
}

export default App;
