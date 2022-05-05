export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export enum ActionType {
  Add = "add",
  Delete = "delete",
  Edit = "edit",
  Complete = "complete",
}

type Action =
  | { type: ActionType.Add; payload: string }
  | { type: ActionType.Delete; payload: number }
  | { type: ActionType.Edit; payload: { id: number; todo: string } }
  | { type: ActionType.Complete; payload: number };

export const TodoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case ActionType.Add:
      if (action.payload === "") {
        return state;
      }
      return [
        ...state,
        { id: Math.random(), todo: action.payload, isCompleted: false },
      ];

    case ActionType.Delete:
      return state.filter((todo) => todo.id !== action.payload);

    case ActionType.Edit:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo }
          : todo
      );

    case ActionType.Complete:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    default:
      return state;
  }
};

// type Action =
//   | { type: "add"; payload: string }
//   | { type: "delete"; payload: number }
//   | { type: "edit"; payload: { id: number; todo: string } }
//   | { type: "complete"; payload: number };

// export const TodoReducer = (state: Todo[], action: Action) => {
//   switch (action.type) {
//     case "add":
//       return [
//         ...state,
//         { id: Math.random(), todo: action.payload, isCompleted: false },
//       ];

//     case "delete":
//       return state.filter((todo) => todo.id !== action.payload);

//     case "edit":
//       return state.map((todo) =>
//         todo.id === action.payload.id
//           ? { ...todo, todo: action.payload.todo }
//           : todo
//       );

//     case "complete":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, isCompleted: !todo.isCompleted }
//           : todo
//       );
//     default:
//       return state;
//   }
// };
