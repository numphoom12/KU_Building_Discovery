import { Button } from "@material-tailwind/react";
import React, { useState, useRef } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const selectFile = () => {
    fileInputRef.current.click();
  };

  const onFileSelected = (e) => {
    const files = e.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!image.some((e) => e.name === files[i].name)) {
        setImage((prevImage) => [
          ...prevImage,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

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
    const files = e.dataTransfer.files;
    console.log(files);

    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!image.some((e) => e.name === files[i].name)) {
        setImage((prevImage) => [
          ...prevImage,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  return (
    <>
      <div
        className={`drag-area lg:mt-20 mt-5 w-full flex flex-col sm:justify-center sm:items-center lg:gap-8 lg:pt-36 lg:pb-16 rounded-md bg-white shadow-2xl ${
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
              className="select lg:text-lg rounded-full bg-gradient-to-r from-greenPrimary-50 to-greenPrimary-500"
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
          onChange={onFileSelected}
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
