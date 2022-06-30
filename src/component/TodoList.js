
const TodoList = ({todo}) => {
    return (
        <div className="my-2 bg-[#DCD7C9] mx-40 rounded-lg flex">
            <input className="h-14 mx-5 flex items-center" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <p className="h-14 px-5 flex items-center">{todo.todo}</p>
        </div>
    );
};

export default TodoList;