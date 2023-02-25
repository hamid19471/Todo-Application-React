import { useState } from "react";
import styles from "./TodoItem.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

const TodoItem = ({ item, onDelete, onStatus, editMode }) => {
  const [isChecked, setIschecked] = useState(item.status);
  const handleStatusTodo = (e) => {
    setIschecked(!isChecked);
    onStatus(item.id);
  };
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleStatusTodo}
          name={item.title}
          id={item.id}
        />
        <label htmlFor={item.id} className={styles.label}>
          {item.title}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className={isChecked ? "hidden" : "btn"}
          aria-label={`edit ${item.title} task`}
          onClick={() => editMode(item)}
        >
          <PencilSquareIcon />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${item.name} Task`}
          onClick={() => onDelete(item.id)}
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
