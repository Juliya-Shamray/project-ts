import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Task[];
  filter: string;
}
const initialState: TodoState = {
  todos: [],
  filter: "All",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; title: string; completed: boolean }>
    ) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    checkedTodo: (
      state,
      action: PayloadAction<{ id: number; completed: boolean; title: string }>
    ) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});
export const { addTask, deleteTodo, checkedTodo, updateTodo, setFilter } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
