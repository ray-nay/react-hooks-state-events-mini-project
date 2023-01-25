import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[items, setItems] = useState(TASKS);
  const[catBtn, setCatBtn] = useState("All");
  const[addText, setAddText] = useState("");
  const[addCategory, setAddCategory] = useState("")

  function handleAddText(e){
    const itemText = e.target.value;
    setAddText(itemText)
  }
  function handleAddcategory(e){
    const itemCategory = e.target.value;
    setAddCategory(itemCategory)
  }

  function handleAddItem(e){
    e.preventDefault();
    const newItem = {
      text: addText,
      category: addCategory,
    }

    const newItems = [...items, newItem];
    setItems(newItems);
  }
  function handleDelete(text){
    const notDeletedTasks = items.filter(task=>task.text !== text);
    setItems(notDeletedTasks)
  }
  function handleCategories(e){
    e.target.className = "selected";
    let value = e.target.value;
    // let filteredItems;
    setCatBtn(value);
    if(value==="All"){
      setItems(TASKS)
    }else{
      const filteredItems = items.filter(item=>item.category===value);
      setItems(filteredItems);
    }
    
    //setCatBtn("");
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategories={handleCategories}/>
      <NewTaskForm 
      categories={CATEGORIES} 
      onTaskFormSubmit={handleAddItem}
      onAddText = {handleAddText}
      onAddCategory = {handleAddcategory}
      />
      <TaskList tasks={items} handleDelete={handleDelete}/>
      
    </div>
  );
}

export default App;
  
