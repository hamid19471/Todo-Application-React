import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const EditForm = ({ editTodo, updateTodo }) => {
  const [editTodoName, setEditTodoName] = useState(editTodo.title);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    updateTodo({ ...editTodo, title: editTodoName });
  };
  return (
    <div role="dialog" aria-label="editTask">
      <form className="todo" onSubmit={handleSubmitForm}>
        <div className="wrapper">
          <input
            type="text"
            id="edit"
            value={editTodoName}
            onInput={(e) => setEditTodoName(e.target.value)}
            className="input"
            required
            autoFocus
            maxLength={60}
            placeholder="Edit Task/Todo"
          />
          <label htmlFor="edit" className="label">
            Edit Task/Todo
          </label>
        </div>
        <button className="btn">
          <CheckIcon />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
