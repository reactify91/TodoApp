import React, { useRef, useState } from "react";
import { Todo } from "../model";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../TodoContext";

const TodoList: React.FC = () => {
  const { state, dispatch } = useTodoContext();
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {state.map((todo) => (
        <TodoItem
          key={todo.id}
          isCompleted={todo.isCompleted}
          todo={todo.todo}
          id={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
