import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleTodo = () => {
  const { id } = useParams();
  const [singleTodo, setSingleTodo] = useState();
  console.log(singleTodo);
  useEffect(() => {
    const url = `http://localhost:5000/todo/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleTodo(data));
  }, [id,singleTodo]);
  const submitHandler = (e) => {
    e.preventDefault();
    const desc = e.target.description.value;
    const todo = e.target.todo.value;
    const url = `http://localhost:5000/todo/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: todo,
        desc: desc,
      }),
    });
    e.target.reset();
  };

  return (
    <div>
      <h1 className="text-center text-gray-50 text-2xl mt-10 font-bold">
        Update Your Task{" "}
      </h1>
      <div className="flex justify-center my-20">
        <form onSubmit={submitHandler}>
          <label htmlFor="task" className=" text-gray-50">
           Update Task Name :{" "}
          </label>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder={singleTodo?.todo}
            className="block my-2 p-3 bg-gray-200 w-96 rounded"
          />
          <br />
          <label htmlFor="task" className="text-gray-50">
         Update Description :{" "}
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder={singleTodo?.desc ? singleTodo?.desc : "Add a description"}
            className="block my-2 p-3 h-32 bg-gray-200 w-96 rounded"
          ></textarea>
          <input
            type="submit"
            value="Update"
            className="btn block btn-primary my-5 w-96"
          />
        </form>
      </div>
    </div>
  );
};

export default SingleTodo;
