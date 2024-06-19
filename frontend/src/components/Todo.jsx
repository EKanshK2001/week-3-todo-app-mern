import { Button } from "./ButtonComp";
import axios from "axios";


export const Todo = ({ title, description, completed, id }) => {
  const handleClick = () => {
    console.log(id);
    axios
      .put("https://week-3-todo-app-mern.onrender.com/todos/markasdone", {
        id: id,
      })
      .then(() => {
        alert("todo marked as done!");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          alert(error.message);
        }
      });
  };

  return (
    <div className=" w-full flex flex-col text-white">
      <div className="border py-4 px-2">
        <h1 className="px-5 py-3">{title}</h1>
        <h2 className="px-5 py-3">{description}</h2>
      </div>
      <Button completed={completed} text="mark as done" onClick={handleClick} />
    </div>
  );
};
