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
  }, [completed]);
  return <div>
  <div>
    {completed.map((complete) => {
      return <CompletedList key={complete.id} complete={complete} />;
    })}
  </div>
</div>
};

export default Completed;
