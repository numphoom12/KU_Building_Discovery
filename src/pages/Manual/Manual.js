import React from "react";
import TakePicture from "../../assets/ManualImage/TakePicture.jpg";
import UploadPicture from "../../assets/ManualImage/Uploading-bro.png";
import PredictPicture from "../../assets/ManualImage/House searching-bro.png";

const Manual = () => {
  return (
    <div className="w-full mx-auto px-8">
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 my-10">
        <div className="flex flex-col justify-center align-middle ms-5">
          <h1 className="text-3xl font-extrabold text-greenPrimary-500 my-3">
            Take a photo of any Kasetsart University building.
          </h1>
          <div>
            If you are using a mobile device, click the 'Take Picture' button to
            capture an image. On the web, clicking the button will navigate you
            to the page where you can take a picture.
          </div>
        </div>
        <div className="flex-1 flex justify-center align-middle ">
          <img
            src={TakePicture}
            alt="TakePicture"
            width={350}
            className="rotate-on-hover"
          />
        </div>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 my-10">
        <div className="flex-1 flex justify-center align-middle order-1 md:order-none">
          <img
            src={UploadPicture}
            alt="UploadPicture"
            width={350}
            className="rotate-on-hover"
          />
        </div>
        <div className="flex flex-col justify-center align-middle ms-5">
          <h1 className="text-3xl font-extrabold text-greenPrimary-500 my-3">
            Or upload the image using our user-friendly interface.
          </h1>
          <div>
            If you are using a desktop device, you can upload an image by
            clicking 'Upload Image' or simply drag and drop the image file into
            the designated upload area.
          </div>
        </div>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2  my-10">
        <div className="flex flex-col justify-center align-middle ms-5">
          <h1 className="text-3xl font-extrabold text-greenPrimary-500 my-3">
            Let our intelligent system reveal the building's name.
          </h1>
          <div>
            After uploading an image or taking a picture, our website will
            analyze the image using deep learning technology to predict the
            building's name for you.
          </div>
        </div>
        <div className="flex-1 flex justify-center align-middle ">
          <img
            src={PredictPicture}
            alt="PredictPicture"
            width={350}
            className="rotate-on-hover"
          />
        </div>
      </div>
    </div>
  );
};

export default Manual;
