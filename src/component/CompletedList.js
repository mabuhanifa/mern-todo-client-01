import { BsCheck2Square } from "react-icons/bs";
const CompletedList = ({ completed }) => {
  return (
    <div className="my-2 bg-[#DCD7C9] mx-40 rounded-lg flex relative">
      <button className="h-14 mx-5 flex items-center text-xl">
        <BsCheck2Square />
      </button>
      <p className="h-14 px-5 flex items-center">{completed.todo}</p>
    </div>
  );
};

export default CompletedList;
