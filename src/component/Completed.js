import axios from "axios";
import { useEffect, useState } from "react";
import CompletedList from "./CompletedList";

const Completed = () => {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get("http://localhost:5000/completed");
      setCompleted(res.data);
    };
    fetchTodo();
  }, []);
  return <div>
  <div>
    {completed.map((completed) => {
      return <CompletedList key={completed._id} completed={completed} />;
    })}
  </div>
</div>
};

export default Completed;
