import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleTodo = () => {
  const { id } = useParams();
  const [singleTodo, setSingleTodo] = useState();
  console.log(singleTodo);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get(`http://localhost:5000/todo${id}`);
      setSingleTodo(res.data);
    };
    fetchTodo();
  }, [singleTodo, id]);

  return <div>hi</div>;
};

export default SingleTodo;
