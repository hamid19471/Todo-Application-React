import React, { useState } from "react";
import CustomForm from "./components/CustomForm/CustomForm";
import EditForm from "./components/EditForm/EditForm";
import TodoList from "./components/TodoList/TodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const addTodos = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (id) => {
    const DeleteTodo = todos.filter((item) => item.id !== id);
    setTodos(DeleteTodo);
  };

  const toggleTodoCompleted = (id) => {
    const newStatus = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(newStatus);
  };

  const updateTodo = (todo) => {
    const newStatus = todos.map((item) =>
      item.id === todo.id ? { ...item, title: todo.title } : item
    );
    setTodos(newStatus);
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
  };

  const handleEditMode = (todo) => {
    setEditTodo(todo);
    setIsEditing(true);
  };

  return (
    <div className="container">
      <header>
        <h1>Todo Application</h1>
      </header>
      {isEditing && <EditForm editTodo={editTodo} updateTodo={updateTodo} />}
      <CustomForm addTodos={addTodos} />
      {todos.length === 0 ? (
        "There is no todos or tasks"
      ) : (
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onStatus={toggleTodoCompleted}
          editMode={handleEditMode}
        />
      )}
    </div>
  );
}
