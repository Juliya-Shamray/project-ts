import { setFilter } from "../../redux/todos/todoSlice";
import { useDispatch } from "react-redux";
import { StyledButtons } from "./Buttons.styled";

export const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      <button onClick={() => dispatch(setFilter("All"))}>All</button>
      <button onClick={() => dispatch(setFilter("Completed"))}>
        Completed
      </button>
      <button onClick={() => dispatch(setFilter("Active"))}>Active</button>
    </StyledButtons>
  );
};
