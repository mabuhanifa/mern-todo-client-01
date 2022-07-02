import axios from "axios";
import { useEffect, useState } from "react";
import CompletedList from "./CompletedList";

const Completed = () => {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get(
        "https://degrassi-moose-90311.herokuapp.com/completed"
      );
      setCompleted(res.data);
    };
    fetchTodo();
  }, []);
  return (
    <div className="py-20">
      {completed ? (
        <div>
          {completed.map((completed) => {
            return <CompletedList key={completed._id} completed={completed} />;
          })}
        </div>
      ) : (
        <h2 className="text-2xl font bold"> Loading....</h2>
      )}
    </div>
  );
};

export default Completed;
