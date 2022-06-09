import { FaTrashAlt } from 'react-icons/fa'

const Content = ({ tasks, handleChecked, handleDelete}) => {
  return (
    <main>
        {tasks.length ? (
          <ul>
            {tasks.map(task => (
              <li className='task' key={task.id}>
                <input 
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleChecked(task.id)}
                  />
                <label>{task.task}</label>
                <FaTrashAlt 
                    onClick={() => handleDelete(task.id)}
                    role='button'
                    tabIndex='0'
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>Your task is empty.</p>
        )}
      </main>
  )
}

export default Content