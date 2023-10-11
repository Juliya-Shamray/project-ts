import { Buttons } from "../Buttons/Buttons";
import { AddTodoForm } from "./../AddTodo/AddTodoForm";
import { TodoList } from "./../TodoList/TodoList";

export const Todos = () => {
  return (
    <>
      <AddTodoForm />
      <Buttons />
      <TodoList />
    </>
  );
};
