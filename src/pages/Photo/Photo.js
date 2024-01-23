import React, { useEffect, useState } from "react";
import CameraComponent from "../../components/CameraComponent/CameraComponent";
// import ResultDialog from "../ResultDialog/ResultDialog";
import ResultDialog from "../../components/ResultDialog/ResultDialog";
import axios from "axios";

const Photo = () => {
  const [selectedFileName, setSelectedFileName] = useState();

  const [openDialog, setOpenDialog] = useState(false);

  const [result, setResult] = useState({});

  const [uri, setUri] = useState();

  useEffect(() => {
    if (selectedFileName) {
      uploadFile();
      console.log("fileDetail", selectedFileName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFileName]);

  function dataURItoBlob(dataURI) {
    if (!dataURI || typeof dataURI !== "string") {
      console.error("Invalid data URI:", dataURI);
      return null; // Or handle the error in a way that makes sense for your application
    }
  
    const [metadata, actualData] = dataURI.split(",");
    const mime = metadata.match(/:(.*?);/)[1];
  
    const byteString = atob(actualData);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
  
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
  
    // Create a Blob after filling the Uint8Array with data
    const blobParse = new Blob([uint8Array], { type: mime });
  
    console.log("Blob", blobParse);
  
    return blobParse;
  }
  

  // const handleTakePhoto = (dataUri) => {
  //   // console.log(first)
  //   const file = dataURItoBlob(dataUri);
  //   // setSelectedFileName(file)

  //   // console.log("Photo Taken",file)
  // };

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

  useEffect(() => {
    if(uri){
      console.log("uri uri uri uri uri uri",uri)
      const file = dataURItoBlob(uri)
      setSelectedFileName(file)
    }
  },[uri])

  const handleDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <div className="flex justify-center m-6">
        <CameraComponent onTakePhoto={setUri} />
      </div>

      {/* <img src={dataUri} alt="Captured" width={100} height={50} /> */}
      <ResultDialog
        open={openDialog}
        result={result}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default Photo;
