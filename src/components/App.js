import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [childClass, setChildClass] = useState("")
  const [filterCat, setFilterCat] = useState("")
  
  function handleClick(e) {
    setChildClass((childClass) => childClass = "selected")
      e.target.className = childClass
    setFilterCat((filterCat) => filterCat = e.target.textContent)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} class={childClass} onChangeClass={handleClick}/>
      <NewTaskForm />
      <TaskList filter={filterCat} />
    </div>
  );
}

export default App;
