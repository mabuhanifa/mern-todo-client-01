import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-around items-center text-2xl font-andada m-2 bg-[#3F4E4F] text-gray-100 rounded-lg">
        <Link to="/todo" className="mx-20 my-5">
          To-Do
        </Link>
        <Link to="/completed" className="mx-20 my-5">
          Completed Task
        </Link>
        <Link to="/calender" className="mx-20 my-5">
          Calendar
        </Link>
      </div>
    </div>
  );
};

export default Header;
