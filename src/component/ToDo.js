import axios from "axios";
import { useState } from "react";
import AllTodo from "./AllTodo";

const ToDo = () => {
  const [task, setTask] = useState("");

  const submitHandler = () => {
    axios.post();
  };
  return (
    <div>
      <div className="m-20">
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Add new Task"
            className="p-3 bg-gray-200 w-96"
          />
          <input
            type="submit"
            value="Add new Task"
            className="btn btn-primary mx-5"
          />
        </form>
      </div>

      <AllTodo></AllTodo>
    </div>
  );
};

export default ToDo;
