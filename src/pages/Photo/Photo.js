import React from "react";
import CameraComponent from "../../components/CameraComponent/CameraComponent";

const Photo = () => {
  const handleTakePhoto = (dataUri) => {
    console.log("Photo taken:", dataUri);
    // You can save or process the taken photo here
  };

  return (
    <div>
      <div className="flex justify-center m-6">
        <CameraComponent onTakePhoto={handleTakePhoto} />
      </div>
    </div>
  );
};

export default Photo;
