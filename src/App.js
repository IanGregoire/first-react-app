import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./Form";
import FilterButton from "./FilterButton";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.compelted,
  Completed: task => task.compelted
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('all');

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if(id === task.id) {
        return {...task, completed: !task.compelted}
      }
      return task;
    });
    setTasks(updatedTasks);
  }  
  const taskList = tasks
.filter(FILTER_MAP[filter])
.map(task => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));

  const tasksNoun = taskList.length != 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  

  function addTask(name) {
    const newTask = { id: "todo-"+nanoid() , name: name, compelted: false };
    setTasks([...tasks, newTask]);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if(id === task.id) {
        return {...tasks, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(tasks => id !== task.id);
    setTasks(remainingTasks);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
      {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;