import React, { useState, useRef, useReducer, useContext } from "react";
import { useTodoContext } from "../TodoContext";
import { TodoReducer } from "../model";
import { ActionType } from "../model";

const InputField: React.FC = () => {
  const { state, dispatch } = useTodoContext();
  const [todo, setTodo] = useState<string>("");
  return (
    <form
      className="flex justify-center items-center my-8  outline-none ring-0 focus:outline-none focus:ring-0 "
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: ActionType.Add, payload: todo });
        setTodo("");
      }}
    >
      <div className="border-gray-700 border-2 rounded-full">
        <input
          type="text"
          placeholder="Add a task"
          className="outline-none w-64 rounded-l-full  text-gray-600 text-sm indent-2  p-4  border-r-2 border-gray-700 focus:shadow-heaven transition-shadow duration-300 ease-linear origin-bottom"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className=" outline-none text-md text-gray-700 p-4 text-sm hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-linear rounded-r-full">
          Add
        </button>
      </div>
    </form>
  );
};

export default InputField;
