import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = ({ newTask, setNewTask, handleAddTask }) => {
  const inputRef = useRef();
  return (
    <form className="addForm">
      <label htmlFor="addTask">Add Task</label>
      <input
        autoFocus
        type="text"
        id="addTask"
        ref={inputRef}
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add Task"
      />
      <button
        type="button"
        aria-label="Add Task"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus onClick={handleAddTask} role="button" tabIndex="0" />
      </button>
    </form>
  );
};

export default AddTask;
