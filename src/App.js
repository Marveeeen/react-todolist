import { useState } from "react";
import Content from "./Content";

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

  const today = new Date();
  
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
  
  return (
    <div className="App">
      <header>
        <h1>Tasks Management</h1>
      </header>
      <Content 
        tasks={tasks}
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
