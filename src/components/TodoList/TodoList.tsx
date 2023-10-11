import { useSelector, useDispatch } from "react-redux";
import { selectFilter, selectTodos } from "../../redux/todos/selectors";
import { updateTodo } from "../../redux/todos/todoSlice";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { TodoItem } from "../TodoItem/TodoItem";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const TodoList = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = (todo: Todo) => {
    setContent(todo);
    setTitle(todo.title);
    setOpen(true);
  };
  const [content, setContent] = useState({
    id: 0,
    title: "",
    completed: false,
  });

  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const handleSaveChanges = () => {
    dispatch(updateTodo({ ...content, title: title }));
    setOpen(false);
  };
  const filteredTasks = todos.filter((todo) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !todo.completed;
    } else if (filter === "Completed") {
      return todo.completed;
    }
    return false;
  });

  return (
    <>
      <ul>
        {filteredTasks.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleClickOpen={handleClickOpen}
          />
        ))}
      </ul>
      {open && (
        <Modal
          setOpen={setOpen}
          title={title}
          setTitle={setTitle}
          handleSaveChanges={handleSaveChanges}
        />
      )}
    </>
  );
};
