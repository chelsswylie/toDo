import React from "react";
import { Todo, ToggleTodo } from "../types/listTypes";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complete}
        onClick={() => {
          toggleTodo(todo);
        }}
      />{" "}
      {todo.text}
    </li>
  );
};
