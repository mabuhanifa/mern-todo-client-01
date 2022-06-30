import { BsCheck2Square } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
const TodoList = ({ todo }) => {
  const deleteItem = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (proceed) {
      const url = `http://localhost:5000/todo/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  const handleComplete = () => {
    fetch("http://localhost:5000/completed", {
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
    <div className="my-2 bg-[#DCD7C9] mx-40 rounded-lg flex relative">
      <button
        onClick={handleComplete}
        className="h-14 mx-5 flex items-center text-xl"
      >
        <BsCheck2Square />
      </button>
      <p className="h-14 px-5 flex items-center">{todo.todo}</p>
      <button className="h-14 mx-5 flex items-center text-xl absolute right-10">
        <FiEdit />
      </button>
    </div>
  );
};

export default TodoList;
