import { Route, Routes } from "react-router-dom";
import Calender from "./component/Calender";
import Completed from "./component/Completed";
import Header from "./component/Header";
import SingleTodo from "./component/SingleTodo";
import ToDo from "./component/ToDo";

function App() {
  return (
    <div className="max-w-7xl mx-auto bg-[#272B30] h-screen rounded-lg">
      <Header></Header>
      <Routes>
        <Route path="/todo" element={<ToDo />} />
        <Route path="/todo/:id" element={<SingleTodo />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
