import { useDispatch } from "react-redux";
import { checkedTodo, deleteTodo } from "../../redux/todos/todoSlice";
import { Todo } from "../TodoList/TodoList";
import { StyledLi } from "./TodoItem.styled";
import CreateIcon from "@mui/icons-material/Create";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface TodoItemProps {
  todo: Todo;
  handleClickOpen: (todo: Todo) => void;
}

export const TodoItem = ({ todo, handleClickOpen }: TodoItemProps) => {
  const dispatch = useDispatch();
  return (
    <StyledLi>
      <div>
        <input
          checked={todo.completed}
          onChange={() => {
            dispatch(checkedTodo(todo));
          }}
          type="checkbox"
        />
        <span> {todo.title}</span>
      </div>
      <div>
        <button onClick={() => handleClickOpen(todo)}>
          <CreateIcon />
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          <DeleteForeverIcon />
        </button>
      </div>
    </StyledLi>
  );
};
