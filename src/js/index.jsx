import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import ToDoList from "./components/ToDoList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);
