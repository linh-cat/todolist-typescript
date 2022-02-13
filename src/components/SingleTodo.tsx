import React, { useState } from "react";
import { Todo } from "../interface/todo";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillEdit,
} from "react-icons/ai";

type Props = {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
  const [editMode, setEditMode] = useState<Boolean>(false);
  const [editValueChange, setEditValueChange] = useState<string>(todo.value);

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const handleDone = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEditChange = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, value: editValueChange } : todo
      )
    );
    setEditMode(false);
  };

  return (
    <form
      className="todo_single"
      onSubmit={(e) => handleEditChange(e, todo.id)}
    >
      {editMode ? (
        <input
          value={editValueChange}
          onChange={(e) => setEditValueChange(e.target.value)}
        />
      ) : (
        <span
          className={
            todo.isDone ? "todo__single--text done" : "todo__single--text"
          }
          onClick={() => setEditMode(true)}
        >
          {todo.value}
        </span>
      )}

      <div className="todo__check">
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <AiFillCheckCircle />
        </span>
        <span className="icon" onClick={() => setEditMode(true)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillCloseCircle />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
