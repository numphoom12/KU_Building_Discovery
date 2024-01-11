import { Button } from "@material-tailwind/react";
import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const ImageUploader = () => {
  const [image, setImage] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName]= useState()
  // const navigate = useNavigate();
  // const handleDrop = (page) => {
  //   navigate(page);
  // };

  const selectFile = () => {
    fileInputRef.current.click();
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

  //   handleDrop("/result");
  // };

  // const onFileSelected = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   if (file && file.type.split("/")[0] === "image") {
  //     const newImage = {
  //       name: file.name,
  //       url: URL.createObjectURL(file),
  //     };
  //     setImage([newImage]);
  //     uploadFile(newImage);
  //   }

  //   handleDrop("/result");
  // };
  const handleFileChange = async (
    event
  ) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedFileName(file)
    }
  }

  useEffect(() => {
    if (selectedFileName) {
      uploadFile()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFileName])

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

  // const onDrop = (e) => {
  //   e.preventDefault();
  //   setIsDragging(false);
  //   const files = e.dataTransfer.files;
  //   console.log(files);

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
  //   handleDrop("/result");
  // };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    setSelectedFileName(e.dataTransfer.files[0])
    // const file = e.dataTransfer.files[0];

    // if (file && file.type.split("/")[0] === "image") {
    //   const newImage = {
    //     name: file.name,
    //     url: URL.createObjectURL(file),
    //   };
    //   setImage([newImage]);
    //   // Call uploadFile function here
    //   uploadFile(newImage);
    // }

    // handleDrop("/result");
    // uploadFile()
  };

  // const uploadFile = async (imageFile) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("image", imageFile);
  //     console.log("image file detail : ",formData)

  //     const responseUpload = await axios.post("http://localhost:8000/upload", formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     // const responsePredict = await axios.post("http://localhost:8000/predict", formData, {
  //     //   headers: {
  //     //     "Content-Type": "multipart/form-data",
  //     //   },
  //     // });

  //     console.log(
  //       "Image uploaded successfully:",
  //       responseUpload,
  //       "responsePredict: ",
  //       // responsePredict
  //     );
  //   } catch (error) {
  //     console.log("Error uploading file:", error);
  //     throw error;
  //   }
  // };

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFileName);

      const uploadResponse = await axios.post("http://127.0.0.1:8000/upload", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const predictResponse = await axios.post("http://127.0.0.1:8000/predict", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response.data);

      console.log("Upload", uploadResponse.data)
      console.log("Predict", predictResponse.data)
      console.log("MostProb : ", predictResponse.data.mostProbability)
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

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
    </>
  );
};

export default ImageUploader;
