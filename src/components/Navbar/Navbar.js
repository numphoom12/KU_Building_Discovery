import React from "react";
import KUlogo from "../../assets/kasetLogo/KUlogo.png";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(page);
  };

  return (
    <>
      <nav className="flex justify-between w-full mb-10 p-4 shadow-md">
        <button
          onClick={() => handleClick("/")}
          className="flex gap-2 flex-center"
        >
          <img
            src={KUlogo}
            alt="ku logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-greenPrimary-500 text-2xl font-extrabold mt-2">
            Buildings <span className="text-greenSecondary-700">Discovery</span>
          </h1>
        </button>

        <div className="flex gap-3">
          <Button
            className="rounded-full"
            variant="outlined"
            onClick={() => handleClick("/result")}
          >
            History
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
