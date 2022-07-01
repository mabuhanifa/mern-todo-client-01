import AllTodo from "./AllTodo";

const Home = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-2xl text-gray-300 my-10 sm:my-20" >Pending To Do</h2>
            <AllTodo></AllTodo>
        </div>
    );
};

export default Home;