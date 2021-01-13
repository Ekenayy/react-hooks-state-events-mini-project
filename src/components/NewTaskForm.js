import React, {useState} from "react";

function NewTaskForm( {categories, onAddProject}) {
  // console.log(categories)

  // const [details, setDetails] = useState("Deets")
  const [formData, setFormData] = useState({
    text: "deets",
    category: "Food"
  })

    const allCategories = categories.map((category) => {
      return <option>{category}</option>
    })

    const handleFormChange = (e) => {
     
      let key = e.target.name 
      setFormData({
      ... formData, [key]: e.target.value
      })

    }

    // console.log(formData)

    const handleFormSubmit = ( (event) => {
      event.preventDefault()
      onAddProject(formData)
    })

  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={formData.details} onChange={handleFormChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleFormChange}>
          {allCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
