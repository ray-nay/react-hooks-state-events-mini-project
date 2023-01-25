import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  const allTasks = tasks.map(task=>{
    return <Task key={task.text}
     text={task.text}
     category={task.category} 
     onDeleteItem={handleDelete}
     />
     
  })
  return (
    <div className="tasks">
      {allTasks}
      
    </div>
  );
}

export default TaskList;
