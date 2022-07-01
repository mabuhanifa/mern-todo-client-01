import { BsCheckSquareFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
const TodoList = ({ todo }) => {
  const deleteItem = (id) => {
    const url = `https://degrassi-moose-90311.herokuapp.com/todo/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  const handleComplete = () => {
    fetch("https://degrassi-moose-90311.herokuapp.com/completed", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {});
    deleteItem(todo._id);
  };
  return (
    <div className="my-5 bg-[#fff] mx-10 md:mx-20 lg:mx-40 rounded-lg flex relative">
      <button
        onClick={handleComplete}
        className="h-14 mx-5 flex items-center text-2xl"
      >
        <BsCheckSquareFill />
      </button>
      <p className="h-14 px-5 flex items-center ">{todo.todo}</p>
      <Link
        to={`/todo/${todo._id}`}
        className="h-14 mx-5 flex items-center text-2xl absolute right-10 "
      >
        <FiEdit />
      </Link>
    </div>
  );
};

export default TodoList;
