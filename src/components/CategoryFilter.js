import React, { useState } from "react";

function CategoryFilter( props ) {
  
  // console.log(props)

  
   const allCategories = props.categories.map(category => {
     return <button onClick={props.onChangeClass}>{category}</button>
   })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {allCategories}
    </div>
  );
}

export default CategoryFilter;
