import { RootState } from "../store";

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectFilter = (state: RootState) => state.todos.filter;
