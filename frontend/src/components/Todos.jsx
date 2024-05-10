import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import axios from 'axios'

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos/").then((response) => {
      setTodos(response.data.todos);
    });
  }, [todos]);

  return (
    <div className="w-full flex flex-col justify-center place-items-center text-white gap-10 p-14">
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
