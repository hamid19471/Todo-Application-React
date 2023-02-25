import React from "react";
import styles from "./TodoList.module.css";
import TodoItems from "../TodoItem/TodoItem";
const TodoList = ({ todos, onDelete, onStatus, editMode }) => {
  return (
    <div className={styles.tasks}>
      {todos
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <TodoItems
            key={item.id}
            item={item}
            onDelete={onDelete}
            onStatus={onStatus}
            editMode={editMode}
          />
        ))}
    </div>
  );
};

export default TodoList;
