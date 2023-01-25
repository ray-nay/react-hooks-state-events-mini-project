import React from "react";

function NewTaskForm({categories, onAddText, onAddCategory, onTaskFormSubmit}) {

  const options = categories.filter(category=>category !== "All");
  const optionList = options.map(option=>{
    return <option key={option}>{option}</option>
  })
   
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={onAddText} />
      </label>
      <label>
        Category
        <select name="category" onChange={onAddCategory}>
          {/* render <option> elements for each category here */}
          {optionList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;