import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  //CardFooter,
  Typography,
  //Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ResultCard = ({ name, image, desc }) => {
  const navigate = useNavigate();

  // const handleClick = (page) => {
  //   navigate(page);
  // };

  return (
    <Card className="mt-6 w-96 my-6" >
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={image}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className=" font-kanit" >
          {name}
        </Typography>
        {/* <Typography>{desc}</Typography> */}
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Button
          className="bg-gradient-to-r from-greenPrimary-50 to-greenPrimary-500"
          onClick={() => handleClick("/")}
        >
          Continue
        </Button>
      </CardFooter> */}
    </Card>
  );
};

export default ResultCard;
