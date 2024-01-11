import { Button } from "@material-tailwind/react";
import React, { useState, useRef } from "react";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ImageUploaderButton = () => {
  const [image, setImage] = useState([]);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(page);
  };

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
    handleClick("/result");
  };

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
          onChange={onFileSelected}
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
    </div>
  );
};

export default ImageUploaderButton;
