import React, { useEffect, useState } from "react";
import CameraComponent from "../../components/CameraComponent/CameraComponent";
import ResultDialog from "../ResultDialog/ResultDialog";
import axios from "axios";

const Photo = () => {
  const [selectedFileName, setSelectedFileName] = useState();

  const [openDialog, setOpenDialog] = useState(false);

  const [result, setResult] = useState({});

  useEffect(() => {
    if (selectedFileName) {
      uploadFile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFileName]);

  const handleTakePhoto = (dataUri) => {
    console.log("Photo taken:", dataUri);
    // You can save or process the taken photo here
    setSelectedFileName(dataUri);
  };

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFileName);

      const uploadResponse = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const predictResponse = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(response.data);

      console.log("Upload", uploadResponse.data);
      console.log("Predict", predictResponse.data);
      console.log("MostProb : ", predictResponse.data.mostProbability);

      setResult(predictResponse.data);
      handleDialog();
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const handleDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <div className="flex justify-center m-6">
        <CameraComponent onTakePhoto={handleTakePhoto} />
      </div>
      <ResultDialog
        open={openDialog}
        result={result}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default Photo;
