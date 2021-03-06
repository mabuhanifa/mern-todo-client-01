import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  const [date, setDate] = useState(new Date());
  
  return (
    <div className="text-gray-700 w-96 mx-auto bg-white p-10 my-20">
      <Calendar onChange={setDate} value={date} />
      {date.toString()}
    </div>
  );
};

export default Calender;
