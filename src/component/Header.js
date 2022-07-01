import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-around items-center text-2xl font-andada text-gray-100 rounded-lg sm:mx-10 sm:pt-10">
        <NavLink
          to="/todo"
          className={({ isActive }) =>
            (isActive ? "text-blue-600" : "text-white hover:text-blue-400") +
            " my-3 text-left font-bold"
          }
        >
          To-Do
        </NavLink>
        <NavLink
          to="/completed"
          className={({ isActive }) =>
            (isActive ? "text-blue-600" : "text-white hover:text-blue-400") +
            " my-3 text-left font-bold"
          }
        >
          Completed Task
        </NavLink>
        <NavLink
          to="/calender"
          className={({ isActive }) =>
            (isActive ? "text-blue-600" : "text-white hover:text-blue-400") +
            " my-3 text-left font-bold "
          }
        >
          Calendar
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
