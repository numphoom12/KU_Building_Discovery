import { Button } from "@material-tailwind/react";
import React, { useState, useRef, useEffect } from "react";
import { IoMdPhotos } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
import ResultDialog from "../ResultDialog/ResultDialog";
import axios from "axios";

const ImageUploaderButton = () => {
  const [image, setImage] = useState([]);
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState();

  const [openDialog, setOpenDialog] = useState(false);

  const [result, setResult] = useState({});

  useEffect(() => {
    if (selectedFileName) {
      uploadFile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFileName]);

  const selectFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file);
    }
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

  // const onFileSelected = (e) => {
  //   const files = e.target.files;
  //   if (files.length === 0) return;
  //   for (let i = 0; i < files.length; i++) {
  //     if (files[i].type.split("/")[0] !== "image") continue;
  //     if (!image.some((e) => e.name === files[i].name)) {
  //       setImage((prevImage) => [
  //         ...prevImage,
  //         {
  //           name: files[i].name,
  //           url: URL.createObjectURL(files[i]),
  //         },
  //       ]);
  //     }
  //   }
  //   handleClick("/result");
  // };

  const deleteImage = (index) => {
    setImage((prevImage) => prevImage.filter((_, i) => i !== index));
  };
  return (
    <div className="flex">
      <Button className="text-2xl" variant="outlined" onClick={selectFile}>
        <IoMdPhotos />
        <input
          name="file"
          type="file"
          className="file hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        ></input>
      </Button>

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

      <ResultDialog
        open={openDialog}
        result={result}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default ImageUploaderButton;
