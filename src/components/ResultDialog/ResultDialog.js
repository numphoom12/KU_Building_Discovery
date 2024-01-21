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
  const resultImage = {
    civil: {
      image: civilImage,
      desc: result?.prediction?.civil,
    },
    com: {
      image: civilImage,
      desc: result?.prediction?.com,
    },
    comoffice: {
      image: comofficeImage,
      desc: result?.prediction?.comoffice,
    },
    ie: {
      image: ieImage,
      desc: result?.prediction?.ie,
    },
    mechanic: {
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
      <DialogHeader>{result?.mostProbability}</DialogHeader>
      <DialogBody>
        <ResultCard
          name={result?.mostProbability}
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
