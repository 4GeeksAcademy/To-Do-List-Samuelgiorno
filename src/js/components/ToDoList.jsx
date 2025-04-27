import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addTask = () => {
    if (inputValue !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    } else {
      alert("La tarea no puede estar vacía");
    }
  };
  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="container mt-5">
      <h2>Lista de Tareas</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Agrega una nueva tarea"
        />
        <button className="btn btn-primary" onClick={addTask}>
          Agregar
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeTask(task)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
