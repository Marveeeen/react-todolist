import { useState } from "react";

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
  
  return (
    <div className="App">
      <header>
        <h1>Tasks Management</h1>
      </header>
      <main>
        {tasks.length ? (
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                <input 
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleChecked(task.id)}
                  />
                <label>{task.task}</label>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your Task is empty.</p>
        )}
      </main>
      <footer>
          <p>Copyrigt &copy; {today.getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
