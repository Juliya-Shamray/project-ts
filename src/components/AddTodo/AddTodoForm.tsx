import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todos/todoSlice";
import { toast } from "react-toastify";

export const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "") {
      return toast.error("Field is empty", {
        position: "top-right",
      });
    } else {
      dispatch(addTask(value));
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};
