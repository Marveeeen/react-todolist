import { useState, useRef } from "react";
import Content from "./Content";

import { FaPlus } from 'react-icons/fa'

function App() {
  const [tasks, setTasks]  = useState([
    {
      id: 1,
      done: false,
      task: "Tasks 1"
    },
    {
      id: 2,
      done: false,
      task: "Tasks 2"
    },
    {
      id: 3,
      done: false,
      task: "Tasks 3"
    },
  ])

  const [newTask, setNewTask] = useState('')
  const [search, setSearch] = useState('')

  const today = new Date();
  const inputRef = useRef();

  const filteredTasks = tasks.filter(task => ((task.task).toLowerCase()).includes(search.toLowerCase()))

  const AddNewTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id, done: false, task}
    const taskLists = [...tasks, myNewTask];
    setTasks(taskLists);
  }
  
  const handleChecked = (id) => {
    console.log(id)
    const taskLists = tasks.map(task =>
      task.id === id ? {...task, done: !task.done} : task 
    );

    setTasks(taskLists)
  }

  const handleDelete = (id) => {
    const taskLists = tasks.filter(task => task.id !== id)
    setTasks(taskLists);
  }

  const handleAddTask = () => {
    if (!newTask) return;
    AddNewTask(newTask);
    setNewTask('')
  }
  
  return (
    <div className="App">
      <header>
        <h1>Tasks Management</h1>
      </header>
      <form>
        <label htmlFor="addTask">Add Task</label>
        <input
          autoFocus
          type='text'
          id='addTask'
          ref={inputRef}
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add Task'
        />
          <FaPlus 
            onClick={handleAddTask}
            role='button'
            tabIndex='0'
          />
      </form>
      <form>
        <label htmlFor="search">Search</label>
        <input
          type='text'
          id='search'
          role='searchbox'
          placeholder='Search Items'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <Content 
        tasks={filteredTasks}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <footer>
          <p>Copyrigt &copy; {today.getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
