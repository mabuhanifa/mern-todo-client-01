import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-around items-center text-2xl font-andada   mt-10 bg-slate-400 m-5">
        <Link to="/todo" className="mx-20 my-5">To-Do</Link>
        <Link to="/completed" className="mx-20 my-5">Completed Task</Link>
        <Link to="/calender" className="mx-20 my-5">Calender</Link>
      </div>
    </div>
  );
};

export default Header;
