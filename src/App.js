import { useState, useRef } from "react";

import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import SearchTask from "./components/SearchTask";

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
      <Header title='Task Management'/>
      <AddTask 
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
      <SearchTask 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        tasks={filteredTasks}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={tasks.length}/>
    </div>
  );
}

export default App;
