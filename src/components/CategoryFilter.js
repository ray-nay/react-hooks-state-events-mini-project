import React from "react";

function CategoryFilter({categories, handleCategories}) {
 
  const categoriesDisplay = categories.map((category, index)=>{
    return <button key={index} onClick={handleCategories} value={category} >{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoriesDisplay}
    </div>
  );
}

export default CategoryFilter;
