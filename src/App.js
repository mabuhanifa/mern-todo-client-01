import { Route, Routes } from "react-router-dom";
import Calender from "./component/Calender";
import Completed from "./component/Completed";
import Header from "./component/Header";
import ToDo from "./component/ToDo";

function App() {
  return (
    <div className="max-w-7xl mx-auto bg-blue-400 h-screen rounded-lg">
      <Header></Header>
      <Routes>
        <Route path="/todo" element={<ToDo />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
