import React, { useState, useReducer, useContext } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./TodoContext";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <>
        <div className="p-4 bg-red-400 text-center text-white font-semibold text-2xl">
          TodoList Typescript
        </div>
        <InputField />
        <TodoList />
      </>
    </TodoProvider>
  );
};

export default App;
