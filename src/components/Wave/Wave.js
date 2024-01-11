import React from "react";
import "../../App.css";

const waveStyles = {
  backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
};

const Wave = () => {
  return (
    <div className="waveWrapper waveAnimation">
      <div className="waveWrapperInner bgTop">
        <div className="wave waveTop" style={waveStyles}></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{
            backgroundImage:
              "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage:
              "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Wave;
