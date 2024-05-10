import { useState } from "react";
import { Button } from "./ButtonComp";
import axios from "axios";

export const CreateTodo = () => {
  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/todos/create", todoBody)
      .then(() => {
        alert("todo added!");
      });
  };

  const handleChange = (e) => {
    setTodoBody((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const [todoBody, setTodoBody] = useState({ title: "", description: "" });

  return (
    <div className="w-full flex justify-center p-14 gap-2">
      <input
        id="title"
        className="px-5 py-3 border w-1/3"
        type="text"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        id="description"
        className="px-5 py-3 border w-1/2"
        type="text"
        placeholder="description"
        onChange={handleChange}
      />
      <Button className=" w-1/6" text="create todo" onClick={handleSubmit} />
    </div>
  );
};
