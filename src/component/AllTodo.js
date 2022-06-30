import axios from "axios";
import { useEffect, useState } from "react";

const AllTodo = () => {
    const [todo,setTodo] = useState([]);

    useEffect(() => {
        const fetchTodo = async ( ) => {

            const res = await axios.get('http://localhost:5000/todo');
            setTodo(res.data);
        };
        fetchTodo();
    }
    ,[])
    console.log(todo);
    return (
        <div>
            alltodo
        </div>
    );
};

export default AllTodo;