import { Todos } from "./components/Todos";
import { CreateTodo } from "./components/CreateTodoComp";

function App() {
  return (
    <div className=" flex flex-col gap-5 p-20 place-items-center">
      <CreateTodo />
      <Todos />
    </div>
  );
}

export default App;
