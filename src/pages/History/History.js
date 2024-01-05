import React from "react";
import ResultCard from "../../components/ResultCard/ResultCard";

const History = () => {
  return (
    <div>
      <hr></hr>
      <h1 className="m-6 text-center text-xl font-bold">History</h1>

      <div className="flex flex-wrap justify-center lg:flex-cols-3 gap-6 mx-6">
        <ResultCard name={"IE building"} />
        <ResultCard name={"IE building"} />
        <ResultCard name={"IE building"} />
        <ResultCard name={"IE building"} />
        <ResultCard name={"IE building"} />
        <ResultCard name={"IE building"} />
      </div>
    </div>
  );
};

export default History;
