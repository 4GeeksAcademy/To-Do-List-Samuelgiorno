import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="todo-container">
      <h2 className="text-center">To-Do List</h2>

      <div className="input-group">
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={addTask}
          placeholder="Presiona Enter para agregar una nueva tarea"
        />
      </div>

      {tasks.length === 0 ? (
        <p className="no-tasks-message">No hay tareas, añadir tareas</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{task}</span>
              <button className="remove-btn" onClick={() => removeTask(task)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
