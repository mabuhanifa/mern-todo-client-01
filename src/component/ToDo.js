import AllTodo from "./AllTodo";

const ToDo = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const todo = event.target.task.value;
    console.log(todo);
    const task = { todo };

    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {});
    event.target.reset();
  };
  return (
    <div>
      <div className="flex justify-center my-20" >
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="task"
            placeholder="Add new Task"
            className="p-2.5 bg-[#eceeef] w-96 rounded"
          />
          <input
            type="submit"
            value="Add new Task"
            className="btn bg-[#8A9196] mx-5 text-black hover:bg-white "
          />
        </form>
      </div>

      <AllTodo></AllTodo>
    </div>
  );
};

export default ToDo;
