import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const AllTodo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get("http://localhost:5000/todo");
      setTodo(res.data);
    };
    fetchTodo();
  }, [todo]);
  console.log(todo);
  return (
    <div>
      <div>
        {todo.map((todo) => {
          return <TodoList key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default AllTodo;
