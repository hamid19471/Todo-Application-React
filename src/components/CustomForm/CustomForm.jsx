import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
const CustomForm = ({ addTodos }) => {
  const [todo, setTodo] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      title: todo,
      status: false
    };
    addTodos(newTodo);
    setTodo("");
  };
  return (
    <form className="todo" onSubmit={handleSubmitForm}>
      <div className="wrapper">
        <input
          type="text"
          id="todo"
          value={todo}
          onInput={(e) => setTodo(e.target.value)}
          className="input"
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task/Todo"
        />
        <label htmlFor="todo" className="label">
          Enter Task/Todo
        </label>
      </div>
      <button className="btn">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
