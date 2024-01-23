import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImageUploaderButton from "../ImageUploaderButton/ImageUploaderButton";

const CameraComponent = ({onTakePhoto}) => {
  const [dataUri, setDataUri] = useState(null);

  // const navigate = useNavigate();
  // const handleClick = (page) => {
  //   navigate(page);
  // };

  const handleTakePhoto = (dataUri) => {
    setDataUri(dataUri);
    onTakePhoto(dataUri);
    // handleClick("/result");
  };

  return (
    <div className="">
      <Camera
        // onTakePhoto={(dataUri) => handleTakePhoto(dataUri)}
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
        isFullscreen={false}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        imageType={IMAGE_TYPES.JPG}
      />

      <div className="flex justify-between p-4 my-3 border-2 border-grey">
        <ImageUploaderButton />

        {dataUri && (
          <img src={dataUri} alt="Captured" width={100} height={50} />
        )}
      </div>
    </div>
  );
};

export default CameraComponent;
