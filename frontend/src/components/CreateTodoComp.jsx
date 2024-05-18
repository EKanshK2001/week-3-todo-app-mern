import { useRef, useState } from "react";
import { Button } from "./ButtonComp";
import axios from "axios";

export const CreateTodo = () => {

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)

  const handleSubmit = () => {
    axios
      .post("https://week-3-todo-app-mern.onrender.com/todos/create", todoBody)
      .then(() => {
        alert("todo added!");
        if (titleRef.current && descriptionRef.current) {
          titleRef.current.value = "";
          descriptionRef.current.value = "";
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          alert(error.message);
        }
      });
  };

  const handleChange = (e) => {
    setTodoBody((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const [todoBody, setTodoBody] = useState({ title: "", description: "" });

  return (
    <div className="w-full flex justify-center p-14 gap-2 flex-col md:flex-row">
      <input
        ref={titleRef}
        id="title"
        className="px-5 py-3 border md:w-1/3 w-full"
        type="text"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        ref={descriptionRef}
        id="description"
        className="px-5 py-3 border md:w-1/2 w-full"
        type="text"
        placeholder="description"
        onChange={handleChange}
      />
      <Button
        className=" md:w-1/6 w-full"
        text="create todo"
        onClick={handleSubmit}
      />
    </div>
  );
};
