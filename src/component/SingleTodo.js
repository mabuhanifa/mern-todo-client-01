import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleTodo = () => {
  const { id } = useParams();
  const [singleTodo, setSingleTodo] = useState();
  console.log(id,singleTodo);

  useEffect(() => {
    const url = `http://localhost:5000/todo/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleTodo(data));
  }, [id]);
  const submitHandler = () =>{

  };

  return <div>

    <div>
        <form onSubmit={submitHandler}>
            




        </form>
    </div>
    
  </div>;
};

export default SingleTodo;
