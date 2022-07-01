import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const AllTodo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get(
        "https://degrassi-moose-90311.herokuapp.com/todo"
      );
      setTodo(res.data);
    };
    fetchTodo();
  }, [todo]);
  return (
    <div>
      <div>
        {todo.map((todo) => {
          return <TodoList key={todo._id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default AllTodo;
