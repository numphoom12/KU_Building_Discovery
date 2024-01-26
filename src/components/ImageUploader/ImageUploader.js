import { Button } from "@material-tailwind/react";
import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";

import ResultDialog from "../ResultDialog/ResultDialog";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { instance } from "../../axiosConfig";

const ImageUploader = () => {
  const [image, setImage] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState();

  const [openDialog, setOpenDialog] = useState(false);

  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState()

  const selectFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file);
    }
  };

  useEffect(() => {
    if (selectedFileName) {
      uploadFile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFileName]);

  const deleteImage = (index) => {
    setImage((prevImage) => prevImage.filter((_, i) => i !== index));
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    setSelectedFileName(e.dataTransfer.files[0]);
  };

  // alert(process.env.REACT_APP_BASE_API)

  const uploadFile = async () => {
    try {
      setIsLoading(true)
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

      // const uploadResponse = await instance.post("/upload", formData)
      // const predictResponse = await instance.post("/predict", formData)

      console.log("Upload", uploadResponse.data);
      console.log("Predict", predictResponse.data);
      console.log("MostProb : ", predictResponse.data.mostProbability);

      setResult(predictResponse.data);
      setIsLoading(false)
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

  // const result = {
  //   status: "success",
  //   prediction: {
  //     civil: 0.0,
  //     comoffice: 0.0,
  //     ie: 0.0,
  //     mechanic: 0.0,
  //   },
  //   mostProbability: "comoffice",
  // };

  return (
    <>
      <div
        className={`drag-area lg:mt-20 mt-5 w-full flex flex-col sm:justify-center sm:items-center lg:gap-8 lg:pt-36 lg:pb-16 rounded-3xl bg-white shadow-2xl ${
          isDragging && "border-4 border-dashed border-blue-500"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

        {isDragging ? (
          <span className="font-bold text-gray-600 ">Drop image here</span>
        ) : (
          <>
            <Button
              className="hidden lg:block lg:text-lg rounded-full bg-gradient-to-r from-greenPrimary-50 to-greenPrimary-500"
              onClick={selectFile}
            >
              Upload Image
            </Button>
            <h3 className="font-bold text-gray-600 hidden lg:block">
              or drop a file
            </h3>
          </>
        )}
        <input
          name="file"
          type="file"
          className="file hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        ></input>
      </div>

      <div className="flex-wrap">
        {image.map((image, index) => (
          <div className="image" key={index}>
            <span className="delete" onClick={() => deleteImage(index)}>
              &times;
            </span>
            <img src={image.url} alt={image.name} width={100} />
          </div>
        ))}
      </div>
      {/* <Button onClick={handleDialog}>Open</Button> */}
      <ResultDialog
        open={openDialog}
        result={result}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default ImageUploader;
