import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import axios from "axios";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://week-3-todo-app-mern.onrender.com/todos")
      .then((response) => {
        setTodos(response.data.todos);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          alert(error.message);
        }
      });
  }, [todos]);

  return (
    loading
    ? <div className="text-white">fetching todos...(can take a minute)</div>
    : <div className="w-full md:grid md:grid-cols-2 flex flex-col justify-center place-items-center text-white gap-10 p-14">
        {todos.map((todo) => (
          <Todo
            key={todo._id}
            id={todo._id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
          />
        ))}
      </div>
  );
};
