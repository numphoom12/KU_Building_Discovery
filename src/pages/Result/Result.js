import React from "react";
//import History from "../History/History";
import ResultCard from "../../components/ResultCard/ResultCard";

const Answer = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="text-xl font-bold my-4">Your Result</h1>
        <ResultCard name={"Engineer building"} />
      </div>
      {/* <div>
        <History />
      </div> */}
    </div>
  );
};

export default Answer;
