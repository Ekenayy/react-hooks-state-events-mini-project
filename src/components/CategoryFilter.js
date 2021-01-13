import React, { useState } from "react";

function CategoryFilter( {categories, onChangeClass, chosenCat } ) {
  
  // console.log(props)

  
   const allCategories = categories.map(category => {
     return <button 
     className = {chosenCat === category ? "selected": "null"}
     onClick={() => onChangeClass(category)}
     >
       {category}
       </button>
   })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {allCategories}
    </div>
  );
}

export default CategoryFilter;
