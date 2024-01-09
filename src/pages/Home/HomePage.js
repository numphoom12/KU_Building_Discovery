import React from "react";
import { Button } from "@material-tailwind/react";
import IEBuilding from "../../assets/KUbuilding/IEBuilding.png";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../components/ImageUploader/ImageUploader";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(page);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-center md:gap-4 p-4 px-8">
      <div className="text-center flex-1 px-5">
        <img src={IEBuilding} alt="IEBuilding" />
        <h1 className="text-center text-5xl my-4 mt-5 font-extrabold leading-[1.15] bg-gradient-to-r from-greenSecondary-400 to-greenPrimary-700 bg-clip-text text-transparent">
          <span className=" text-greenPrimary-300">Welcome to</span> KU
          Buildings Discovery
        </h1>
        <h5 className="text-center text-sm text-gray-700 my-4">
          Welcome to our picturesque journey through the iconic buildings of
          Kasetsart University. As you capture stunning snapshots of the campus,
          our web application is ready to guide you by identifying the names of
          each building.
        </h5>
      </div>

      <div className="flex-1 mx-6">
        <div className="lg:hidden w-full flex flex-col  sm:justify-center sm:items-center">
          <Button
            className="rounded-full bg-gradient-to-r from-greenPrimary-50 to-greenPrimary-500"
            onClick={() => handleClick("/photo")}
          >
            Take a picture
          </Button>
        </div>

        <ImageUploader />
      </div>
    </div>
  );
};

export default HomePage;
