import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import ResultCard from "../ResultCard/ResultCard";

import ieImage from "../../assets/KUbuilding/IEBuilding.png";
import civilImage from "../../assets/KUbuilding/civil.jpeg";
import comofficeImage from "../../assets/KUbuilding/comoffice.jpeg";
import mechanicImage from "../../assets/KUbuilding/mechanic.jpeg";

const ResultDialog = ({ open, result, onClose }) => {

  // console.log(result.mostProbability)
  const resultImage = {
    "Civil building": {
      image: civilImage,
      desc: result?.prediction?.civil,
    },
    "Com building": {
      image: civilImage,
      desc: result?.prediction?.com,
    },
    "OSC building": {
      image: comofficeImage,
      desc: result?.prediction?.comoffice,
    },
    "IE building": {
      image: ieImage,
      desc: result?.prediction?.ie,
    },
    "Mecha building": {
      image: mechanicImage,
      desc: result?.prediction?.mechanic,
    },
  };

  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogHeader>{result?.mostProbability || ""}</DialogHeader>
      <DialogBody>
        <ResultCard
          name={result?.mostProbability || ""}
          // image={resultImage[result?.mostProbability]?.image}
          image={resultImage[result?.mostProbability]?.image}
          desc={resultImage[result?.mostProbability]?.desc}
        />
      </DialogBody>
      <DialogFooter>
        <Button onClick={handleClose}>Close</Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ResultDialog;
