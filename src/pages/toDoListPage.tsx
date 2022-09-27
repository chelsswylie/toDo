import React, { useState } from "react";
import { TodoListItem } from "../molecule/listItem";
import { Todo } from "../types/listTypes";

interface Props {}

export const ToDoPage: React.FC<Props> = ({}) => {
  const initialTodos: Todo[] = [
    {
      text: "Walk the dog",
      complete: false,
    },
    {
      text: "Write app",
      complete: true,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const toggleCheckbox = (selectedTodo: Todo) => {
    const newTodos = todos.map((i) => {
      if (i === selectedTodo) {
        return {
          ...i,
          complete: !i.complete,
        };
      }
      return i;
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      <TodoListItem todo={todos[0]} toggleTodo={toggleCheckbox} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleCheckbox} />
    </ul>
  );
};
