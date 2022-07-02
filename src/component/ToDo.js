import AllTodo from "./AllTodo";

const ToDo = () => {
  const submitHandler = (event) => {
    if (event.target.task.value === " ") {
      return;
    }
   else if (event) {
      event.preventDefault();
      const todo = event.target.task.value;
      const task = { todo };
      fetch("https://degrassi-moose-90311.herokuapp.com/todo", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((data) => {});

      event.target.reset();
    }
  };
  return (
    <div>
      <div className="flex justify-center my-5 sm:my-20 pb-5">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="task"
            placeholder="Add new Task"
            className="p-2.5 bg-[#eceeef] w-80  sm:w-96 rounded mx-auto"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                if (event.target.value === " ") {
                  return;
                } else {
                  submitHandler(event.target.value);
                }
              }
            }}
          />
          <input
            type="submit"
            value="Add new Task"
            className="btn bg-purple-600 w-40 mx-auto sm:mx-5 my-5 block sm:inline text-black hover:bg-white "
          />
        </form>
      </div>

      <AllTodo></AllTodo>
    </div>
  );
};

export default ToDo;
