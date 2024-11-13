import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import TaskItem from '../TaskItem'
import './index.css'

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleCreateTask = async () => {
    const object = {
        id : uuidv4(),
        newTaskTitle
    }
    setTasks(prevState => [...prevState, object])
    setNewTaskTitle("");
  };

  const onDelete = (id) => {
    const filterData = tasks.filter(eachItem => eachItem.id !== id);
    setTasks(filterData)
  }

  return (
    <div className="app">
      <h2 className="heading"> Create Todo List</h2>
      <div className="input-form-card">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New Task"
          className="form"
        />
        <button onClick={handleCreateTask} className="add-btn">Add Task</button>
      </div>
      <ul className="ul-container">
        {tasks.map(each => (
            <TaskItem key={each.id} details={each} onDelete={onDelete}/>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
