import React from "react";
import { Todo } from "../interface/todo";
import SingleTodo from "./SingleTodo";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <ul className="todo_list">
      {todoList.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </ul>
  );
};

export default TodoList;
