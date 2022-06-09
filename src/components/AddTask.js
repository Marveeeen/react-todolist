import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = ({ newTask, setNewTask, handleAddTask }) => {
  const inputRef = useRef();
  return (
    <form>
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
      <FaPlus onClick={handleAddTask} role="button" tabIndex="0" />
    </form>
  );
};

export default AddTask;
