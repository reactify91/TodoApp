import React, { createContext, useContext, useState, useReducer } from "react";
import { ActionType, Todo } from "./model";
import { TodoReducer } from "./model";
export type TodoContextProp = {
  state: Todo[];
  dispatch: React.Dispatch<any>;
};

type TodoProviderProps = {
  children: React.ReactNode;
};

export const TodoContext = createContext<TodoContextProp>({
  state: [{ id: Math.random(), isCompleted: false, todo: "Jeremy is broken" }],
  dispatch: () => null,
});

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [state, dispatch] = useReducer(TodoReducer, todos);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoContext");
  }
  return context;
};
