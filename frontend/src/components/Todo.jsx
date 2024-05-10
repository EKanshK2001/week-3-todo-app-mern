import { Button } from "./ButtonComp";
import axios from "axios";

export const Todo = ({ title, description, completed, id }) => {
  const handleClick = () => {
    console.log(id);
    axios.put("https://week-3-todo-app-mern.onrender.com/todos/markasdone", { id: id }).then(() => {
      alert("todo marked as done!");
    });
  };

  if (completed) {
    return (
      <>
        <div className="p-5 w-1/2 flex flex-col text-white">
          <div className="border py-4 px-2">
            <h1 className="px-5 py-3">{title}</h1>
            <h2 className="px-5 py-3">{description}</h2>
          </div>
          {/* <Button
            className="bg-neutral-100 text-black"
            text="completed!"
            onClick={handleClick}
          /> */}
          <button
            className="border px-5 py-3 bg-neutral-100 text-black"
            onClick={handleClick}
          >
            completed!
          </button>
          {/* <Button className="" text={completed? "completed!" : "mark as done"} onClick={handleClick}/> */}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="p-5 w-1/2 flex flex-col text-white">
          <div className="border py-4 px-2">
            <h1 className="px-5 py-3">{title}</h1>
            <h2 className="px-5 py-3">{description}</h2>
          </div>
          <Button className="" text="mark as done" onClick={handleClick} />
          {/* <Button className="" text={completed? "completed!" : "mark as done"} onClick={handleClick}/> */}
        </div>
      </>
    );
  }
};
